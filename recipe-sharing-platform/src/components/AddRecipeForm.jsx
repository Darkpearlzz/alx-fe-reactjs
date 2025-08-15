import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRecipeForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [imageFilename, setImageFilename] = useState(''); 
  const [ingredientsText, setIngredientsText] = useState('');
  const [stepsText, setStepsText] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!title.trim()) errs.title = 'Title is required.';
    if (!summary.trim()) errs.summary = 'Summary is required.';

    const ingredients = parseLines(ingredientsText);
    if (ingredients.length < 2) errs.ingredients = 'Please provide at least two ingredients (one per line).';

    const instructions = parseLines(stepsText);
    if (steps.length < 1) errs.steps = 'Please provide at least one instruction step.';

    
    if (imageFilename && /[\\/]/.test(imageFilename)) {
      errs.imageFilename = 'Filename should not contain slashes. Put the file in public/images/';
    }

    setErrors(errs);
    return { valid: Object.keys(errs).length === 0, ingredients, steps };
  }

  function parseLines(text) {
    return text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { valid, ingredients, steps } = validate();
    if (!valid) return;

    const stored = localStorage.getItem('recipes');
    let list = [];
    try {
      list = stored ? JSON.parse(stored) : [];
    } catch (err) {
      list = [];
    }

    
    const imagePath = imageFilename.trim()
      ? `/images/${imageFilename.trim()}`
      : '/images/default-placeholder.jpg'; 
    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      summary: summary.trim(),
      image: imagePath,
      ingredients,
      steps,
    };

    const updated = [newRecipe, ...list];
    localStorage.setItem('recipes', JSON.stringify(updated));

    navigate(`/recipe/${newRecipe.id}`);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.title ? 'border-red-500' : ''}`}
              placeholder="E.g. Lemon Garlic Salmon"
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Short Summary</label>
            <input
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.summary ? 'border-red-500' : ''}`}
              placeholder="One-line description of the recipe"
            />
            {errors.summary && <p className="text-red-600 text-sm mt-1">{errors.summary}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image filename (optional)</label>
            <input
              value={imageFilename}
              onChange={(e) => setImageFilename(e.target.value)}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.imageFilename ? 'border-red-500' : ''}`}
              placeholder="e.g. carbonara.jpg — place the file in public/images/"
            />
            <p className="text-xs text-gray-500 mt-1">Drop the image into <code>public/images/</code> and enter the filename here (optional).</p>
            {errors.imageFilename && <p className="text-red-600 text-sm mt-1">{errors.imageFilename}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ingredients (one per line)</label>
            <textarea
              value={ingredientsText}
              onChange={(e) => setIngredientsText(e.target.value)}
              rows={5}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.ingredients ? 'border-red-500' : ''}`}
              placeholder={`e.g.\n200g spaghetti\n100g pancetta\n2 eggs`}
            />
            {errors.ingredients && <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preparation Steps (one per line)</label>
            <textarea
              value={instructionsText}
              onChange={(e) => setInstructionsText(e.target.value)}
              rows={6}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.instructions ? 'border-red-500' : ''}`}
              placeholder={`e.g.\nBoil pasta until al dente.\nFry pancetta until crisp.`}
            />
            {errors.instructions && <p className="text-red-600 text-sm mt-1">{errors.instructions}</p>}
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Add Recipe</button>
            <button type="button" onClick={() => window.history.back()} className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Cancel</button>
          </div>
        </form>
      </div>
    </main>
  );
}
