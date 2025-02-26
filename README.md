# Issue Tracker

A modern issue tracking system built with Next.js, designed for efficient project management and bug tracking.

## Features

- **Issue Management**
  - Create, edit, and delete issues
  - Filter and sort issues by status, title
  - Markdown support for issue descriptions
  - Real-time validation and error handling
  - Loading states and optimistic updates

- **User Interface**
  - Clean and modern design using Tailwind CSS
  - Responsive layout for all devices
  - Dynamic loading states
  - Toast notifications for actions
  - Rich text editor for issue descriptions

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- RadixUI
- React Hook Form
- RadixUI Components
- TanStack Query (React Query v5)
- Recharts for data visualization
- SimpleMDE React Editor
- React Hot Toast

### Backend & Infrastructure
- MySQL (hosted on Railway)
- Prisma ORM
- NextAuth.js
- Zod Validation
- Sentry for error monitoring
- Vercel (deployment)
- Railway (database hosting)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/issue-tracker.git
cd issue-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="mysql://user:password@localhost:3306/issue-tracker"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```