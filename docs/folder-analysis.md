# Highlyreco Folder Analysis

## Overview
During the project revival process, we discovered 5 different highlyreco-related directories in the codebase. This document analyzes the differences between them to determine the best base for revival.

## Discovered Directories

### 1. `/highlyreco` (Main/Latest Version) ⭐ **RECOMMENDED**
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco`
- **Sails.js Version**: 1.4.0 (modern)
- **Node.js**: 14.16.0
- **Status**: Most recent and production-ready
- **Key Features**:
  - Modern dependencies (bcryptjs 2.4.3, updated packages)
  - Comprehensive testing suite
  - Complete documentation
  - Redis dump file present
  - PostgreSQL fixtures
- **Dependencies Highlights**:
  - `@sailshq/connect-redis: ^3.2.1`
  - `sails: ^1.4.0`
  - `bcryptjs: ^2.4.3`
  - `passport-twitter: ^1.0.4`

### 2. `/highlyreco copy` (Legacy Version)
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco copy`
- **Sails.js Version**: 0.12.3 (legacy)
- **Status**: Older backup version
- **Key Features**:
  - Older dependency versions
  - Simpler structure
  - Basic functionality
- **Dependencies Highlights**:
  - `sails: ~0.12.3`
  - `bcrypt: ^0.8.5` (older)
  - `grunt: 0.4.2` (older)

### 3. `/highlyreco2` (Different Project)
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco2`
- **Project Name**: "mralbert" (not highlyreco)
- **Sails.js Version**: 1.2.3
- **Status**: Different project entirely
- **Key Features**:
  - Bull queue system
  - AWS integration
  - Payment processing (Razorpay)
  - SQLite database (test.db)
- **Dependencies Highlights**:
  - `bull: ^3.14.0`
  - `aws-sdk: ^2.622.0`
  - `razorpay: ^2.0.6`

### 4. `/time_travel/highlyreco` (Feature-Rich Version)
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/time_travel/highlyreco`
- **Sails.js Version**: 1.0.2
- **Status**: Most feature-complete but slightly older
- **Key Features**:
  - Elasticsearch integration
  - Asana integration
  - Extensive UI components
  - Rich feature set
  - Comprehensive test fixtures
- **Dependencies Highlights**:
  - `elasticsearch: ^13.3.1`
  - `asana: ^0.15.0`
  - `kue: ^0.11.6`
  - `sendgrid: ^5.2.3`

### 5. `/highlyrecodjangoadmin` (Django Admin)
- **Location**: `/Users/alex/ec2code/ec2code 2/alex/highlyrecodjangoadmin`
- **Technology**: Django/Python
- **Status**: Admin interface
- **Purpose**: Administrative interface for highlyreco

## Recommendation

**Primary Choice**: `/highlyreco` (Main folder)
- Latest Sails.js version (1.4.0)
- Modern Node.js (14.16.0)
- Updated security dependencies
- Production-ready structure

**Secondary Choice**: `/time_travel/highlyreco`
- Most feature-complete
- Rich integrations
- May need dependency updates

## Migration Strategy

1. **Base**: Use main `/highlyreco` as foundation
2. **Features**: Cherry-pick advanced features from `/time_travel/highlyreco`
3. **Database**: Restore from PostgreSQL dump in fixtures
4. **Admin**: Integrate Django admin if needed
5. **Dependencies**: Update all to latest compatible versions

## Git Commit Analysis

Latest commit dates for each folder:

1. **Main highlyreco**: `2021-10-13 13:03:04` - "more changes" ⭐ **LATEST**
2. **time_travel/highlyreco**: `2021-03-12 07:58:38` - "remove curator controller for tracks"
3. **highlyreco2**: `2020-08-12 18:50:05` - "trying out the code from switchless"
4. **highlyreco copy**: `2016-08-28 00:20:05` - "on boarding - this follows influencers"
5. **Django admin**: `2016-08-21 01:55:13` - "bug fix"

## File Dates Analysis

- **Main highlyreco**: Most recent updates (2021) - Latest git commit
- **highlyreco copy**: Older (2016-2017)
- **time_travel/highlyreco**: Mixed dates, extensive development (last commit March 2021)
- **highlyreco2**: Recent (2020) but different project

## Next Steps

1. Copy main highlyreco as base
2. Extract database schemas and data
3. Review and merge advanced features
4. Update dependencies
5. Set up development environment