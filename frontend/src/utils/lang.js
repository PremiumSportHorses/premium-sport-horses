const PlPrefix = 'pl/';

export const getLangPath = (path, lang) => {
  if (lang === 'PL' && path.indexOf(PlPrefix) < 0) {
    return `${PlPrefix}${path}`;
  }

  if (lang === 'Eng' && path.indexOf(PlPrefix) >= 0) {
    return path.replace(PlPrefix, '');
  }

  return path;
};
