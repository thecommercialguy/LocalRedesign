
export const mobileAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 } // Adjust duration to your liking
};

const desktopAnimation = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
  transition: { duration: 0 }
};

export const getPageAnimation = (isMobile) => {
  return isMobile ? mobileAnimation : desktopAnimation;
};