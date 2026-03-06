export type RecipeCategory =
  | 'Signature Dish'
  | 'Zero-to-One Creation'
  | 'The Transformation Menu'
  | 'Operational Excellence'
  | 'Business Model Innovation';

export interface Recipe {
  id: string;
  category: RecipeCategory;
  subtitle: string;
  focus: string;
  title: string;
  dish: string;
  image?: string;
  serves?: string;
  cookTime?: string;
  prepTime?: string;
  whyDish?: string;
  crisis?: string;
  problem?: string;
  team?: string[];
  ingredients: string[];
  keyTechnique: string | string[];
  inflectionPoint: string;
  personalStory: string;
  techniqueNotes?: string[];
  result: string | string[];
  whyItWorked?: string[];
  hook: string;
}
