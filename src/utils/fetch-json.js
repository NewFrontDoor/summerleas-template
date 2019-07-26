import fetch from 'isomorphic-fetch';

// CRCK api used as a placeholder for sermons
// Change this URL when the API is set up for the new website
const DRUPAL_URL = 'https://cornerstoneapi.newfrontdoor.org/api/views/';
const DRUPAL_SEARCH_SERMONS =
  DRUPAL_URL + 'all_sermons_api?display_id=services_1&filters';

// Example suffix: all_sermons_api?filters[preacher]=keith&filters[title]=reality

// API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback) {
  if (url.includes('?')) {
    url += '&display_id=services_1';
  } else {
    url += '?display_id=services_1';
  }

  fetch(DRUPAL_URL + url)
    .then(resp => resp.json())
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
}

export function searchDrupalSermons(query, type, callback) {
  fetch(DRUPAL_SEARCH_SERMONS + '[' + type + ']=' + query)
    .then(resp => resp.json())
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
}
