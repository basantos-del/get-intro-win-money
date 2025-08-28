-- Fix function search path security warning
-- This prevents potential function hijacking attacks

-- Update the count function with secure search_path
CREATE OR REPLACE FUNCTION public.get_waitlist_counts()
RETURNS TABLE(member_count bigint, company_count bigint)
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT 
    (SELECT COUNT(*) FROM public.waitlist_members) as member_count,
    (SELECT COUNT(*) FROM public.waitlist_companies) as company_count;
$$;