import { useContext } from 'react';
import { ScreenWidthContext } from '../contexts/ScreenWidthContext';
import { getPageAnimation } from '../animations';

export const usePageAnimation = () => {
  const { windowWidth } = useContext(ScreenWidthContext);

  // The logic now lives in one single place: this hook.
  const isMobileOrTablet = windowWidth < 1140; 

  const animation = getPageAnimation(isMobileOrTablet);

  return animation;
}