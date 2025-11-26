# Database Backups Discovery

## Overview
During the highlyreco project analysis, we discovered several database backup files across different project folders. This document catalogs all found database-related files and their potential for project revival.

## Database Backup Files Found

### 1. Redis Database Dump ⭐ **PRIMARY CACHE BACKUP**
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco/dump.rdb`
- **Type**: Redis database dump file
- **Size**: 67,043 bytes (67KB)
- **Date**: November 29, 2016
- **Status**: Binary Redis dump format
- **Contains**: Session data, cache, temporary data from 2016

### 2. PostgreSQL Database Schema ⭐ **PRIMARY DATABASE BACKUP**
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco/test/fixtures/create_highlyreco.sql`
- **Type**: PostgreSQL database dump (schema + data)
- **Source Database**: PostgreSQL 9.4.7
- **Dump Tool**: pg_dump version 9.6.2
- **Contains**: Complete database schema and fixture data
- **Also found in**: `/time_travel/highlyreco/test/fixtures/create_highlyreco.sql`

### 3. Raw Tweets SQL Schema
- **Location**: 
  - `/Users/alex/ec2code/ec2code 2/alex/highlyreco/test/fixtures/create_rawtweets.sql`
  - `/Users/alex/ec2code/ec2code 2/alex/time_travel/highlyreco/test/fixtures/create_rawtweets.sql`
- **Type**: PostgreSQL schema for Twitter data
- **Purpose**: Twitter integration data structure

### 4. SQLite Test Database
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco2/test.db`
- **Type**: SQLite 3.x database
- **Size**: 16,384 bytes (16KB)
- **Date**: November 21, 2020
- **SQLite Version**: 3031001
- **Status**: Contains test data for different project (mralbert)

### 5. JSON Data Files

#### Main Dummy Data
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco/dummy_data.json`
- **Size**: 4,624 bytes
- **Date**: April 6, 2017
- **Content Preview**:
  ```json
  {
    "pg": {
      "u": {
        "name": "Anzal Ansari",
        "twitter": "anzal_ansari",
        "email": "anzal.ansari@gmail.com",
        "is_curator": true,
        "image_url": "https://pbs.twimg.com/profile_images/780557583861948416/Q3rM8EbD.jpg",
        "username": "anzal_ansari",
        "is_allowed": true,
        "is_email_valid": false,
        "can_recommend": false,
        "is_influencer": null,
        "description": null,
        "score": null,
        "details": {
          "trial_expire_date": "2017-03-02T04:55:31.769Z"
        },
        "feature_flags": {
          "enable_onboarding": false
        }
      }
    }
  }
  ```

#### Test Fixtures
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco/test/fixtures/mock.data.json`
- **Also in**: `/time_travel/highlyreco/test/fixtures/mock.data.json`
- **Purpose**: Mock data for testing

#### Cookies/Session Data
- **Location**: 
  - `/Users/alex/ec2code/ec2code 2/alex/highlyreco/test/fixtures/cookies.json`
  - `/time_travel/highlyreco/test/fixtures/cookies.json`
- **Purpose**: Test session data

### 6. Local Development Databases
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco/.tmp/localDiskDb.db`
- **Also in**: `/highlyreco copy/.tmp/localDiskDb.db`
- **Type**: Sails.js local disk database
- **Purpose**: Development/testing local storage

### 7. Test Data Files (TSV Format)
Found in `/time_travel/highlyreco/test/fixtures/mock_tables/`:
- `bookmark.tsv`
- `favorite_review.tsv`
- `item.tsv`
- `list.tsv`
- `list_people__user_listed_in.tsv`
- `raw_tweet.tsv`
- `read_book.tsv`
- `review.tsv`
- `tag.tsv`
- `user.tsv`
- `user_followers__user_following.tsv`

## Database Schema Information

### Core Tables (from SQL analysis)
- **Users**: User accounts, profiles, authentication
- **Reviews**: Product/content reviews
- **Items**: Reviewable items (books, products, etc.)
- **Bookmarks**: User bookmarks
- **Tags**: Tagging system
- **Lists**: User-created lists
- **Raw Tweets**: Twitter integration data
- **Followers/Following**: Social relationships

## Recovery Priority

### High Priority (Production Data)
1. **PostgreSQL Schema**: `create_highlyreco.sql` - Complete database structure
2. **Dummy Data**: `dummy_data.json` - Sample production-like data
3. **Redis Dump**: `dump.rdb` - Session/cache data (historical)

### Medium Priority (Development Data)
1. **Test Fixtures**: Mock data for development
2. **TSV Files**: Structured test data
3. **SQLite DB**: Test database from different project

### Low Priority (Temporary Data)
1. **Local Disk DBs**: Development temporary data
2. **Cookies**: Test session data

## Recovery Strategy

### Phase 1: Schema Recovery
1. Restore PostgreSQL schema from `create_highlyreco.sql`
2. Set up database connection in new project
3. Verify table structure and relationships

### Phase 2: Data Recovery
1. Import dummy data from JSON files
2. Convert TSV fixtures to PostgreSQL format if needed
3. Set up development data pipeline

### Phase 3: Cache/Session Recovery
1. Analyze Redis dump for session structure
2. Set up Redis configuration
3. Implement session management

## Database Configuration Files
Check these locations for database connection configs:
- `config/datastores.js`
- `config/local.js`
- `config/env/`

## Next Steps
1. Set up PostgreSQL database
2. Restore schema from SQL dump
3. Import test data
4. Configure database connections
5. Verify data integrity