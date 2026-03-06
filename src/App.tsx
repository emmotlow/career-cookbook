import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import KitchenPhilosophy from './components/KitchenPhilosophy';
import AuthorNote from './components/AuthorNote';
import RecipeGallery from './components/RecipeGallery';
import Contact from './components/Contact';
import RecipeModal from './components/RecipeModal';
import { recipes } from './data/recipes';
import type { Recipe } from './types/recipe';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Introduction />
      <KitchenPhilosophy />
      <AuthorNote />
      <RecipeGallery
        recipes={recipes}
        onSelectRecipe={setSelectedRecipe}
      />
      <Contact />
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
}

export default App;
