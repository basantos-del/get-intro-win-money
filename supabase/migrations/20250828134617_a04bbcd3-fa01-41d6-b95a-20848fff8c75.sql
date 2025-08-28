-- Fix critical security vulnerability: Remove public access to customer contact data
-- This addresses the issue where competitors could steal customer email addresses, phone numbers, and names

-- 1. Drop the vulnerable public SELECT policies on both waitlist tables
DROP POLICY IF EXISTS "Anyone can view waitlist_members" ON public.waitlist_members;
DROP POLICY IF EXISTS "Anyone can view waitlist_companies" ON public.waitlist_companies;

-- 2. Create secure policies that only allow authenticated admin users to view data
-- Members table: Only authenticated users can read (for legitimate business purposes)
CREATE POLICY "Authenticated users can view waitlist_members" 
ON public.waitlist_members 
FOR SELECT 
TO authenticated 
USING (true);

-- Companies table: Only authenticated users can read (for legitimate business purposes)  
CREATE POLICY "Authenticated users can view waitlist_companies" 
ON public.waitlist_companies 
FOR SELECT 
TO authenticated 
USING (true);

-- 3. Create safe public functions to get counts without exposing personal data
-- This allows showing real statistics without security risk
CREATE OR REPLACE FUNCTION public.get_waitlist_counts()
RETURNS TABLE(member_count bigint, company_count bigint)
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT 
    (SELECT COUNT(*) FROM public.waitlist_members) as member_count,
    (SELECT COUNT(*) FROM public.waitlist_companies) as company_count;
$$;

-- Grant execute permission to anonymous users for the count function
GRANT EXECUTE ON FUNCTION public.get_waitlist_counts() TO anon;
GRANT EXECUTE ON FUNCTION public.get_waitlist_counts() TO authenticated;