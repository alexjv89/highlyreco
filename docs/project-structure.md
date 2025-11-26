# Highlyreco Project Structure Overview

## Project Summary
Highlyreco appears to be a recommendation platform built with Sails.js (Node.js framework) that integrates social features, content curation, and Twitter integration for discovering and sharing recommendations.

## Technology Stack

### Backend Framework
- **Primary**: Sails.js (v1.4.0 recommended)
- **Database**: PostgreSQL with Redis for caching
- **Authentication**: Passport.js (Local + Twitter OAuth)
- **Queue System**: Kue/Bull (in advanced versions)

### Frontend Technologies
- **Template Engine**: EJS
- **CSS Framework**: Semantic UI
- **JavaScript**: jQuery
- **Rich Text**: CKEditor, Trix Editor

### External Integrations
- **Social**: Twitter API
- **Search**: Elasticsearch (in feature-rich version)
- **Email**: SendGrid
- **Analytics**: Asana integration
- **Monitoring**: Sentry (Raven)

## Core Features Analysis

### User Management
- User registration/authentication
- Social login (Twitter)
- User profiles with avatars
- Following/followers system
- Curator permissions
- Pro user subscriptions with trials

### Content System
- **Items**: Books, articles, products, places, podcasts, videos
- **Reviews**: User-generated recommendations
- **Collections**: Curated lists of items
- **Bookmarks**: Save items for later
- **Tags**: Categorization system

### Social Features
- Follow users
- Share recommendations
- Upvote reviews
- Notifications system
- Activity feeds
- Social discovery

### Curation Features
- Curator dashboard
- Content moderation
- Twitter content curation
- Automated content discovery
- Expert recommendations

## Directory Structure (Based on Main Version)

```
highlyreco/
├── api/
│   ├── controllers/          # Request handlers
│   │   ├── AuthController.js
│   │   ├── ReviewController.js
│   │   ├── UserController.js
│   │   └── ...
│   ├── models/              # Database models
│   │   ├── User.js
│   │   ├── Review.js
│   │   ├── Item.js
│   │   └── ...
│   ├── policies/            # Access control
│   ├── responses/           # Custom responses
│   └── services/            # Business logic
│       ├── TwitterService.js
│       ├── ValidationService.js
│       └── ...
├── assets/                  # Static files
│   ├── images/
│   ├── js/
│   ├── semantic/           # Semantic UI
│   └── styles/
├── config/                  # Application configuration
│   ├── datastores.js       # Database config
│   ├── routes.js           # URL routing
│   ├── policies.js         # Security policies
│   └── ...
├── views/                   # EJS templates
│   ├── homepage_pre_login.ejs
│   ├── review_page.ejs
│   ├── user_page.ejs
│   └── partials/           # Reusable components
├── test/                    # Test suites
│   ├── integration/
│   └── fixtures/
└── package.json
```

## Database Schema Overview

### Core Tables
- **user**: User accounts and profiles
- **review**: Product/content reviews
- **item**: Reviewable items (books, products, etc.)
- **bookmark**: User bookmarks
- **favorite_review**: Liked reviews
- **tag**: Tagging system
- **collection**: User-created collections
- **notification**: User notifications
- **raw_tweet**: Twitter integration data

### Relationship Tables
- **user_followers__user_following**: Social connections
- **list_people__user_listed_in**: List memberships

## Key Services

### TwitterService
- Tweet fetching and processing
- User discovery from Twitter
- Content curation from tweets

### ValidationService
- Data validation
- Content moderation
- Input sanitization

### ElasticSearchService (Advanced version)
- Full-text search
- Content indexing
- Search analytics

### NotificationService
- User notifications
- Email notifications
- Real-time updates

## Authentication Flow
1. Local registration/login
2. Twitter OAuth integration
3. Session management with Redis
4. Passport.js middleware
5. JWT tokens (in newer versions)

## Content Workflow
1. **Discovery**: Find items via search, social, or curation
2. **Review**: Users write recommendations
3. **Social**: Share, follow, bookmark
4. **Curation**: Curators moderate and promote content
5. **Analytics**: Track engagement and performance

## Revenue Model (Inferred)
- Freemium model with trial periods
- Pro user subscriptions
- Potential affiliate links (Amazon)
- Curator monetization

## Development Environment
- **Node.js**: v14.16.0 (specified in main version)
- **Package Manager**: npm with package-lock.json
- **Task Runner**: Grunt.js
- **Testing**: Mocha + Chai
- **Database**: PostgreSQL + Redis

## Deployment Considerations
- Docker support (Dockerfile present)
- AWS integration capabilities
- Environment-based configuration
- Database migrations
- Asset building pipeline

## Missing/Deprecated Features
- Real-time chat (referenced in some views)
- Mobile app support
- API documentation
- Modern frontend framework (React/Vue)

## Modernization Opportunities
1. **Frontend**: Migrate to React/Vue
2. **API**: REST/GraphQL API layer
3. **Testing**: Modern testing frameworks
4. **CI/CD**: GitHub Actions pipeline
5. **Monitoring**: Modern APM tools
6. **Security**: Updated authentication flows