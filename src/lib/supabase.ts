import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock client if environment variables are not set
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = () => supabase !== null

// Database types for case studies
export interface CaseStudy {
    id: string
    title: string
    description: string
    content: string
    client_name: string
    industry: string
    challenge: string
    solution: string
    results: string
    metrics: {
        roi_improvement: number
        cost_reduction: number
        risk_reduction: number
        security_score: number
        ethics_compliance: number
    }
    technologies: string[]
    image_url?: string
    created_at: string
    updated_at: string
    published: boolean
    featured: boolean
}

export interface CaseStudySummary {
    id: string
    title: string
    description: string
    client_name: string
    industry: string
    image_url?: string
    featured: boolean
    created_at: string
}
