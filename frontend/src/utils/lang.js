const PlPrefix = 'pl/';

export const getLangPath = (path, lang) => {
  console.log(path, lang);
  let pathNoSlashes = path[path.length - 1] === '/' ? path.slice(0, -1) : path;
  pathNoSlashes = pathNoSlashes[0] === '/' ? pathNoSlashes.slice(1) : pathNoSlashes;

  console.log(pathNoSlashes);

  if (lang === 'PL' && pathNoSlashes.indexOf(PlPrefix) < 0) {
    pathNoSlashes = `/${PlPrefix}${pathNoSlashes}`;
  }

  if (lang === 'Eng' && pathNoSlashes.indexOf(PlPrefix) >= 0) {
    pathNoSlashes = `/${pathNoSlashes.replace(PlPrefix, '')}`;
  }

  return pathNoSlashes;
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
