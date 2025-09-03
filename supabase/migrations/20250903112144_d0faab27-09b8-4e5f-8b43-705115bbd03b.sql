-- Add missing columns to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS first_name TEXT,
ADD COLUMN IF NOT EXISTS last_name TEXT,
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;

-- Update full_name to be generated from first_name and last_name if it exists
DROP COLUMN IF EXISTS full_name;
ALTER TABLE public.profiles 
ADD COLUMN full_name TEXT GENERATED ALWAYS AS (
  CASE 
    WHEN first_name IS NOT NULL AND last_name IS NOT NULL 
    THEN first_name || ' ' || last_name
    ELSE COALESCE(first_name, '') || COALESCE(last_name, '')
  END
) STORED;