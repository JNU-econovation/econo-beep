const ARRAY = [
  'WEB',
  'APP',
  'LANGUAGE',
  'AI',
  'GAME',
  'DEVELOPMENT',
  'MAJOR',
  'EQUIPMENT'
];

const RENTEE_TYPE = {
  WEB: 'WEB',
  APP: 'APP',
  LANGUAGE: 'LANGUAGE',
  AI: 'AI',
  GAME: 'GAME',
  DEVELOPMENT: 'DEVELOPMENT',
  MAJOR: 'MAJOR',
  EQUIPMENT: 'EQUIPMENT',
};

const INDEX = {
  WEB: 0,
  APP: 1,
  LANGUAGE: 2,
  AI: 3,
  GAME: 4,
  DEVELOPMENT: 5,
  MAJOR: 6,
  EQUIPMENT: 7,
};

const ICON_URL = {
  WEB: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
  APP: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png',
  LANGUAGE: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png',
  AI: '',
  GAME: '',
  DEVELOPMENT: '',
  MAJOR: '',
  EQUIPMENT: ''
};

const KOREAN = {
  WEB: '웹',
  APP: '앱',
  LANGUAGE: '프로그래밍 언어',
  AI: '인공지능',
  GAME: '게임',
  DEVELOPMENT: '개발 교양',
  MAJOR: '학교 전공',
  EQUIPMENT: '기자재',
};

Object.freeze(ARRAY);
Object.freeze(RENTEE_TYPE);
Object.freeze(INDEX);
Object.freeze(ICON_URL);
Object.freeze(KOREAN);
export default { ARRAY, ...RENTEE_TYPE, INDEX, ICON_URL, KOREAN };
