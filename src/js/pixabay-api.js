// export const fetchPhotos = searchedQuery => {
//   const params = new URLSearchParams({
//     key: '48283310-b2398337957214f4daaecb10d',
//     q: searchedQuery,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });
//   return fetch(`https://pixabay.com/api/?${params}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });

import axios from 'axios';

export const fetchPhotos = async (searchedQuery, currentPage) => {
  const options = {
    params: {
      key: '48283310-b2398337957214f4daaecb10d',
      q: searchedQuery,
      page: currentPage,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get('https://pixabay.com/api/', options);
};
