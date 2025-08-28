-- Security Fix: Phase 1 - Immediate Data Protection
-- This migration fixes critical data exposure vulnerabilities

-- 1. Fix refer_friend table policies
-- Drop the overly permissive policy that allows anyone to view referrals
DROP POLICY IF EXISTS "Anyone can view referrals" ON public.refer_friend;

-- Create a new policy that only allows authenticated users to view referrals
CREATE POLICY "Authenticated users can view referrals" 
ON public.refer_friend 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- 2. Fix waitlist_members table policies  
-- Drop the policy that allows all authenticated users to view personal data
DROP POLICY IF EXISTS "Authenticated users can view waitlist_members" ON public.waitlist_members;

-- Create admin-only policy (for now, only allow specific functions to access)
CREATE POLICY "Restricted access to waitlist_members" 
ON public.waitlist_members 
FOR SELECT 
USING (false); -- Completely restrict SELECT access for now

-- 3. Fix waitlist_companies table policies
-- Drop the policy that allows all authenticated users to view company data  
DROP POLICY IF EXISTS "Authenticated users can view waitlist_companies" ON public.waitlist_companies;

-- Create admin-only policy (for now, only allow specific functions to access)
CREATE POLICY "Restricted access to waitlist_companies" 
ON public.waitlist_companies 
FOR SELECT 
USING (false); -- Completely restrict SELECT access for now

-- 4. Create secure public count function that doesn't expose personal data
-- This replaces the existing get_waitlist_counts function with better security
CREATE OR REPLACE FUNCTION public.get_public_waitlist_counts()
RETURNS TABLE(member_count bigint, company_count bigint)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT 
    (SELECT COUNT(*) FROM public.waitlist_members) as member_count,
    (SELECT COUNT(*) FROM public.waitlist_companies) as company_count;
$$;

-- 5. Grant execute permission on the count function to anonymous users
GRANT EXECUTE ON FUNCTION public.get_public_waitlist_counts() TO anon;
GRANT EXECUTE ON FUNCTION public.get_public_waitlist_counts() TO authenticated;