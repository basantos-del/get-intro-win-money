import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name?: string;
  date_of_birth?: string;
  profile_photo_url?: string;
  cv_file_url?: string;
  selected_brands?: string[];
  selected_categories?: string[];
  user_type: 'member' | 'business';
  created_at: string;
  updated_at: string;
}

interface Connection {
  id: string;
  member_id: string;
  connected_member_id: string;
  connection_strength: 'best friend' | 'close friend' | 'relative' | 'colleague';
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
  updated_at: string;
}

interface Opportunity {
  id: string;
  business_id: string;
  title: string;
  description?: string;
  opportunity_type: 'job posting' | 'product testing' | 'new customer' | 'warm intro' | 'general referral';
  payout_amount: number;
  status: 'open' | 'closed' | 'match completed';
  max_matches: number;
  current_matches: number;
  requirements?: any;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

interface Earning {
  id: string;
  member_id: string;
  referral_id: string;
  opportunity_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  paid_at?: string;
  created_at: string;
  updated_at: string;
}

interface AppState {
  user: User | null;
  profile: Profile | null;
  connections: Connection[];
  opportunities: Opportunity[];
  earnings: Earning[];
  loading: boolean;
  error: string | null;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_PROFILE'; payload: Profile | null }
  | { type: 'SET_CONNECTIONS'; payload: Connection[] }
  | { type: 'SET_OPPORTUNITIES'; payload: Opportunity[] }
  | { type: 'SET_EARNINGS'; payload: Earning[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_CONNECTION'; payload: Connection }
  | { type: 'UPDATE_CONNECTION'; payload: Connection }
  | { type: 'ADD_OPPORTUNITY'; payload: Opportunity }
  | { type: 'UPDATE_OPPORTUNITY'; payload: Opportunity }
  | { type: 'ADD_EARNING'; payload: Earning };

const initialState: AppState = {
  user: null,
  profile: null,
  connections: [],
  opportunities: [],
  earnings: [],
  loading: true,
  error: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };
    case 'SET_CONNECTIONS':
      return { ...state, connections: action.payload };
    case 'SET_OPPORTUNITIES':
      return { ...state, opportunities: action.payload };
    case 'SET_EARNINGS':
      return { ...state, earnings: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_CONNECTION':
      return { ...state, connections: [...state.connections, action.payload] };
    case 'UPDATE_CONNECTION':
      return {
        ...state,
        connections: state.connections.map(conn =>
          conn.id === action.payload.id ? action.payload : conn
        ),
      };
    case 'ADD_OPPORTUNITY':
      return { ...state, opportunities: [...state.opportunities, action.payload] };
    case 'UPDATE_OPPORTUNITY':
      return {
        ...state,
        opportunities: state.opportunities.map(opp =>
          opp.id === action.payload.id ? action.payload : opp
        ),
      };
    case 'ADD_EARNING':
      return { ...state, earnings: [...state.earnings, action.payload] };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch({ type: 'SET_USER', payload: session?.user ?? null });
      dispatch({ type: 'SET_LOADING', payload: false });
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        dispatch({ type: 'SET_USER', payload: session?.user ?? null });
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export type { Profile, Connection, Opportunity, Earning };