import {MutableRefObject, KeyboardEvent} from 'react';
import { Reviews, listCamera } from '../types/types-response/types-response';
import { Category, TypeCamera, LevelProduct } from '../const/const';

import dayjs from 'dayjs';


export const gettingTranslatedDate = (date: string) => dayjs (date).format ('D MMMM');


export const sortReviews = (reviews: Reviews) => {
  let resultSort: Reviews = [];

  if(reviews.length === 1) {
    resultSort = reviews;
  } else {
    resultSort = reviews.slice ().sort ((a,b) => {
      if (a.createAt < b.createAt) {
        return -1;
      }
      if (a.createAt > b.createAt) {
        return 1;
      }
      return 0;
    }).reverse();
  }

  return resultSort;
};


export const down = (products: listCamera, payload: string) => {
  let resultSort: listCamera = [];

  resultSort = products.slice ().sort ((a,b) => {
    if (a[payload] < b[payload]) {
      return -1;
    }
    if (a[payload] > b[payload]) {
      return 1;
    }
    return 0;
  }).reverse();

  return resultSort;
};

export const up = (products: listCamera, payload: string) => {
  let resultSort: listCamera = [];

  resultSort = products.slice ().sort ((a,b) => {
    if (a[payload] < b[payload]) {
      return -1;
    }
    if (a[payload] > b[payload]) {
      return 1;
    }
    return 0;
  });

  return resultSort;
};


export const filteringByCategory = (products: listCamera, payload: string): listCamera => {
  let filteredListProduct: listCamera = [];

  switch (payload) {
    case Category.Camera:
      filteredListProduct = products.slice().filter((camera) => camera.category === Category.Camera);
      break;
    case Category.Videocamera:
      filteredListProduct = products.slice().filter((Videocamera) => Videocamera.category === Category.Videocamera);
      break;
    case TypeCamera.Digital:
      filteredListProduct = products.slice().filter((camera) => camera.type === TypeCamera.Digital);
      break;
    case TypeCamera.Instant:
      filteredListProduct = products.slice().filter((camera) => camera.type === TypeCamera.Instant);
      break;
    case TypeCamera.Membranous:
      filteredListProduct = products.slice().filter((camera) => camera.type === TypeCamera.Membranous);
      break;
    case TypeCamera.Collection:
      filteredListProduct = products.slice().filter((camera) => camera.type === TypeCamera.Collection);
      break;
    case LevelProduct.Zero:
      filteredListProduct = products.slice().filter((camera) => camera.level === LevelProduct.Zero);
      break;
    case LevelProduct.Professional:
      filteredListProduct = products.slice().filter((camera) => camera.level === LevelProduct.Professional);
      break;
    case LevelProduct.Amateur:
      filteredListProduct = products.slice().filter((camera) => camera.level === LevelProduct.Amateur);
      break;
  }

  return filteredListProduct;
};

export const filteringByPrice = (
  products: listCamera,
  priceFrom: number | null,
  priceTo: number | null
) => {
  let totalProducts: listCamera = [];

  if(priceFrom && !priceTo) {
    totalProducts = products.filter((product) => product.price > priceFrom);
  }
  if(!priceFrom && priceTo) {
    totalProducts = products.filter((product) => product.price < priceTo);
  }
  if(priceFrom && priceTo) {
    totalProducts = products.filter((product) => product.price > priceFrom && product.price < priceTo);
  }

  return totalProducts;
};


export const returnListNumber = (
  value: number
) =>{
  let counter = 0;
  const items = [];

  while(counter <= value) {
    counter += 1;

    items.push(counter);
  }
  return items;
};


export const returnNumber = (number: number) => {
  const valueNumber = (number / 100) * 100;
  let result = 0;

  if(valueNumber > 0 && valueNumber <= 20) {
    result = 1;
  }
  if(valueNumber > 20 && valueNumber <= 40) {
    result = 2;
  }
  if(valueNumber > 40 && valueNumber <= 60) {
    result = 3;
  }
  if(valueNumber > 60 && valueNumber <= 80) {
    result = 4;
  }
  if(valueNumber > 80 && valueNumber > 100) {
    result = 5;
  }

  return result;
};

export const shiftFocus = (evt: KeyboardEvent<HTMLDivElement>, element: MutableRefObject<null | HTMLElement>) => {
  if(evt.key === 'Tab') {
    element.current?.focus();

  }
};
