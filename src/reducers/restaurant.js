import { GET_RESTAURANTS } from '../actions/types';

const initialState = [
  {
    id: 1,
    title: 'rest1',
    description: 'sdlkandalksdm',
    cover: 'http://localhost:3002/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9JYTJWNVNTSWhkR3RxTm1aaU9EaG9jamh6YzNvemNHRjFhbW8wWW5OaGFUTjNNZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUTJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5OdGIyOTBhR2xsTG1wd1p5STdJR1pwYkdWdVlXMWxLajFWVkVZdE9DY25jMjF2YjNSb2FXVXVhbkJuQmpzR1ZEb1JZMjl1ZEdWdWRGOTBlWEJsU1NJUGFXMWhaMlV2YW5CbFp3WTdCbFE9IiwiZXhwIjoiMjAyMS0wMy0yM1QxNjo0NzoxNS43NzVaIiwicHVyIjoiYmxvYl9rZXkifX0=--96acd5177e7ac2c1e04022847a627b7d5bde42f7/smoothie.jpg?content_type=image%2Fjpeg&disposition=inline%3B+filename%3D%22smoothie.jpg%22%3B+filename%2A%3DUTF-8%27%27smoothie.jpg'
  },{
    title: 'rest2',
    description: 'sdlkandalksdm',
    cover: 'http://localhost:3002/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9JYTJWNVNTSWhkR3RxTm1aaU9EaG9jamh6YzNvemNHRjFhbW8wWW5OaGFUTjNNZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUTJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5OdGIyOTBhR2xsTG1wd1p5STdJR1pwYkdWdVlXMWxLajFWVkVZdE9DY25jMjF2YjNSb2FXVXVhbkJuQmpzR1ZEb1JZMjl1ZEdWdWRGOTBlWEJsU1NJUGFXMWhaMlV2YW5CbFp3WTdCbFE9IiwiZXhwIjoiMjAyMS0wMy0yM1QxNjo0NzoxNS43NzVaIiwicHVyIjoiYmxvYl9rZXkifX0=--96acd5177e7ac2c1e04022847a627b7d5bde42f7/smoothie.jpg?content_type=image%2Fjpeg&disposition=inline%3B+filename%3D%22smoothie.jpg%22%3B+filename%2A%3DUTF-8%27%27smoothie.jpg'

  },
  {
    id: 2,
    title: 'rest3',
    description: 'sdlkandalksdm',
    cover: 'http://localhost:3002/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9JYTJWNVNTSWhkR3RxTm1aaU9EaG9jamh6YzNvemNHRjFhbW8wWW5OaGFUTjNNZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUTJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5OdGIyOTBhR2xsTG1wd1p5STdJR1pwYkdWdVlXMWxLajFWVkVZdE9DY25jMjF2YjNSb2FXVXVhbkJuQmpzR1ZEb1JZMjl1ZEdWdWRGOTBlWEJsU1NJUGFXMWhaMlV2YW5CbFp3WTdCbFE9IiwiZXhwIjoiMjAyMS0wMy0yM1QxNjo0NzoxNS43NzVaIiwicHVyIjoiYmxvYl9rZXkifX0=--96acd5177e7ac2c1e04022847a627b7d5bde42f7/smoothie.jpg?content_type=image%2Fjpeg&disposition=inline%3B+filename%3D%22smoothie.jpg%22%3B+filename%2A%3DUTF-8%27%27smoothie.jpg'

  },
  {
    id: 3,
    title: 'rest4',
    description: 'sdlkandalksdm'
  },
  {
    id: 4,
    name: 'rest4',
    description: 'sdlkandalksdm'
  },
];
const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default restaurantReducer;