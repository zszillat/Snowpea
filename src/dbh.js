import { ref, get, push, set } from "firebase/database";
import { database } from "./firebase/firebase";

export const GetRecipes = async () => {
  const dbRef = ref(database, "recipes");
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No recipes found in the database.");
      return {};
    }
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const AddRecipe = async (recipe) => {
  const recipesRef = ref(database, "recipes");
  try {
    const newRecipeRef = push(recipesRef); // Create a unique key for the new recipe
    await set(newRecipeRef, recipe); // Add the recipe data under the generated key
    console.log("Recipe added successfully.");
  } catch (error) {
    console.error("Error adding recipe:", error);
    throw error;
  }
};