import { motion } from 'framer-motion';

interface FilterButtonsProps {
  categories: readonly string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterButtons({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-full font-sans text-sm tracking-wider transition-colors duration-300 ${
            activeCategory === category
              ? 'bg-terracotta text-cream'
              : 'bg-transparent border border-charcoal/20 text-charcoal/70 hover:border-terracotta hover:text-terracotta'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
