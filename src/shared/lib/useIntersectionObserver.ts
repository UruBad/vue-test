/**
 * Intersection observer interface
 */
interface IUseIntersectionObserver {
  startObserver: (element: HTMLElement) => void;
  stopObserver: () => void;
}

/**
 * Intersection observer function
 * @param {function} handler - handler
 */
export default function useIntersectionObserver(
  handler: () => void,
): IUseIntersectionObserver {
  const observer = new IntersectionObserver((entries) => {
    if (entries && entries.length > 0 && entries[0].isIntersecting) {
      handler();
    }
  });

  /**
   * Start observer element
   * @param {HTMLElement} element - element to observer
   */
  function startObserver(element: HTMLElement) {
    observer.observe(element);
  }

  /**
   * Stop observer element
   */
  function stopObserver() {
    observer.disconnect();
  }

  return {
    startObserver,
    stopObserver,
  };
}
