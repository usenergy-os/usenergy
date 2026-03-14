-- US Energy Ecosystem: Initial Schema Definition

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Create custom Enums
CREATE TYPE user_role AS ENUM ('innovator', 'operator', 'admin');
CREATE TYPE organization_type AS ENUM ('startup', 'farm', 'corporate', 'university', 'non_profit', 'government');
CREATE TYPE ecosystem_theme AS ENUM ('Food Systems', 'Energy Transitions', 'Circular Economies', 'Climate Adaptation', 'Sustainability STEM');
CREATE TYPE listing_type AS ENUM ('solution_offered', 'need_requested');
CREATE TYPE listing_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE connection_status AS ENUM ('pending', 'accepted', 'declined');
CREATE TYPE ticket_type AS ENUM ('general', 'student', 'vip', 'exhibitor');
CREATE TYPE registration_status AS ENUM ('registered', 'attended', 'cancelled');

-- 2. Organizations Table
CREATE TABLE public.organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type organization_type NOT NULL,
    website TEXT,
    description TEXT,
    logo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Profiles Table (extends Supabase auth.users)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role user_role DEFAULT 'innovator'::user_role NOT NULL,
    organization_id UUID REFERENCES public.organizations(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Listings Table (CatalynQ Marketplace Solutions/Needs)
CREATE TABLE public.listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    theme ecosystem_theme NOT NULL,
    type listing_type NOT NULL,
    status listing_status DEFAULT 'draft'::listing_status NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Connections Table (The Match)
CREATE TABLE public.connections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    listing_id UUID REFERENCES public.listings(id) ON DELETE CASCADE NOT NULL,
    interested_organization_id UUID REFERENCES public.organizations(id) ON DELETE CASCADE NOT NULL,
    status connection_status DEFAULT 'pending'::connection_status NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(listing_id, interested_organization_id) -- Prevent duplicate connections
);

-- 6. Summit Registrations Table (usenergysummit.com)
CREATE TABLE public.summit_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL, -- Nullable for guests
    email TEXT NOT NULL,
    ticket_type ticket_type DEFAULT 'general'::ticket_type NOT NULL,
    status registration_status DEFAULT 'registered'::registration_status NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Row Level Security (RLS) Policies
-- (Basic setup: Admins can do everything, others have restricted access)

ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.summit_registrations ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published listings
CREATE POLICY "Published listings are viewable by everyone." 
ON public.listings FOR SELECT USING (status = 'published');

-- Allow all read access to organizations
CREATE POLICY "Organizations are viewable by everyone." 
ON public.organizations FOR SELECT USING (true);

-- Allow users to read their own profile
CREATE POLICY "Users can view own profile." 
ON public.profiles FOR SELECT USING (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile." 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Helper triggers and functions for updated_at timestamps could be added here.
