# Highlyreco Data Model Analysis

## Overview
Analysis of the old highlyreco project's data models to determine which models should be migrated to the revived platform and which should be dropped.

## Core Domain Models

### 🟢 **MIGRATE - Essential Core Models**

#### 1. **User** (Primary entity)
- **Purpose**: Central user management with social features
- **Key Features**:
  - Authentication (local + Twitter OAuth)
  - Social following/followers relationships
  - Curator and influencer flags
  - Credit system and premium features
  - Profile information and settings
- **Migration Priority**: HIGH - Foundation of the platform
- **Modernization Notes**: Update security, simplify feature flags

#### 2. **Item** (Content being recommended)
- **Purpose**: Represents books, articles, videos, podcasts, etc.
- **Key Features**:
  - Multiple content types (book, video, article, podcast, etc.)
  - URL normalization and metadata
  - Review counts and scoring
  - Tag relationships
- **Migration Priority**: HIGH - Core content entity
- **Modernization Notes**: Improve content type handling, better metadata

#### 3. **Review** (Recommendations/Reviews)
- **Purpose**: User recommendations and reviews of items
- **Key Features**:
  - Rich text content with sanitization
  - Reviewer and item relationships
  - Publishing status and scoring
  - Social features (upvotes, favorites)
- **Migration Priority**: HIGH - Core value proposition
- **Modernization Notes**: Improve content editing, better moderation

#### 4. **Collection** (Curated lists)
- **Purpose**: Organized groups of reviews/recommendations
- **Key Features**:
  - Visibility controls (public, private, restricted, paid)
  - User ownership and sharing
  - Group and individual access control
- **Migration Priority**: HIGH - Important curation feature
- **Modernization Notes**: Simplify sharing model

### 🟡 **MIGRATE - Important Supporting Models**

#### 5. **Bookmark**
- **Purpose**: Users save items for later
- **Key Features**: Simple user-item relationship with notes
- **Migration Priority**: MEDIUM - Important user feature
- **Modernization Notes**: Consider renaming to "SavedItem"

#### 6. **Tag**
- **Purpose**: Categorization system for users and items
- **Key Features**: Many-to-many relationships with users and items
- **Migration Priority**: MEDIUM - Important for discovery
- **Modernization Notes**: Improve tag management and hierarchy

#### 7. **Notification**
- **Purpose**: User notifications system
- **Key Features**: Notification body, type, read status, links
- **Migration Priority**: MEDIUM - Important for engagement
- **Modernization Notes**: Add real-time capabilities

#### 8. **Favorite_review** (Upvotes)
- **Purpose**: Users can upvote/like reviews
- **Key Features**: Simple user-review relationship
- **Migration Priority**: MEDIUM - Social engagement feature
- **Modernization Notes**: Consider broader reaction system

#### 9. **Read_book** (Completion tracking)
- **Purpose**: Track what items users have completed
- **Key Features**: User-item completion relationship
- **Migration Priority**: MEDIUM - Useful for recommendations
- **Modernization Notes**: Rename to "CompletedItem"

### 🔴 **DROP - Legacy/Unused Models**

#### 10. **Comments** ❌
- **Status**: Empty model with no attributes
- **Reason**: Not implemented, redundant with reviews
- **Action**: DROP

#### 11. **Curatereview** ❌
- **Status**: Empty model with no attributes  
- **Reason**: Not implemented or used
- **Action**: DROP

#### 12. **Group** ❌
- **Purpose**: User groups for collection sharing
- **Reason**: Overly complex sharing model, collections can handle this simpler
- **Action**: DROP - Simplify to direct user sharing

### 🟠 **EVALUATE - Twitter/Social Integration Models**

#### 13. **Raw_tweet**
- **Purpose**: Twitter content curation and mining
- **Key Features**: Tweet storage, classification, processing pipeline
- **Migration Decision**: CONDITIONAL
- **Considerations**: 
  - Twitter API costs and complexity
  - Content curation value vs. effort
  - Alternative content discovery methods
- **Recommendation**: DROP initially, consider for later phase

#### 14. **List** (Domain expert lists)
- **Purpose**: Lists of influencers/experts by domain
- **Migration Decision**: CONDITIONAL
- **Considerations**: Tied heavily to Twitter integration
- **Recommendation**: DROP initially, use Tags for expertise instead

#### 15. **Crawl_log**
- **Purpose**: Twitter crawling logs
- **Migration Decision**: DROP
- **Reason**: Tied to Twitter integration

### 🟠 **EVALUATE - Business Models**

#### 16. **Order**
- **Purpose**: Premium subscription orders
- **Migration Decision**: CONDITIONAL
- **Considerations**: Depends on business model for revival
- **Recommendation**: DROP initially, implement simpler premium model later

#### 17. **Credit_change**
- **Purpose**: Credit system transactions
- **Migration Decision**: CONDITIONAL  
- **Considerations**: Complex credit system may not be needed initially
- **Recommendation**: DROP initially, implement simpler premium model

## Migration Strategy

### Phase 1: Core Platform (MVP)
**MIGRATE IMMEDIATELY:**
- User (simplified)
- Item 
- Review
- Collection (simplified)
- Bookmark
- Tag (basic)

### Phase 2: Enhanced Features
**MIGRATE WITH IMPROVEMENTS:**
- Notification (with real-time)
- Favorite_review (enhanced reactions)
- Read_book (renamed CompletedItem)

### Phase 3: Advanced Features (Future)
**CONSIDER FOR LATER:**
- Social content curation (alternative to Twitter)
- Premium features (simpler than credit system)
- Advanced sharing and groups

## Database Schema Simplification

### Recommended Changes:
1. **Remove Twitter dependencies** - Focus on manual content curation
2. **Simplify sharing model** - Direct user sharing instead of groups
3. **Streamline premium features** - Simple subscription vs complex credits
4. **Improve content types** - Better handling of multimedia content
5. **Modern authentication** - Enhanced security, 2FA support
6. **Better search/discovery** - Improved tagging and categorization

### Data Migration Notes:
- User data: Preserve core user info, migrate essential social connections
- Content: Migrate all items and reviews, preserve relationships
- Social: Migrate bookmarks, favorites, follows, basic collections
- Drop: Twitter data, complex premium features, unused models

## Modernization Opportunities

1. **GraphQL API** - Replace REST with modern API
2. **Real-time features** - Live notifications, collaborative editing
3. **Better content handling** - Rich media, better parsing
4. **Mobile-first design** - Responsive, PWA capabilities
5. **AI-enhanced recommendations** - Modern ML for content discovery
6. **Social features** - Improved sharing, communities
7. **Content creation tools** - Better review writing experience

---

**Analysis Date**: 2025-07-10  
**Status**: Migration strategy defined, ready for implementation