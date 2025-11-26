# Highlyreco Revival - Database Schema Design

## Overview
Simplified schema design for the revived highlyreco platform, starting with core User, Item, and Review models.

## Core Models

### 1. User Model

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255), -- nullable for social login only
    
    -- Profile
    bio TEXT,
    avatar_url VARCHAR(500),
    website_url VARCHAR(500),
    
    -- Social
    twitter_username VARCHAR(50),
    
    -- Status flags
    is_active BOOLEAN DEFAULT true,
    is_email_verified BOOLEAN DEFAULT false,
    is_curator BOOLEAN DEFAULT false,
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_twitter ON users(twitter_username);
```

**Key Changes from Old Model:**
- Simplified authentication (removed Twitter tokens for now)
- Removed complex feature flags and credit system
- Kept essential curator flag
- Clean, modern field names

### 2. Item Model

```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    url VARCHAR(1000),
    type VARCHAR(50) DEFAULT 'book',
    description TEXT,
    
    -- Metadata
    author VARCHAR(255),
    published_year INTEGER,
    image_url VARCHAR(500),
    
    -- Aggregated data
    review_count INTEGER DEFAULT 0,
    average_rating DECIMAL(3,2), -- 0.00 to 5.00
    
    -- Search and discovery
    slug VARCHAR(255),
    
    -- Status
    is_active BOOLEAN DEFAULT true,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_items_slug ON items(slug);
CREATE INDEX idx_items_type ON items(type);
CREATE INDEX idx_items_url ON items(url);
CREATE UNIQUE INDEX idx_items_url_unique ON items(url) WHERE url IS NOT NULL;
```

**Key Changes from Old Model:**
- Simplified structure, removed complex details JSON
- Added explicit metadata fields (author, year, image)
- Better indexing for search and discovery
- URL remains unique but nullable

### 3. Review Model (Flexible Item Reference)

```sql
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    
    -- Author
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Item Reference (flexible approach)
    item_id INTEGER REFERENCES items(id) ON DELETE SET NULL,
    item_name VARCHAR(500), -- fallback when item_id is null
    item_url VARCHAR(1000),  -- fallback when item_id is null
    
    -- Content
    title VARCHAR(255),
    body TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    
    -- Status
    is_published BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    
    -- Engagement metrics
    upvote_count INTEGER DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT review_has_item_reference CHECK (
        item_id IS NOT NULL OR item_name IS NOT NULL
    )
);

-- Indexes
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_item_id ON reviews(item_id);
CREATE INDEX idx_reviews_published ON reviews(is_published);
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);
```

**Key Innovation - Flexible Item Reference:**
1. **item_id**: References existing item (preferred)
2. **item_name**: Fallback when item doesn't exist yet
3. **item_url**: Optional URL when item doesn't exist yet
4. **Constraint**: Ensures at least one reference exists

## Business Logic

### Review Creation Flow

```javascript
// Pseudo-code for review creation
async function createReview(reviewData) {
    const { itemName, itemUrl, userId, title, body, rating } = reviewData;
    
    // Try to find existing item
    let item = null;
    if (itemUrl) {
        item = await Item.findOne({ url: itemUrl });
    }
    if (!item && itemName) {
        item = await Item.findOne({ name: itemName });
    }
    
    // Create review with appropriate reference
    const review = await Review.create({
        user_id: userId,
        item_id: item?.id || null,
        item_name: item ? null : itemName,
        item_url: item ? null : itemUrl,
        title,
        body,
        rating,
        is_published: true
    });
    
    // Update item review count if item exists
    if (item) {
        await Item.update(
            { id: item.id },
            { review_count: item.review_count + 1 }
        );
    }
    
    return review;
}
```

### Item Creation from Review

```javascript
// Function to convert review references to actual items
async function promoteReviewToItem(reviewId, itemDetails) {
    const review = await Review.findOne({ id: reviewId });
    
    // Create new item from review data
    const item = await Item.create({
        name: review.item_name,
        url: review.item_url,
        ...itemDetails // additional metadata
    });
    
    // Update review to reference the new item
    await Review.update(
        { id: reviewId },
        { 
            item_id: item.id,
            item_name: null,
            item_url: null
        }
    );
    
    return item;
}
```

## Database Views for Easy Querying

### Complete Review View

```sql
CREATE VIEW review_details AS
SELECT 
    r.id,
    r.title,
    r.body,
    r.rating,
    r.is_published,
    r.upvote_count,
    r.created_at,
    
    -- User info
    u.username,
    u.name as user_name,
    u.avatar_url,
    
    -- Item info (flexible)
    CASE 
        WHEN r.item_id IS NOT NULL THEN i.name
        ELSE r.item_name
    END as item_name,
    
    CASE 
        WHEN r.item_id IS NOT NULL THEN i.url
        ELSE r.item_url
    END as item_url,
    
    i.type as item_type,
    i.author as item_author,
    i.image_url as item_image,
    
    -- Indicators
    r.item_id IS NOT NULL as has_item_record
    
FROM reviews r
JOIN users u ON r.user_id = u.id
LEFT JOIN items i ON r.item_id = i.id
WHERE r.is_published = true;
```

## Migration Strategy

### Phase 1: Basic Implementation
1. Create tables with basic fields
2. Implement flexible review creation
3. Basic CRUD operations

### Phase 2: Enhanced Features  
1. Add item promotion workflow
2. Implement review aggregation
3. Add search capabilities

### Phase 3: Advanced Features
1. Add recommendation engine
2. Implement social features
3. Add curation tools

## Benefits of This Approach

1. **Flexibility**: Users can review items that don't exist yet
2. **Data Integrity**: Maintains referential integrity where possible
3. **Scalability**: Can easily promote reviews to full items
4. **Simplicity**: Clean, understandable schema
5. **Performance**: Proper indexing for common queries

---

**Design Date**: 2025-07-10  
**Status**: Core schema ready for implementation