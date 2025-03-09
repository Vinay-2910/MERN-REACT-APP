export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      recipes: {
        Row: {
          id: string
          title: string
          description: string
          ingredients: string[]
          instructions: string[]
          cooking_time: number
          servings: number
          image_url: string | null
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          ingredients: string[]
          instructions: string[]
          cooking_time: number
          servings: number
          image_url?: string | null
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          ingredients?: string[]
          instructions?: string[]
          cooking_time?: number
          servings?: number
          image_url?: string | null
          user_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}