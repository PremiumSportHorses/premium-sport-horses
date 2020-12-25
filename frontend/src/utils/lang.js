const PlPrefix = 'pl/';

export const getLangPath = (path, lang) => {
  let langPath = path[path.length - 1] === '/' ? path.slice(0, -1) : path;
  langPath = langPath[0] === '/' ? langPath.slice(1) : langPath;

  if (lang === 'PL' && langPath.indexOf(PlPrefix) < 0) {
    langPath = `${PlPrefix}${langPath}`;
  }

  if (lang === 'Eng' && langPath.indexOf(PlPrefix) >= 0) {
    langPath = langPath.replace(PlPrefix, '');
  }

  return `/${langPath}`;
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
