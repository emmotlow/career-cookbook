import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Recipe } from '../types/recipe';
import { categories } from '../data/recipes';
import FilterButtons from './FilterButtons';
import RecipeCard from './RecipeCard';

interface RecipeGalleryProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
}

export default function RecipeGallery({ recipes, onSelectRecipe }: RecipeGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRecipes =
    activeCategory === 'All'
      ? recipes
      : recipes.filter((r) => r.category === activeCategory);

  return (
    <section id="recipes" className="py-28 md:py-36 bg-cream-dark/50">
      <div className="section-container">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-sage" />
            <p className="text-sage-dark font-sans text-xs tracking-extra-wide uppercase">
              The Collection
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal leading-[1.05]">
            The{' '}
            <span className="italic font-normal text-terracotta">Recipes</span>
          </h2>
        </motion.div>

        <FilterButtons
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredRecipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                className="h-full"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <RecipeCard recipe={recipe} onSelect={onSelectRecipe} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRecipes.length === 0 && (
          <p className="text-center text-charcoal/40 py-12 font-serif italic">
            No recipes in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
