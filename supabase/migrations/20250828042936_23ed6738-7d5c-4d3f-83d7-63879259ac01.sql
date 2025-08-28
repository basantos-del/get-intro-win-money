-- Create waitlist_members table for individual signups
CREATE TABLE public.waitlist_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  phone TEXT,
  source TEXT, -- where they heard about us
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create waitlist_companies table for company signups
CREATE TABLE public.waitlist_companies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_name TEXT,
  company_size TEXT, -- e.g., "1-10", "11-50", "51-200", etc.
  industry TEXT,
  website TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waitlist_companies ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (waitlist is typically public-facing)
CREATE POLICY "Anyone can insert into waitlist_members" 
ON public.waitlist_members 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert into waitlist_companies" 
ON public.waitlist_companies 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_waitlist_members_updated_at
  BEFORE UPDATE ON public.waitlist_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_waitlist_companies_updated_at
  BEFORE UPDATE ON public.waitlist_companies
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_waitlist_members_email ON public.waitlist_members(email);
CREATE INDEX idx_waitlist_members_created_at ON public.waitlist_members(created_at);
CREATE INDEX idx_waitlist_companies_contact_email ON public.waitlist_companies(contact_email);
CREATE INDEX idx_waitlist_companies_created_at ON public.waitlist_companies(created_at);