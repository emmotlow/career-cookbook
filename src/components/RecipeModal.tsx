import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Recipe } from '../types/recipe';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (recipe) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [recipe, handleKeyDown]);

  return (
    <AnimatePresence>
      {recipe && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-cream w-full max-w-3xl rounded-sm shadow-2xl my-auto"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="recipe-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hero image */}
              {recipe.image && (
                <div className="relative aspect-[2/1] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover scale-110 origin-top-left"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </div>
              )}

              {/* Close button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                  recipe.image
                    ? 'bg-charcoal/40 hover:bg-charcoal/60 text-cream'
                    : 'bg-charcoal/10 hover:bg-charcoal/20 text-charcoal'
                }`}
                aria-label="Close recipe"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>

              {/* Header */}
              <div className="p-5 sm:p-8 md:p-12 pb-0">
                <span className="inline-block px-3 py-1 rounded-sm text-xs font-sans font-semibold tracking-wider uppercase bg-terracotta/10 text-terracotta mb-4">
                  {recipe.category}
                </span>
                <h2
                  id="recipe-modal-title"
                  className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-2 leading-tight"
                >
                  {recipe.title}
                </h2>
                <p className="text-charcoal/60 font-serif italic text-lg mb-2">
                  {recipe.dish}
                </p>
                {recipe.whyDish && (
                  <p className="text-charcoal/50 text-sm mb-4">{recipe.whyDish}</p>
                )}

                {/* Crisis / Problem callout */}
                {(recipe.crisis || recipe.problem) && (
                  <div className="mb-4 p-4 bg-terracotta/5 border-l-4 border-terracotta rounded-sm">
                    <p className="text-xs font-sans font-semibold tracking-wider uppercase text-terracotta mb-1">
                      {recipe.crisis ? 'The Crisis' : 'The Problem'}
                    </p>
                    <p className="text-charcoal/80 text-sm">{recipe.crisis || recipe.problem}</p>
                  </div>
                )}

                {/* Metadata bar */}
                <div className="flex flex-wrap gap-6 py-4 border-y border-charcoal/10 text-sm font-sans">
                  {recipe.serves && (
                    <div className="w-full">
                      <span className="block text-xs uppercase tracking-wider text-charcoal/40 mb-1">
                        Serves
                      </span>
                      <span className="font-semibold text-charcoal">
                        {recipe.serves}
                      </span>
                    </div>
                  )}
                  {(recipe.prepTime || recipe.cookTime) && (
                    <div className="flex gap-6">
                      {recipe.prepTime && (
                        <div>
                          <span className="block text-xs uppercase tracking-wider text-charcoal/40 mb-1">
                            Prep Time
                          </span>
                          <span className="font-semibold text-charcoal">
                            {recipe.prepTime}
                          </span>
                        </div>
                      )}
                      {recipe.cookTime && (
                        <div>
                          <span className="block text-xs uppercase tracking-wider text-charcoal/40 mb-1">
                            Cook Time
                          </span>
                          <span className="font-semibold text-charcoal">
                            {recipe.cookTime}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Team */}
              {recipe.team && recipe.team.length > 0 && (
                <div className="px-5 sm:px-8 md:px-12 pt-8">
                  <h3 className="text-lg font-sans font-bold text-charcoal mb-4 pb-2 border-b border-charcoal/10">
                    The Team
                  </h3>
                  <ul className="space-y-2">
                    {recipe.team.map((member, i) => (
                      <li key={i} className="flex gap-3 text-sm text-charcoal/80">
                        <span className="text-sage mt-0.5 flex-shrink-0">&#8226;</span>
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ingredients */}
              <div className="px-5 sm:px-8 md:px-12 py-8">
                <h3 className="text-lg font-sans font-bold text-charcoal mb-4 pb-2 border-b border-charcoal/10">
                  Ingredients
                </h3>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex gap-3 text-sm text-charcoal/80">
                      <span className="text-terracotta mt-1 flex-shrink-0">&#8226;</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Technique */}
              <div className="px-5 sm:px-8 md:px-12 pb-8">
                <h3 className="text-lg font-sans font-bold text-charcoal mb-3">
                  Key Technique
                </h3>
                {Array.isArray(recipe.keyTechnique) ? (
                  <ol className="space-y-3">
                    {recipe.keyTechnique.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage/20 text-sage-dark flex items-center justify-center font-sans font-bold text-xs">
                          {i + 1}
                        </span>
                        <p className="text-charcoal/70 leading-relaxed pt-0.5">{step}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-charcoal/70 leading-relaxed">{recipe.keyTechnique}</p>
                )}
              </div>

              {/* The Inflection Point */}
              <div className="mx-5 sm:mx-8 md:mx-12 mb-8 p-4 sm:p-6 bg-sage/10 border-l-4 border-sage rounded-sm">
                <p className="text-xs font-sans font-semibold tracking-wider uppercase text-sage-dark mb-2">
                  The Inflection Point
                </p>
                <p className="text-charcoal/80 font-serif italic text-lg leading-relaxed">
                  {recipe.inflectionPoint}
                </p>
              </div>

              {/* Personal Story */}
              <div className="px-5 sm:px-8 md:px-12 pb-8">
                <h3 className="text-lg font-sans font-bold text-charcoal mb-4 pb-2 border-b border-charcoal/10">
                  My Personal Story
                </h3>
                <div className="space-y-4 text-charcoal/75 leading-relaxed">
                  {recipe.personalStory.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Technique Notes */}
              {recipe.techniqueNotes && recipe.techniqueNotes.length > 0 && (
                <div className="px-5 sm:px-8 md:px-12 pb-8">
                  <h3 className="text-lg font-sans font-bold text-charcoal mb-3">
                    Technique Notes
                  </h3>
                  <ul className="space-y-2">
                    {recipe.techniqueNotes.map((note, i) => (
                      <li key={i} className="flex gap-3 text-sm text-charcoal/70">
                        <span className="text-gold mt-0.5 flex-shrink-0">&#8226;</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Result */}
              <div className="mx-5 sm:mx-8 md:mx-12 mb-8 p-4 sm:p-6 bg-gold/10 border-l-4 border-gold rounded-sm">
                <p className="text-xs font-sans font-semibold tracking-wider uppercase text-gold mb-2">
                  Result
                </p>
                {Array.isArray(recipe.result) ? (
                  <ul className="space-y-2">
                    {recipe.result.map((item, i) => (
                      <li key={i} className="text-charcoal font-sans font-bold text-lg flex gap-3">
                        <span className="text-gold flex-shrink-0">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-charcoal font-sans font-bold text-lg">
                    {recipe.result}
                  </p>
                )}
              </div>

              {/* Why It Worked */}
              {recipe.whyItWorked && recipe.whyItWorked.length > 0 && (
                <div className="px-5 sm:px-8 md:px-12 pb-8">
                  <h3 className="text-lg font-sans font-bold text-charcoal mb-3">
                    Why It Worked
                  </h3>
                  <ul className="space-y-2">
                    {recipe.whyItWorked.map((reason, i) => (
                      <li key={i} className="flex gap-3 text-sm text-charcoal/70">
                        <span className="text-sage mt-0.5 flex-shrink-0">&#8226;</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back link */}
              <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 text-center">
                <button
                  onClick={onClose}
                  className="text-terracotta font-sans text-sm font-semibold tracking-wider uppercase hover:text-terracotta-dark transition-colors"
                >
                  &larr; Back to Recipes
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
