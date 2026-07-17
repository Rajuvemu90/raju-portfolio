// Premium executive easing: ultra-smooth acceleration into progressive deceleration
export const executiveEase = [0.16, 1, 0.3, 1];

export const viewportConfig = { 
  once: true, 
  amount: 0.2 
};

// Reusable standard fade-up pattern for layout rows
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: executiveEase
    }
  }
};