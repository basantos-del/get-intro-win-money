-- Final Security Fix: Completely restrict access to refer_friend table
-- Referrals contain sensitive personal data and should only be accessible to admins

-- Drop the policy that still allows authenticated users to view referrals
DROP POLICY IF EXISTS "Authenticated users can view referrals" ON public.refer_friend;

-- Create a completely restrictive policy for referral data
-- Only allow access through specific functions or admin roles (to be implemented later)
CREATE POLICY "Restricted access to referrals" 
ON public.refer_friend 
FOR SELECT 
USING (false); -- Completely restrict SELECT access for now

-- Keep INSERT policy as public so referral form continues to work
-- The existing "Anyone can insert referrals" policy remains unchanged