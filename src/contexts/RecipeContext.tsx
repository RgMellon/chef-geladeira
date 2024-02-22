import { ReactNode, createContext, useState } from "react";
import { makeBodyOfRequest } from "../config/chat-gpt/body";
import { makeRecipe } from "../services/chat-gpt/make-recipe";
import { useNavigation } from "@react-navigation/native";

type RecipeProps = {
  recipe: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
  instructions: string[];
  nutrients: {
    carb: string;
    protein: string;
    gordura: string;
    calories: string;
  };
};

type RecipeContextProviderProps = {
  children: ReactNode;
};

type RecipeContextDataProps = {
  recipe: RecipeProps;
  createRecipe: (ingredients: string[]) => void;
  loadRecipe: boolean;
};

export const RecipeContext = createContext<RecipeContextDataProps>(
  {} as RecipeContextDataProps
);

export function RecipeProvider({ children }: RecipeContextProviderProps) {
  const [recipe, setRecipe] = useState<RecipeProps>({} as RecipeProps);
  const [loadRecipe, setLoadRecipe] = useState(false);

  async function createRecipe(ingredients: string[]) {
    try {
      setLoadRecipe(true);
      const body = JSON.stringify(makeBodyOfRequest(ingredients));
      const response = await makeRecipe(body);

      setRecipe(JSON.parse(response));
      setLoadRecipe(false);
    } catch (err) {
      console.log(err);
      setLoadRecipe(false);
      throw new ChatError("Erro ao gerar uma receita");
    }
  }

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        createRecipe,
        loadRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
