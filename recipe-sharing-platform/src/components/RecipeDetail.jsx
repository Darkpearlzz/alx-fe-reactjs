import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import seedData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('recipes');
    let list = [];
    if (stored) {
      try {
        list = JSON.parse(stored);
      } catch (e) {
        list = seedData;
      }
    } else {
      list = seedData;
    }

    const found = list.find((item) => String(item.id) === String(id));
    setRecipe(found || undefined);
  }, [id]);

  if (recipe === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (recipe === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
          <p className="text-gray-600 mb-6">We couldn't locate the recipe you were looking for.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded">Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {(recipe.ingredients || []).map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {(recipe.steps || []).map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>

        <div className="mt-8">
          <Link to="/" className="text-indigo-600 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
