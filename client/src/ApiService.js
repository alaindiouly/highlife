import { discogsRequestToken, resultsPerPage, style } from './shared/discogsParams'

const BASE_URL = 'https://api.discogs.com';
const path = '/database/search'
const params = `?token=${discogsRequestToken}&per_page=${resultsPerPage}&style=${style}`;
const options = {
  // mode: 'cors',
  headers: { 'User-Agent': 'react-solo-project +http://localhost:3000' }
};

// eslint-disable-next-line
const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Discogs +${discogsRequestToken}`
});

//console.log(BASE_URL+path+params)

function getSearch () {
  return fetch(BASE_URL+path+params, options)
  // here we're including 400 Bad Request
  .then(res => res.status <= 400 ? res : Promise.reject())
  // 204: no content otherwise convert to JSON string
  .then(res => res.status === 204 ? res : res.json())
  // .then(res=>console.log(res.results[0].title))
  .catch(err=> {
    console.log(`Error fetching ${path}: `, err);
  })
}

//getSearch();
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {getSearch};