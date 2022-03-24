import { useState, useEffect } from "react";

export const mobileQuery =  "(max-width:768px)";
export const mobileLandspaceQuery = "(min-width:1200px)";

/**
 * How to use:
 * code example :
 *          const Component=()=>
 *          {
 *          const match = useMediaQuery('(max-width: 768px)');
 *          ........
 *          {!match?<SomeComponent/>:somethingelse}
 *          }
 * @param  query is string that tells us the media window size that we compare the current size to (see the example above)
 * @returns
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}
