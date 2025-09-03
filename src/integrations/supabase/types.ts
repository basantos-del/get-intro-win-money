export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      city_suggestions: {
        Row: {
          city_name: string
          created_at: string
          id: string
          updated_at: string
        }
        Insert: {
          city_name: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Update: {
          city_name?: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      connections: {
        Row: {
          connected_member_id: string
          connection_strength: string
          created_at: string
          id: string
          member_id: string
          status: string
          updated_at: string
        }
        Insert: {
          connected_member_id: string
          connection_strength: string
          created_at?: string
          id?: string
          member_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          connected_member_id?: string
          connection_strength?: string
          created_at?: string
          id?: string
          member_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      earnings: {
        Row: {
          amount: number
          created_at: string
          id: string
          member_id: string
          opportunity_id: string
          paid_at: string | null
          referral_id: string
          status: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          member_id: string
          opportunity_id: string
          paid_at?: string | null
          referral_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          member_id?: string
          opportunity_id?: string
          paid_at?: string | null
          referral_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "earnings_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "opportunities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "earnings_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
          },
        ]
      }
      opportunities: {
        Row: {
          business_id: string
          created_at: string
          current_matches: number | null
          description: string | null
          expires_at: string | null
          id: string
          max_matches: number | null
          opportunity_type: string
          payout_amount: number
          requirements: Json | null
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          current_matches?: number | null
          description?: string | null
          expires_at?: string | null
          id?: string
          max_matches?: number | null
          opportunity_type: string
          payout_amount: number
          requirements?: Json | null
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          current_matches?: number | null
          description?: string | null
          expires_at?: string | null
          id?: string
          max_matches?: number | null
          opportunity_type?: string
          payout_amount?: number
          requirements?: Json | null
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      opportunity_type_suggestions: {
        Row: {
          created_at: string
          id: string
          opportunity_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          opportunity_type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          opportunity_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          cv_file_url: string | null
          date_of_birth: string | null
          email: string
          first_name: string | null
          full_name: string | null
          id: string
          last_name: string | null
          onboarding_completed: boolean | null
          profile_photo_url: string | null
          selected_brands: string[] | null
          selected_categories: string[] | null
          updated_at: string
          user_id: string
          user_type: string
        }
        Insert: {
          created_at?: string
          cv_file_url?: string | null
          date_of_birth?: string | null
          email: string
          first_name?: string | null
          full_name?: string | null
          id?: string
          last_name?: string | null
          onboarding_completed?: boolean | null
          profile_photo_url?: string | null
          selected_brands?: string[] | null
          selected_categories?: string[] | null
          updated_at?: string
          user_id: string
          user_type: string
        }
        Update: {
          created_at?: string
          cv_file_url?: string | null
          date_of_birth?: string | null
          email?: string
          first_name?: string | null
          full_name?: string | null
          id?: string
          last_name?: string | null
          onboarding_completed?: boolean | null
          profile_photo_url?: string | null
          selected_brands?: string[] | null
          selected_categories?: string[] | null
          updated_at?: string
          user_id?: string
          user_type?: string
        }
        Relationships: []
      }
      refer_friend: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string
          id: string
          opportunity_id: string
          referred_member_id: string
          referrer_id: string
          review_notes: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          opportunity_id: string
          referred_member_id: string
          referrer_id: string
          review_notes?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          opportunity_id?: string
          referred_member_id?: string
          referrer_id?: string
          review_notes?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist_companies: {
        Row: {
          company_name: string
          company_size: string | null
          contact_email: string
          contact_name: string | null
          created_at: string
          description: string | null
          id: string
          industry: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          company_name: string
          company_size?: string | null
          contact_email: string
          contact_name?: string | null
          created_at?: string
          description?: string | null
          id?: string
          industry?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          company_name?: string
          company_size?: string | null
          contact_email?: string
          contact_name?: string | null
          created_at?: string
          description?: string | null
          id?: string
          industry?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      waitlist_members: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          phone: string | null
          source: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          phone?: string | null
          source?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          source?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_public_waitlist_counts: {
        Args: Record<PropertyKey, never>
        Returns: {
          company_count: number
          member_count: number
        }[]
      }
      get_waitlist_counts: {
        Args: Record<PropertyKey, never>
        Returns: {
          company_count: number
          member_count: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
