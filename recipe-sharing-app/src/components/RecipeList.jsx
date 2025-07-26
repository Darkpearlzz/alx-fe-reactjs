import { useState } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  };

  const handleEditComplete = () => {
    setEditingRecipe(null);
  };

  return (
    <div>
      <h2>Recipe List</h2>

      {editingRecipe && (
        <>
          <h3>Edit Recipe</h3>
          <AddRecipeForm
            recipeToEdit={editingRecipe}
            onFinishEdit={handleEditComplete}
          />
        </>
      )}

      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link
              to={`/recipe/${recipe.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </Link>

            <button onClick={() => handleEdit(recipe)}>Edit</button>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
