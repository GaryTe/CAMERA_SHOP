export const product = {
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  vendorCode: 'DA4IU67AD5',
  type: 'Коллекционная',
  category: 'Видеокамера',
  description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
  level: 'Нулевой',
  price: 65000,
  reviewCount: 16,
  previewImg: 'img/content/das-auge.jpg',
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp'
};

export const listProduct = () => [50000, 150000, 200000].map((number) => ({
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  vendorCode: 'DA4IU67AD5',
  type: 'Коллекционная',
  category: 'Видеокамера',
  description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
  level: 'Нулевой',
  price: number,
  reviewCount: 16,
  previewImg: 'img/content/das-auge.jpg',
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp'
})
);


export const promoProduct = {
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  previewImg: 'img/content/promo.jpg',
  previewImg2x: 'img/content/promo@2x.jpg',
  previewImgWebp: 'img/content/promo.webp',
  previewImgWebp2x: 'img/content/promo@2x.webp'
};


export const review = {
  id: 'f1d10ddd-2a21-4f71-9e1e-5f511703fbdd',
  createAt: '2022-07-09T13:24:57.980Z',
  cameraId: 1,
  userName: 'Кирилл',
  advantage: 'Легкая в плане веса, удобная в интерфейсе',
  disadvantage: 'Быстро садиться зарядка',
  review: 'Это моя первая камера. Я в восторге, нареканий нет',
  rating: 5
};

export type Review = {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export const addReview = {
  cameraId: 1,
  userName: 'Кирилл',
  advantage: 'Легкая в плане веса, удобная в интерфейсе',
  disadvantage: 'Быстро садиться зарядка',
  review: 'Это моя первая камера. Я в восторге, нареканий нет',
  rating: 5
};

