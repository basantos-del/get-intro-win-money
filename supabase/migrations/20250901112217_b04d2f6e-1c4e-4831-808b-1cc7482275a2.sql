-- Create table for city suggestions
CREATE TABLE public.city_suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  city_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for opportunity type suggestions
CREATE TABLE public.opportunity_type_suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  opportunity_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on both tables
ALTER TABLE public.city_suggestions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunity_type_suggestions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts but restrict reads
CREATE POLICY "Anyone can suggest cities" 
ON public.city_suggestions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Restricted access to city suggestions" 
ON public.city_suggestions 
FOR SELECT 
USING (false);

CREATE POLICY "Anyone can suggest opportunity types" 
ON public.opportunity_type_suggestions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Restricted access to opportunity type suggestions" 
ON public.opportunity_type_suggestions 
FOR SELECT 
USING (false);

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_city_suggestions_updated_at
  BEFORE UPDATE ON public.city_suggestions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_opportunity_type_suggestions_updated_at
  BEFORE UPDATE ON public.opportunity_type_suggestions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();