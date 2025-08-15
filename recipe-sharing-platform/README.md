# Recipe Sharing Home Page (React + Tailwind)

## What is included
- `src/data.json` — mock recipe data
- `src/components/HomePage.jsx` — the Home Page component
- `src/App.jsx` and `src/main.jsx` — minimal app wrapper
- `src/index.css` — Tailwind directives

## How to use
1. Ensure you have a React + Vite project with Tailwind configured.
2. Drop `data.json` into `src/`.
3. Add the `components` folder and place `HomePage.jsx` there.
4. Replace or merge `App.jsx` and `main.jsx` as needed.
5. Run the dev server (`npm run dev`) — Vite supports importing JSON directly.

## Notes & next steps
- If you want client-side routing to a recipe details page, add `react-router-dom` and create a `RecipeDetail` route/component.
- To fetch `data.json` instead of importing it (useful if you move it to `public/`), replace the `useEffect` with a `fetch('/data.json')` call.
- Swap placeholder images for real images or use an image CDN for better performance.

Enjoy! If you want, I can now:
- add a `RecipeDetail` component and route,
- wire up local "Save" state / favorites, or
- replace placeholder images with Unsplash queries.
