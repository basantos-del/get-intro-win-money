-- Create a test user profile for development purposes
INSERT INTO public.profiles (
  user_id,
  email,
  first_name,
  last_name,
  date_of_birth,
  selected_brands,
  selected_categories,
  user_type,
  onboarding_completed
) VALUES (
  '00000000-0000-0000-0000-000000000001'::uuid,
  'test@intro.dev',
  'Test',
  'User',
  '1990-01-01',
  ARRAY['Nike', 'Apple', 'Google'],
  ARRAY['Technology', 'Sports', 'Business'],
  'member',
  true
) ON CONFLICT (user_id) DO UPDATE SET
  email = EXCLUDED.email,
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  date_of_birth = EXCLUDED.date_of_birth,
  selected_brands = EXCLUDED.selected_brands,
  selected_categories = EXCLUDED.selected_categories,
  user_type = EXCLUDED.user_type,
  onboarding_completed = EXCLUDED.onboarding_completed;