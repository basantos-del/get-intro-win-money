-- Add SELECT policies for waitlist tables so records are visible in dashboard

-- Allow reading all waitlist member records
CREATE POLICY "Anyone can view waitlist_members" 
ON public.waitlist_members 
FOR SELECT 
USING (true);

-- Allow reading all waitlist company records  
CREATE POLICY "Anyone can view waitlist_companies"
ON public.waitlist_companies
FOR SELECT 
USING (true);