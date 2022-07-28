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
  WEB: 'https://cdn-icons-png.flaticon.com/512/2210/2210153.png',
  APP: 'https://cdn-icons-png.flaticon.com/512/94/94225.png',
  LANGUAGE: 'http://cdn.onlinewebfonts.com/svg/img_545245.png',
  AI: 'https://cdn-icons-png.flaticon.com/512/1693/1693746.png',
  GAME: 'https://toppng.com/uploads/preview/video-game-icon-online-multiplayer-icon-11553487532mjosxalbze.png',
  DEVELOPMENT: 'https://cdn-icons-png.flaticon.com/512/4599/4599858.png',
  MAJOR: 'https://cdn-icons-png.flaticon.com/512/3612/3612046.png',
  EQUIPMENT: 'https://cdn-icons-png.flaticon.com/512/15/15094.png'
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
