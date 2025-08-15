import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import initialData from '../data.json';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('recipes');
    if (stored) {
      try {
        setRecipes(JSON.parse(stored));
      } catch (e) {
        console.error('Could not parse recipes from localStorage, seeding initial data.', e);
        setRecipes(initialData);
        localStorage.setItem('recipes', JSON.stringify(initialData));
      }
    } else {
      setRecipes(initialData);
      localStorage.setItem('recipes', JSON.stringify(initialData));
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Recipe Share</h1>
            <p className="mt-2 text-gray-600">Discover, share and save your favorite recipes.</p>
          </div>

          <div>
            <Link
              to="/add"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
            >
              + Add Recipe
            </Link>
          </div>
        </header>

        <section>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((r) => (
              <article
                key={r.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-[1.02] transition duration-300"
              >
                <div className="h-48 md:h-56 w-full overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 md:p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{r.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{r.summary}</p>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/recipe/${r.id}`}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      View Recipe →
                    </Link>

                    <button
                      className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200"
                      aria-label={`Save ${r.title}`}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
