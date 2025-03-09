export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cooking_time: number;
  servings: number;
  image_url: string;
  user_id: string;
  created_at: string;
}