import {MutableRefObject, KeyboardEvent} from 'react';
import { Reviews, CamerasList } from '../types/types-response/types-response';
import { Category, TypeCamera, LevelProduct, stringValue } from '../const/const';

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


export const sortDown = (products: CamerasList, payload: string) => {
  let camerasList: CamerasList = [];

  switch (payload) {
    case stringValue[0]:
      camerasList = products.slice ().sort ((a,b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      }).reverse();
      break;
    case stringValue[1]:
      camerasList = products.slice ().sort ((a,b) => {
        if (a.reviewCount < b.reviewCount) {
          return -1;
        }
        if (a.reviewCount > b.reviewCount) {
          return 1;
        }
        return 0;
      }).reverse();
      break;
  }
  return camerasList;
};

export const sortUp = (products: CamerasList, payload: string) => {
  let camerasList: CamerasList = [];

  switch(payload) {
    case stringValue[0]:
      camerasList = products.slice ().sort ((a,b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
      break;
    case stringValue[1]:
      camerasList = products.slice ().sort ((a,b) => {
        if (a.reviewCount < b.reviewCount) {
          return -1;
        }
        if (a.reviewCount > b.reviewCount) {
          return 1;
        }
        return 0;
      });
      break;
  }

  return camerasList;
};


export const filteringByCategory = (products: CamerasList, payload: string): CamerasList => {
  let camerasList: CamerasList = [];

  switch (payload) {
    case Category.Camera:
      camerasList = products.slice().filter((camera) => camera.category === Category.Camera);
      break;
    case Category.Videocamera:
      camerasList = products.slice().filter((Videocamera) => Videocamera.category === Category.Videocamera);
      break;
    case TypeCamera.Digital:
      camerasList = products.slice().filter((camera) => camera.type === TypeCamera.Digital);
      break;
    case TypeCamera.Instant:
      camerasList = products.slice().filter((camera) => camera.type === TypeCamera.Instant);
      break;
    case TypeCamera.Membranous:
      camerasList = products.slice().filter((camera) => camera.type === TypeCamera.Membranous);
      break;
    case TypeCamera.Collection:
      camerasList = products.slice().filter((camera) => camera.type === TypeCamera.Collection);
      break;
    case LevelProduct.Zero:
      camerasList = products.slice().filter((camera) => camera.level === LevelProduct.Zero);
      break;
    case LevelProduct.Professional:
      camerasList = products.slice().filter((camera) => camera.level === LevelProduct.Professional);
      break;
    case LevelProduct.Amateur:
      camerasList = products.slice().filter((camera) => camera.level === LevelProduct.Amateur);
      break;
  }

  return camerasList;
};

export const filteringByPrice = (
  products: CamerasList,
  priceFrom: number | null,
  priceTo: number | null
) => {
  let camerasList: CamerasList = [];

  if(priceFrom && !priceTo) {
    camerasList = products.filter((product) => product.price > priceFrom);
  }
  if(!priceFrom && priceTo) {
    camerasList = products.filter((product) => product.price < priceTo);
  }
  if(priceFrom && priceTo) {
    camerasList = products.filter((product) => product.price > priceFrom && product.price < priceTo);
  }

  return camerasList;
};


export const returnNumbersList = (
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
