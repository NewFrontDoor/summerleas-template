import ky from 'ky-universal';

// CRCK api used as a placeholder for sermons
// Change this URL when the API is set up for the new website

// organise a separate file for these consts
const DRUPAL_URL = 'https://cornerstoneapi.newfrontdoor.org/api/views/';

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
