# Airavata Tech - Landing Page

## Overview

A modern marketing landing page for Airavata Technologies, a tech services company. The application features a single-page design with hero section, features showcase, pricing tiers, and a contact form. Built as a full-stack TypeScript application with React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth scroll reveals and transitions
- **Typography**: Custom fonts (Lexend for display, Inter for body text)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints defined in shared route contracts
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Build System**: esbuild for server bundling, Vite for client

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Page components (Home, 404)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route type definitions
└── migrations/       # Database migrations
```

### Key Design Patterns
- **Shared Type Contracts**: API routes defined in `shared/routes.ts` with Zod schemas for type-safe client-server communication
- **Type-Safe Database**: Drizzle ORM with schemas in `shared/schema.ts`, generating TypeScript types automatically
- **Component-Based UI**: shadcn/ui components with Radix UI primitives for accessibility
- **Path Aliases**: TypeScript paths configured for clean imports (`@/`, `@shared/`)

### Development vs Production
- **Development**: Vite dev server with HMR, Express serves API routes
- **Production**: Static files built to `dist/public`, server bundled to `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and type-safe queries
- **connect-pg-simple**: Session storage (available but not currently used)

### Third-Party Services
- No external APIs currently integrated
- Architecture supports adding: Stripe (payments), OpenAI/Gemini (AI), Nodemailer (email)

### Key NPM Packages
- **UI**: Radix UI primitives, Tailwind CSS, Framer Motion
- **Data**: TanStack Query, Zod validation, React Hook Form
- **Server**: Express, Drizzle ORM, PostgreSQL driver (pg)

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required)