🍲 Recipe Sharing Platform

A responsive React application for browsing, viewing, and adding recipes. Styled with Tailwind CSS and powered by React Router for navigation, this platform uses localStorage to persist data.

📌 Features
1. Home Page

Displays a grid of recipe cards.

Each card includes:

Recipe image

Title

Short summary

Link to Recipe Detail Page

Fully responsive grid layout using Tailwind.

Hover effects for better interactivity.

"+ Add Recipe" button to navigate to the Add Recipe Form.

2. Recipe Detail Page

Shows full details of a recipe:

Large recipe image

Title

Ingredients list

Preparation steps

Fetches data from localStorage (or fallback to data.json).

Clean and readable layout with Tailwind typography.

Responsive design for desktop and mobile.

3. Add Recipe Form

Form fields for:

Recipe title

Summary

Ingredients (one per line)

Preparation steps (one per line)

Frontend validation:

All fields required

At least two ingredients

Saves new recipe to localStorage.

Redirects to the Recipe Detail Page after submission.

Styled with Tailwind CSS for consistent look.


🛠 Tech Stack

React (with Vite for fast builds)

React Router DOM (for navigation)

Tailwind CSS (for styling)

LocalStorage (for data persistence)

Static JSON file (data.json) as initial seed data

📂 Project Structure
src/
│
├── components/
│   ├── HomePage.jsx         # Displays list of recipes
│   ├── RecipeDetail.jsx     # Displays details of a selected recipe
│   ├── AddRecipeForm.jsx    # Form to add new recipes
│
├── data.json                # Initial mock data for recipes
│
├── App.jsx                  # Application routes
├── index.css                # Tailwind CSS base styles
├── main.jsx                 # Application entry point

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/Darkpearlzz/recipe-sharing-platform.git
cd recipe-sharing-platform

2. Install dependencies
npm install

3. Run the development server
npm run dev


The app will be available at:

http://localhost:5173

📄 Usage Guide
Home Page

Browse through recipes in a responsive grid layout.

Click "View Details" to open the Recipe Detail Page.

Click "+ Add Recipe" to create a new recipe.

Recipe Detail Page

Read detailed instructions and see all ingredients for the selected recipe.

Add Recipe Form

Enter:

Recipe title

Summary

Ingredients (each on a new line)

Preparation steps (each on a new line)

Submit to save the recipe to localStorage.

The new recipe appears instantly on the Home Page.

🖌 Styling

Built entirely with Tailwind CSS.

Mobile-first design.

Responsive grid using:

grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6


Hover effects using:

hover:shadow-lg hover:scale-105 transition

📦 Data Persistence

Initial recipes are loaded from data.json into localStorage.

New recipes are saved in localStorage, ensuring they remain after page refresh.

🚀 Possible Future Enhancements

Edit and delete recipes.

Search and filter recipes by ingredients or title.

Image upload support.

User authentication for personalized recipe lists.

👨‍💻 Author

Developed by Rhoda Ugboro as part of a frontend React learning project.