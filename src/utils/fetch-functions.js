import ky from 'ky-universal';

// CRCK api used as a placeholder for sermons
// Change this URL when the API is set up for the new website

// organise a separate file for these consts
const DRUPAL_URL = 'https://cornerstoneapi.newfrontdoor.org/api/views/';

const apiRoute = {
  sermons: 'all_sermons_api',
  recent: 'recent_series_api',
  series: 'all_sermon_series_api',
  seriesFilter: 'all_sermons_api'
};

export async function fetchDrupalData(type, obj) {
  const {filters, ...noFilters} = obj;
  let seriesFilter;
  const filterSet = obj.hasOwnProperty('filters')
    ? obj.filters.map(filter => {
        // if (Object.values(filter)[0] !== '') { }
        return {
          [`filters[${Object.keys(filter)[0]}]`]: `${Object.values(filter)[0]}`
        };
      })
    : '';
  if (type === 'seriesFilter') {
    seriesFilter = noFilters.hasOwnProperty('nid') ? {[`filters[sermonSeries]`]: noFilters.nid} : '';
  }

  const flatParams = Object.assign(...filterSet, noFilters, seriesFilter);
  const result = await ky(DRUPAL_URL + apiRoute[type], {
    searchParams: {
      ...flatParams,
      display_id: 'services_1'
    },
    mode: 'cors',
    credentials: 'omit'
  }).json();
  return result;
}
