const PlPrefix = 'pl/';

export const getLangPath = (path, lang) => {
  let languagePath = path;

  if (lang === 'PL' && path.indexOf(PlPrefix) < 0) {
    languagePath = `${PlPrefix}${path}`;
  }

  if (lang === 'Eng' && path.indexOf(PlPrefix) >= 0) {
    languagePath = path.replace(PlPrefix, '');
  }

  return languagePath[languagePath.length - 1] === '/' ? languagePath.slice(0, -1) : languagePath;
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
