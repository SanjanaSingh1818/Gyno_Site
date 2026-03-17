import { Variants } from 'framer-motion'

// Hero animations
export const heroImageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
}

export const heroTextVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const heroTextContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

// Scroll animation variants
export const scrollFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

// Card stagger variants
export const cardContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

export const cardItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Treatment card hover animation
export const treatmentCardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Button hover animation
export const buttonHoverVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
}

// Parallax effect for hero background
export const parallaxVariants = (yOffset: number): Variants => ({
  animate: {
    y: yOffset * 0.2,
    transition: {
      type: 'tween',
      ease: 'easeOut',
    },
  },
})

// List item stagger
export const listContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const listItemVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}
