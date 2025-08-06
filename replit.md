# replit.md

## Overview

Krishna Cabs Pvt Ltd is a premium car rental service application built for business professionals in Ahmedabad, Gujarat. The application provides chauffeur-driven car rental services, airport transfers, city transportation, and outstation travel solutions. It features a modern React-based frontend with a professional design system, comprehensive form handling with Indian date formatting, feedback collection system, and culturally appropriate imagery showcasing Indian professionals. The Node.js Express backend manages API operations with email integration for inquiries and feedback.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Krishna Cabs brand colors (gold/yellow primary theme)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack React Query for server state management and API data fetching
- **Forms**: React Hook Form with Zod validation for robust form handling and validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful API endpoints for contact forms and booking submissions
- **Validation**: Zod schemas for request validation on both client and server
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement and middleware logging for development experience

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: User management schema with username/password authentication structure
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Connection**: Configured for PostgreSQL with environment-based database URL

### Component Architecture
- **Design System**: Custom component library built on Radix UI primitives
- **Layout Components**: Responsive header with mobile navigation and professional footer
- **Business Components**: Specialized components for fleet display, service cards, and booking forms
- **Form Components**: Reusable form components with integrated validation and error handling

### Styling System
- **CSS Framework**: Tailwind CSS with custom configuration
- **Theme**: Professional black, gray, and gold color scheme reflecting luxury transportation
- **Typography**: Poppins and Inter fonts for modern, readable typography
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive design
- **Component Styling**: CSS-in-JS approach using class-variance-authority for component variants

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript for modern frontend development
- **Routing**: Wouter for lightweight, hook-based routing
- **State Management**: TanStack React Query for server state and caching
- **Forms**: React Hook Form with Hookform Resolvers for form management

### UI and Styling Dependencies
- **UI Components**: Complete Radix UI component suite for accessible, unstyled primitives
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer for utility-first styling
- **Utility Libraries**: clsx and tailwind-merge for conditional CSS classes
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Server Framework**: Express.js for RESTful API development
- **Database**: Drizzle ORM with PostgreSQL dialect and Neon Database serverless driver
- **Validation**: Zod for runtime type checking and validation
- **Development Tools**: tsx for TypeScript execution and esbuild for production bundling

### Development and Build Tools
- **Build Tool**: Vite with React plugin for fast development and optimized builds
- **Database Tools**: Drizzle Kit for schema management and migrations
- **Development Plugins**: Replit-specific plugins for development environment integration
- **TypeScript**: Full TypeScript configuration with strict type checking enabled

### Third-Party Integrations
- **Image Assets**: AI-generated copyright-free images for corporate service scenes, Indian professional staff (chauffeurs, maintenance team)
- **Font Loading**: Google Fonts integration for Poppins and Inter typography
- **Email Integration**: Mailto functionality for contact forms, booking inquiries, and customer feedback
- **Development Environment**: Replit-specific development banner and error overlay plugins

## Recent Changes (January 2025)
- **Enhanced Form Validation**: Added comprehensive Zod validation with Indian date formatting (DD/MM/YYYY), input constraints, and descriptive error messages
- **Travel Date Integration**: Added optional travel date and time fields to contact form matching booking form functionality
- **Feedback System**: Implemented customer feedback form with star ratings and email integration on contact page
- **Cultural Localization**: Replaced generic stock images with AI-generated Indian professional staff imagery
- **Email Formatting**: All form submissions format dates in Indian DD/MM/YYYY format for local relevance