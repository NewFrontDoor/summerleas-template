import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {fetchDrupalData} from '../../utils/fetch-functions';
import SermonTable from './sermon-table';
import TitleBreadcrumb from './title-breadcrumb';

const Form = styled.form`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  //border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

const Select = styled.select`
  border: 1px solid #cdcdcd;
  border-radius: 0;
  box-shadow: none;
  transition: border-color ease-in-out 0.3s;
`;

export default function Sermons({globalSermons, setGlobalSermons}) {
  const [sermons, setSermons] = useState(globalSermons);
  const [sermonSeriesSet, setSeries] = useState(null);
  const [seriesValue, setSeriesValue] = useState('');
  const [viewingRefinedList, setList] = useState(false);
  const [searchQuery, setQuery] = useState('');
  const [searchType, setType] = useState();
  const [loaded, setLoaded] = useState(globalSermons);

  useEffect(() => {
    setSermons(globalSermons);
    setLoaded(true);
  }, [globalSermons]);

  useEffect(() => {
    if (!sermons) {
      fetchDrupalData('sermons', {}).then(response => {
        setGlobalSermons(response);
        setLoaded(true);
      });
    }

    fetchDrupalData('series', {}).then(response => {
      setSeries(response);
    });
  }, [sermons, setGlobalSermons]);

  function loadSeries(nid) {
    if ((nid === '' || nid === undefined) && !sermons) {
      fetchDrupalData('sermons', {}).then(response => {
        setSermons(response);
        setSeriesValue('');
        setList(false);
      });
    } else {
      setSeriesValue(nid);
      fetchDrupalData('seriesFilter', {nid}).then(response => {
        setSermons(response);
        setList(true);
      });
    }
  }

  function searchSermons() {
    console.log(searchQuery + '-' + searchType);
    if (searchQuery && searchType) {
      fetchDrupalData('sermons', {[searchType]: searchQuery}).then(response => {
        setSermons(response);
        setList(true);
      });
    }
  }

  return (
    <section>
      <TitleBreadcrumb
        title="All Sermons"
        breadcrumbs={[['Home', '/'], ['Resources', '/resources']]}
      />
      {loaded ? (
        <div id="content-region">
          <div className="container">
            <div className="col-md-3">
              View Sermon Series:
              <select
                className="form-control"
                id="sermonSelect"
                value={seriesValue}
                onChange={e => loadSeries(e.target.value)}
              >
                <option value="">---</option>
                {sermonSeriesSet
                  ? sermonSeriesSet.map(series => {
                      return (
                        <option key={series.nid} value={series.nid}>
                          {series.node_title}
                        </option>
                      );
                    })
                  : ''}
              </select>
            </div>

            <div className="form-group">
              <Form>
                <div className="col-md-4">
                  Search:{' '}
                  <input
                    type="text"
                    className="form-control"
                    id="searchQuery"
                    value={searchQuery}
                    onChange={e => setQuery(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  In:
                  <Select
                    className="form-control"
                    id="searchType"
                    value={searchType}
                    onChange={e => setType(e.target.value)}
                  >
                    <option value="title">Title</option>
                    <option value="preacher">Preacher</option>
                    <option value="passage">Bible Passage</option>
                  </Select>
                </div>
                <br />
                <input
                  type="button"
                  value="Search"
                  className="btn btn-primary sermon-search-button"
                  onClick={() => searchSermons()}
                />
              </Form>
            </div>

            <div className="view-content">
              {sermons ? <SermonTable sermons={sermons} /> : ''}
              <br />
              <span style={{float: 'left'}}>
                {viewingRefinedList ? (
                  <button onClick={() => loadSeries()}>
                    Return to All Sermons
                  </button>
                ) : (
                  ''
                )}
              </span>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}
