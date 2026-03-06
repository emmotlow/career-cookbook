import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Recipe } from '../types/recipe';
import { categories } from '../data/recipes';
import FilterButtons from './FilterButtons';
import RecipeCard from './RecipeCard';

function OffMenuCard() {
  return (
    <motion.div
      className="mt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
    >
      <Link to="/off-menu" className="block">
        <motion.article
          className="group cursor-pointer bg-cream border border-charcoal/[0.06] overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <div className="aspect-[16/9] sm:aspect-auto sm:w-2/5 bg-gradient-to-br from-terracotta/20 to-charcoal/20 relative overflow-hidden flex-shrink-0">
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 text-[10px] font-sans font-semibold tracking-wider uppercase bg-terracotta text-cream">
                Off Menu
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors duration-300 leading-tight">
              When the Dish Doesn&apos;t Turn Out
            </h3>
            <p className="text-charcoal/50 font-serif italic text-sm sm:text-base mb-5">
              Here&apos;s what I learned when mine didn&apos;t.
            </p>
            <span className="text-terracotta font-sans text-xs font-semibold tracking-wider uppercase">
              Read the Story &rarr;
            </span>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

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

        {/* Off Menu card */}
        {activeCategory === 'All' && <OffMenuCard />}
      </div>
    </section>
  );
}
