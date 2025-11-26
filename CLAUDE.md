# Highlyreco Project Revival Context

## Project Overview
Highlyreco is a recommendation platform that was previously developed and is now being revived. This document provides context for future development sessions and serves as a comprehensive guide for continuing work on this project.

## What is Highlyreco?
Highlyreco appears to be a social recommendation platform built with Sails.js that allows users to:
- Discover and review books, products, articles, and other items
- Follow other users and curators
- Create collections and bookmark items
- Share recommendations socially
- Integrate with Twitter for content discovery
- Access premium features through subscriptions

## Current Status
- **Status**: Revival phase - analyzing existing codebase
- **Last Active**: Various folders from 2016-2021
- **Current Task**: Setting up organized project structure for revival
- **Location**: `/Users/alex/ec2code/highlyreco` (new organized location)

## Analysis Completed

### 1. Folder Structure Analysis
- Discovered 5 different highlyreco-related directories
- **Selected for revival**: Main `/highlyreco` folder (Sails.js 1.4.0) - latest git commit 2021-10-13
- **Status**: Will use this as the sole base for revival, ignoring other versions
- **See**: `docs/folder-analysis.md` for detailed comparison

### 2. Database Discovery
- Found PostgreSQL database schema and fixtures
- Located Redis dump file (67KB from 2016)
- Discovered SQLite test database
- Found comprehensive test data in JSON and TSV formats
- **See**: `docs/database-backups.md` for complete backup inventory

### 3. Project Structure Understanding
- Sails.js-based Node.js application
- PostgreSQL + Redis architecture
- EJS templating with Semantic UI
- Twitter integration and social features
- Comprehensive testing setup
- **See**: `docs/project-structure.md` for detailed analysis

## Technology Stack Summary

### Backend
- **Framework**: Sails.js 1.4.0 (recommended version)
- **Runtime**: Node.js 14.16.0
- **Database**: PostgreSQL + Redis
- **Authentication**: Passport.js (Local + Twitter OAuth)
- **Queue**: Bull/Kue for background jobs

### Frontend
- **Templates**: EJS
- **CSS**: Semantic UI
- **JavaScript**: jQuery
- **Rich Text**: CKEditor, Trix

### External Services
- Twitter API integration
- SendGrid for email
- Elasticsearch for search (in advanced version)
- Sentry for error tracking

## Key Features Identified
- User management with social login
- Content recommendation system
- Social following/followers
- Bookmarking and collections
- Review and rating system
- Curator dashboard
- Premium subscriptions
- Twitter content curation
- Real-time notifications

## Available Resources

### Database Backups
- **PostgreSQL Schema**: Complete database structure in SQL format
- **Redis Dump**: Session/cache data from 2016
- **Test Data**: Comprehensive fixtures and mock data
- **Sample Users**: Including curator accounts and feature flags

### Code Assets
- **Main Application**: Modern Sails.js 1.4.0 codebase
- **Advanced Features**: Elasticsearch integration, Asana connections
- **UI Components**: Complete Semantic UI implementation
- **Tests**: Mocha test suites with fixtures

### Documentation
- API controllers and models
- Service layer implementations
- Database migrations
- Configuration files
- View templates and partials

## Immediate Next Steps for Revival

### Phase 1: Environment Setup
1. Copy old highlyreco project (main folder) to organized location
2. Set up Node.js 14.16.0 environment
3. Install dependencies via npm
4. Configure local development environment

### Phase 2: Database Recovery
1. Set up PostgreSQL database
2. Restore schema from SQL dumps
3. Import test/sample data
4. Configure Redis for sessions
5. Test database connections

### Phase 3: Application Startup
1. Configure environment variables
2. Set up Twitter API credentials
3. Configure email services
4. Test basic application startup
5. Verify core functionality

### Phase 4: Feature Assessment
1. Test user authentication
2. Verify review/recommendation system
3. Check Twitter integration
4. Test social features
5. Assess UI/UX state

## Development Commands Reference
```bash
# Start application
npm start

# Run tests
npm test
npm run test_services
npm run test_controllers

# Database operations
npm run create_sql
npm run load_test_db

# Development
npm run debug
```

## Configuration Notes
- Environment-specific configs in `config/env/`
- Database settings in `config/datastores.js`
- Routes defined in `config/routes.js`
- Policies in `config/policies.js`

## Security Considerations
- Update all dependencies to latest secure versions
- Review authentication implementation
- Check for hardcoded credentials
- Implement modern security headers
- Update Twitter API to latest version

## Modernization Opportunities
- Migrate frontend to React/Vue.js
- Implement REST/GraphQL API
- Add modern testing frameworks
- Set up CI/CD pipeline
- Containerize with Docker
- Add monitoring and analytics

## File Locations Reference
- **Old highlyreco project**: `/Users/alex/ec2code/ec2code 2/alex/highlyreco` (latest commit: 2021-10-13)
- **Revival location**: `/Users/alex/ec2code/highlyreco` (organized project structure)
- **Documentation**: `/Users/alex/ec2code/highlyreco/docs/`
- **Database backups**: See `docs/database-backups.md` for exact paths
- **Note**: Other highlyreco folders are ignored for revival purposes

## Contact Context
This revival is being done by Alex, the original author, to restart development on the highlyreco platform. The goal is to modernize and relaunch the service.

## Important Notes for Future Sessions
1. **Always check this CLAUDE.md first** for project context
2. **Database backups are critical** - handle with care
3. **Use only the old highlyreco project** - ignore other versions for revival
4. **Dependencies need updating** - security and compatibility updates required
5. **Twitter API credentials** will need to be reconfigured
6. **Test data is available** - use fixtures for development

## Current Working Directory
When continuing work on this project, always start from:
```
/Users/alex/ec2code/highlyreco
```

This is the organized project root with all documentation and will be the base for the revived application.

---

*Last updated: 2025-07-10*
*Status: Analysis complete, ready for revival implementation*