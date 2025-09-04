# Supabase Setup Guide

This guide will help you set up Supabase for the case studies feature in your Sanjeevani AI project.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - Name: `sanjeevani-ai`
   - Database Password: (choose a strong password)
   - Region: (choose closest to your users)
6. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (starts with `eyJ`)

## 3. Set Up Environment Variables

1. In your project root, create a `.env` file (if it doesn't exist)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_project_url_here` and `your_anon_key_here` with the actual values from step 2.

## 4. Set Up the Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-schema.sql` from this project
3. Paste it into the SQL editor
4. Click "Run" to execute the SQL

This will create:
- The `case_studies` table
- Proper indexes for performance
- Row Level Security (RLS) policies
- Sample case study data

## 5. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:8080/case-studies`
3. You should see the case studies page with sample data

## 6. Add Your Own Case Studies

You can add new case studies through the Supabase dashboard:

1. Go to **Table Editor** → **case_studies**
2. Click "Insert" → "Insert row"
3. Fill in the required fields:
   - `title`: Case study title
   - `description`: Short description
   - `content`: Full case study content
   - `client_name`: Client company name
   - `industry`: Industry type
   - `challenge`: The challenge faced
   - `solution`: Your solution
   - `results`: Results achieved
   - `metrics`: JSON object with metrics
   - `technologies`: Array of technologies used
   - `published`: Set to `true` to make it visible
   - `featured`: Set to `true` to feature it on homepage

## 7. Customize the Metrics

The `metrics` field expects a JSON object with these keys:
```json
{
  "roi_improvement": 127,
  "cost_reduction": 40,
  "risk_reduction": 78,
  "security_score": 95,
  "ethics_compliance": 92
}
```

## 8. Add Images (Optional)

1. Go to **Storage** in your Supabase dashboard
2. Create a new bucket called `case-study-images`
3. Upload your images
4. Copy the public URL and use it in the `image_url` field

## Troubleshooting

- **"Missing Supabase environment variables"**: Make sure your `.env` file is in the project root and contains the correct credentials
- **"Error fetching case studies"**: Check that your Supabase project is running and the table was created successfully
- **Case studies not showing**: Ensure the `published` field is set to `true` in your database

## Next Steps

- Customize the case study templates to match your brand
- Add more fields to the database schema if needed
- Implement admin functionality for managing case studies
- Add search and filtering capabilities
- Integrate with your existing content management system
