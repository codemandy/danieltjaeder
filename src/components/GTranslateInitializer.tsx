"use client"

import { useEffect } from 'react';

export default function GTranslateInitializer() {
  useEffect(() => {
    // @ts-ignore
    window.gtranslateSettings = {
      "default_language": "sv",
      "native_language_names": true,
      "languages": ["sv", "en"],
      "globe_color": "#000000", // Globe color is always black
      "wrapper_selector": ".gtranslate_wrapper",
      "flag_size": 16,
      "horizontal_position": "right",
      "vertical_position": "bottom",
      "globe_size": 16
    };

    const globeWrapper = document.querySelector('.gtranslate_wrapper');

    const scriptId = 'gtranslate-main-script';
    let initialScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!initialScript) {
      initialScript = document.createElement('script');
      initialScript.id = scriptId;
      initialScript.src = "https://cdn.gtranslate.net/widgets/latest/globe.js";
      initialScript.defer = true;
      document.body.appendChild(initialScript);
    }

    return () => {
      if (globeWrapper) {
        // @ts-ignore
        globeWrapper.innerHTML = ''; 
      }
      // Clean up the main GTranslate script to allow re-initialization if component remounts
      // though with layout placement, it should mount once.
      const gtranslateMainScript = document.getElementById(scriptId);
      if (gtranslateMainScript) {
        gtranslateMainScript.remove();
      }
      
      // GTranslate might add other scripts or elements, 
      // more specific cleanup might be needed if issues arise.
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component does not render anything itself
} 
