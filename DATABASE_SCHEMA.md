# SkillSwap Database Schema

## Tables Overview

### Users (Managed by Auth Provider)
\`\`\`
- id: UUID (primary key)
- email: STRING (unique)
- full_name: STRING
- avatar_url: STRING
- bio: TEXT
- location: STRING
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
\`\`\`

### Profiles
\`\`\`
- id: UUID (primary key)
- user_id: UUID (foreign key → users.id)
- skills_offered: JSONB
- skills_sought: JSONB
- availability: TEXT
- session_type_preference: STRING (online/in-person/hybrid)
- updated_at: TIMESTAMP
\`\`\`

### Skills
\`\`\`
- id: UUID (primary key)
- user_id: UUID (foreign key → users.id)
- title: STRING
- category: STRING
- description: TEXT
- level: STRING (beginner/intermediate/advanced)
- created_at: TIMESTAMP
\`\`\`

### Sessions
\`\`\`
- id: UUID (primary key)
- instructor_id: UUID (foreign key → users.id)
- student_id: UUID (foreign key → users.id)
- skill_id: UUID (foreign key → skills.id)
- scheduled_date: DATE
- scheduled_time: TIME
- duration_minutes: INTEGER
- session_type: STRING
- status: STRING (pending/confirmed/completed/cancelled)
- created_at: TIMESTAMP
\`\`\`

### Reviews
\`\`\`
- id: UUID (primary key)
- session_id: UUID (foreign key → sessions.id)
- reviewer_id: UUID (foreign key → users.id)
- reviewed_user_id: UUID (foreign key → users.id)
- rating: INTEGER (1-5)
- comment: TEXT
- created_at: TIMESTAMP
\`\`\`

### Messages
\`\`\`
- id: UUID (primary key)
- sender_id: UUID (foreign key → users.id)
- recipient_id: UUID (foreign key → users.id)
- content: TEXT
- read_at: TIMESTAMP (nullable)
- created_at: TIMESTAMP
\`\`\`

### Achievements
\`\`\`
- id: UUID (primary key)
- user_id: UUID (foreign key → users.id)
- achievement_key: STRING
- unlocked_at: TIMESTAMP
\`\`\`

### Reports (Admin)
\`\`\`
- id: UUID (primary key)
- reporter_id: UUID (foreign key → users.id)
- reported_user_id: UUID (foreign key → users.id)
- report_type: STRING
- content_reference: TEXT
- status: STRING (pending/investigating/resolved)
- created_at: TIMESTAMP
\`\`\`

## Row-Level Security (RLS) Policies

All tables should have RLS enabled with appropriate policies:

\`\`\`sql
-- Example: Allow users to view their own profile
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
USING (auth.uid() = user_id);

-- Example: Allow users to insert their own profile
CREATE POLICY "Users can insert own profile"
ON profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);
\`\`\`

## Indexes

\`\`\`sql
-- Performance indexes
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_skills_user_id ON skills(user_id);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_sessions_instructor_id ON sessions(instructor_id);
CREATE INDEX idx_sessions_student_id ON sessions(student_id);
CREATE INDEX idx_sessions_status ON sessions(status);
CREATE INDEX idx_reviews_session_id ON reviews(session_id);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_recipient_id ON messages(recipient_id);
