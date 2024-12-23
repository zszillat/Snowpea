import { databases } from "./lib/appwrite";
import { Query } from "appwrite";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_RECIPE_ID
    
// Fetch all documents
export const fetchRecipes = async (userID) => {
    try {
        const response = await databases.listDocuments(databaseId, collectionId, [
            Query.equal('googleAccount', userID)
        ]);
        return response.documents;
    } catch (error) {
        console.error('Error fetching recipes: ', error);
        throw error;
    }
};

export const createRecipe = async (recipe) => {
    try {
        console.log("Creating...")
        console.log(recipe)
        const response = await databases.createDocument(databaseId, collectionId, 'unique()', recipe)
        return response;
    } catch (error) {
        console.log("Error creating recipe: " + error)
        throw error
    }
}

export const updateRecipe = async (recipeId, data) => {
    try {
      console.log("updating recipe...")
      console.log(data)
      const response = await databases.updateDocument(databaseId, collectionId, recipeId, data);
      return response;
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  };

export const deleteRecipe = async (recipeID) => {
    try {
        await databases.deleteDocument(databaseId, collectionId, recipeID)
        return true;
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};