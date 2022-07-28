import WebImg from '../../image/WEB.png'
import AppImg from '../../image/APP.png'
import LanguageImg from '../../image/LANGUAGE.png'
import AIImg from '../../image/AI.png'
import GameImg from '../../image/GAME.png'
import DevelopmentImg from '../../image/DEVELOPMENT.png'
import MajorImg from '../../image/MAJOR.png'
import EquipmentImg from '../../image/EQUIPMENT.png'

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
  WEB: WebImg,
  APP: AppImg,
  LANGUAGE: LanguageImg,
  AI: AIImg,
  GAME: GameImg,
  DEVELOPMENT: DevelopmentImg,
  MAJOR: MajorImg,
  EQUIPMENT: EquipmentImg
};

const KOREAN = {
  WEB: '웹',
  APP: '앱',
  LANGUAGE: '언어',
  AI: '인공지능',
  GAME: '게임',
  DEVELOPMENT: '개발 교양',
  MAJOR: '전공 서적',
  EQUIPMENT: '기자재',
};

Object.freeze(ARRAY);
Object.freeze(RENTEE_TYPE);
Object.freeze(INDEX);
Object.freeze(ICON_URL);
Object.freeze(KOREAN);
export default { ARRAY, ...RENTEE_TYPE, INDEX, ICON_URL, KOREAN };
