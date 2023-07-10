export enum Path {
  Catalog = '/',
  Product = 'product/',
  Basket = 'basket',
  Error = '*'
}


export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy';

export enum APIRoute {
  Cameras = '/cameras',
  Similar = '/similar',
  Reviews = '/reviews',
  Promo = '/promo',
}


export enum NameSpace {
  ListCamera = 'LIST_CAMERA',
  CardProduct = 'CARD_PRODUCT',
  SimilarProduct = 'SIMILAR_PRODUCT',
  Reviews = 'REVIEWS',
  Promo = 'PROMO',
  AddProduct = 'ADD_PRODUCT',
}


export const stringValue = ['price', 'reviewCount', 'descending', 'ascending'];


export enum Category {
  Camera = 'Фотоаппарат',
  Videocamera = 'Видеокамера'
}

export enum TypeCamera {
  Digital = 'Цифровая',
  Membranous = 'Плёночная',
  Instant = 'Моментальная',
  Collection = 'Коллекционная'
}

export enum LevelProduct {
  Zero = 'Нулевой',
  Amateur = 'Любительский',
  Professional = 'Профессиональный'
}


export const HEADLINES: readonly string[] = [
  'Отлично',
  'Хорошо',
  'Нормально',
  'Плохо',
  'Ужасно'
];
