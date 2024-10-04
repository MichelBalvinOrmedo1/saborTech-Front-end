import { TimeFormatRecipe } from "../enums/timeFormatRecipe.enum";

// Definición de un ingrediente
export interface Ingredient {
  readonly id: string;
  readonly amount: string;
  readonly unit: number;
  readonly name: string;
}

// Definición de un paso
export interface Step {
  readonly id: string;
  readonly description: string;
  readonly stepNumber: number;
}

export interface Category {
  readonly recipeId: string;
  readonly categoryId: string;
  readonly numberCategory: string;
  readonly categoryName: string;
}

// Definición de una receta
export interface Recipe {
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly servings: number;
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly time: number;
  readonly time_format: TimeFormatRecipe;
  readonly rating: number;
  readonly ingredients: Ingredient[];
  readonly steps: Step[];
  readonly category: Category[];
}

// Propiedades de la lista de recetas
// src/models/Recipes.ts
export interface RecipeListItem {
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly servings: number;
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly time: number;
  readonly time_format: TimeFormatRecipe;
  readonly rating: number;
  readonly ingredients: Ingredient[];
  readonly steps: Step[];
  readonly category: Category[];
}

export interface RecipeListProps {
  readonly data: RecipeListItem[];
}
