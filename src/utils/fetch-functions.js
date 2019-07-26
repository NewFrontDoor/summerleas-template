import ky from 'ky-universal';

// CRCK api used as a placeholder for sermons
// Change this URL when the API is set up for the new website
const DRUPAL_URL = 'https://cornerstoneapi.newfrontdoor.org/api/views/';
const DRUPAL_SEARCH_SERMONS =
  DRUPAL_URL + 'all_sermons_api?display_id=services_1&filters';

// Example suffix: all_sermons_api?filters[preacher]=keith&filters[title]=reality

// API uses Services and Services views on the drupal 7 instance

const apiRoute = {
  sermons: 'all_sermons_api'
};

export async function fetchDrupalData(type, obj) {
  const result = await ky(DRUPAL_URL + apiRoute[type], {
    searchParams: {
      ...obj,
      display_id: 'services_1'
    },
    mode: 'cors',
    credentials: 'omit'
  }).json();
  if (result.length === 1) {
    return result[0];
  }

  return result;
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
