-- Create refer_friend table for referral submissions
CREATE TABLE public.refer_friend (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.refer_friend ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (anyone can insert referrals)
CREATE POLICY "Anyone can insert referrals" 
ON public.refer_friend 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view referrals" 
ON public.refer_friend 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_refer_friend_updated_at
BEFORE UPDATE ON public.refer_friend
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();