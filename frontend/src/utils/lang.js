const PlPrefix = 'pl/';

const cutFirstAndLastSlash = (path) => {
  let langPath = path[path.length - 1] === '/' ? path.slice(0, -1) : path;
  langPath = langPath[0] === '/' ? langPath.slice(1) : langPath;

  return langPath;
};

export const getLangPath = (path, lang) => {
  const cleanedPath = cutFirstAndLastSlash(path);

  if (cleanedPath === 'pl') {
    return '/';
  }

  if (lang === 'PL' && path.indexOf(PlPrefix) < 0) {
    return `/${PlPrefix}${cleanedPath}`;
  }

  if (lang === 'Eng' && path.indexOf(PlPrefix) >= 0) {
    return `/${cleanedPath.replace(PlPrefix, '')}`;
  }

  return `/${cleanedPath}`;
};

const genders = {
  gelding: {
    PL: 'wałach',
    Eng: 'gelding',
  },
  mare: {
    PL: 'klacz',
    Eng: 'mare',
  },
  stallion: {
    PL: 'ogier',
    Eng: 'stallion',
  },
};

export const getHorseGenderLabel = (gender, lang = 'Eng') => {
  if (gender) {
    return genders[gender][lang];
  }
  return '';
};
