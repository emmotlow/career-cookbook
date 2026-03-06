import { motion } from 'framer-motion';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}


export default function RecipeCard({ recipe, onSelect }: RecipeCardProps) {
  return (
    <motion.article
      className="group cursor-pointer bg-cream border border-charcoal/[0.06] overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(recipe)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(recipe);
        }
      }}
      aria-label={`View recipe: ${recipe.title}`}
    >
      {/* Image with category badge */}
      <div className="aspect-[16/9] bg-gradient-to-br from-sage/[0.06] to-sage/[0.12] relative overflow-hidden flex-shrink-0">
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover scale-110 origin-top-left"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sage/[0.12] font-display text-8xl font-bold select-none italic">
              {recipe.title.split(' ').pop()?.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1.5 text-[10px] font-sans font-semibold tracking-wider uppercase bg-cream/90 backdrop-blur-sm text-charcoal/80"
          >
            {recipe.category}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/[0.03] transition-colors duration-500" />
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sage-dark font-sans text-[10px] tracking-extra-wide uppercase mb-3 line-clamp-1">
          {recipe.focus}
        </p>
        <h3 className="text-xl font-display font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors duration-300 leading-tight line-clamp-2 min-h-[2.5rem]">
          {recipe.title}
        </h3>
        <p className="text-charcoal/50 font-serif italic text-sm mb-3">
          {recipe.dish}
        </p>
        <p className="text-charcoal/40 text-sm leading-relaxed line-clamp-2 mb-5 flex-1">
          {recipe.hook}
        </p>

        <div className="flex items-center justify-between text-[10px] font-sans text-charcoal/40 border-t border-charcoal/[0.06] pt-4 uppercase tracking-wider mt-auto">
          <span>{recipe.cookTime || recipe.prepTime || ''}</span>
          <span className="text-terracotta font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read Story &rarr;
          </span>
        </div>
      </div>
    </motion.article>
  );
}
