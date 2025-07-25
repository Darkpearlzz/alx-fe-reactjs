import { AddRecipeForm } from "./components/AddRecipeForm";
import { RecipeList } from "./components/RecipeList";
import "./App.css";

export const App = () => {
  return (
    <div className="container">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};
