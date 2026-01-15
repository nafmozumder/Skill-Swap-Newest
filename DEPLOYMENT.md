# Deployment Guide

## Deploying to Vercel

SkillSwap is built with Next.js and optimized for Vercel deployment.

### Steps

1. **Push to GitHub**
\`\`\`bash
git push origin main
\`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables

3. **Environment Variables**
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
DATABASE_URL=your_database_url
\`\`\`

4. **Deploy**
   - Vercel will automatically build and deploy on every push
   - Access your live site at the Vercel URL

## Local Database Setup

### Using Supabase

1. Create a [Supabase](https://supabase.com) account
2. Create a new project
3. Set up the required tables:

\`\`\`sql
-- Users (handled by Supabase Auth)
-- Skills
CREATE TABLE skills (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  category TEXT,
  level TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sessions
CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  instructor_id UUID REFERENCES auth.users(id),
  student_id UUID REFERENCES auth.users(id),
  skill_id UUID REFERENCES skills(id),
  scheduled_date DATE,
  scheduled_time TIME,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Reviews
CREATE TABLE reviews (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES sessions(id),
  reviewer_id UUID REFERENCES auth.users(id),
  rating INTEGER,
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  sender_id UUID REFERENCES auth.users(id),
  recipient_id UUID REFERENCES auth.users(id),
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Achievements
CREATE TABLE achievements (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  achievement_key TEXT,
  unlocked_at TIMESTAMP
);
\`\`\`

4. Enable RLS policies for security
5. Add your Supabase credentials to `.env.local`

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill in your API credentials
3. Run `npm run dev` to start development server

## Performance Optimization

- Use Next.js Image optimization
- Enable caching headers
- Implement lazy loading for components
- Optimize bundle size with code splitting

## Monitoring

Set up error tracking with:
- Sentry for error monitoring
- Vercel Analytics for performance metrics
- Log aggregation for debugging
