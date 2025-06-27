# Project Starter - Authentication App

## Current Features

- **User Authentication**

  - Register new users with email and password
  - Login with email and password
  - Client-side forms with validation and UI feedback
  - Server-side Supabase client integration for auth actions
  - Session management with secure cookies

- **Next.js 13 App Router Structure**

  - `/app/(auth)/login` - Login page and components
  - `/app/(auth)/register` - Registration page and components
  - `(private)` - Placeholder for authenticated user routes (future)
  - `(public)` - Publicly accessible routes

- **UI Components**

  - Custom reusable UI primitives: Buttons, Inputs, Labels, Cards, Switches
  - Theme toggling (dark/light mode)
  - Toast notifications with `sonner`
  - Icons (Next.js, Prisma, Shadcn, Supabase, Tailwind)

- **Lib Layer**

  - `supabase/client.ts` - Browser Supabase client setup
  - `supabase/server.ts` - Server Supabase client factory for server actions
  - Utility helpers in `utils.ts`

- **TypeScript**
  - Typed Supabase database schema in `types/supabase.ts`
  - Strict typing throughout actions and components

## Directory Structure Overview

src/
├── app/
│ ├── (auth)/
│ │ ├── login/
│ │ │ └── page.tsx
│ │ ├── register/
│ │ │ └── page.tsx
│ │ └── layout.tsx
│ ├── (private)/
│ ├── (public)/
│ │ ├── layout.tsx
│ │ └── page.tsx
│ └── layout.tsx
├── components/
│ ├── icons/
│ │ ├── NextjsLogo.tsx
│ │ ├── PrismaLogo.tsx
│ │ ├── ShadcnLogo.tsx
│ │ ├── SupabaseLogo.tsx
│ │ └── TailwindLogo.tsx
│ ├── providers/
│ │ └── ThemeProvider.tsx
│ └── ui/
│ ├── badge.tsx
│ ├── button.tsx
│ ├── card.tsx
│ ├── input.tsx
│ ├── label.tsx
│ ├── separator.tsx
│ ├── sonner.tsx
│ ├── switch.tsx
│ └── theme-toggle.tsx
│ ├── Footer.tsx
│ └── Header.tsx
├── features/
│ ├── auth/
│ │ ├── actions/
│ │ │ ├── login.ts
│ │ │ └── register.ts
│ │ └── components/
│ │ ├── login-form.tsx
│ │ └── register-form.tsx
│ └── users/
│ ├── actions/
│ └── components/
├── lib/
│ ├── supabase/
│ │ ├── client.ts
│ │ └── server.ts
│ └── utils.ts
├── styles/
│ └── globals.css
└── types/
└── supabase.ts

---
