import { useContext } from "react";
import { makeBodyOfRequest } from "../config/chat-gpt/body";
import { makeRecipe } from "../services/chat-gpt/make-recipe";
import { RecipeContext } from "../contexts/RecipeContext";

export function useRecipe() {
  const context = useContext(RecipeContext);

  return context;
}
