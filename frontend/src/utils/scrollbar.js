let scrollBarWidth = null;

export const getSrollBarWidth = () => {
  if (scrollBarWidth) {
    return scrollBarWidth;
  }

  if (typeof window === 'undefined' || !window.document) {
    return 0;
  }

  const scrollDiv = document.createElement('div');
  scrollDiv.className = 'scrollbar-measure';
  document.body.appendChild(scrollDiv);

  scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollBarWidth;
};
