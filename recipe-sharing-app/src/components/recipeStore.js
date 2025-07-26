import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    const term = get().searchTerm.toLowerCase();
    const filtered = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    set({ recipes: updatedRecipes, filteredRecipes: filtered });
  },

  setRecipes: (recipes) => {
    const term = get().searchTerm.toLowerCase();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    set({ recipes, filteredRecipes: filtered });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const term = get().searchTerm.toLowerCase();
    const filtered = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    set({ recipes: updatedRecipes, filteredRecipes: filtered });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((recipe) => recipe.id !== id);
    const term = get().searchTerm.toLowerCase();
    const filtered = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    set({ recipes: updatedRecipes, filteredRecipes: filtered });
  },

  setSearchTerm: (term) => {
    const filtered = get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ searchTerm: term, filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
