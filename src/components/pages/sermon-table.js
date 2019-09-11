import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const Table = styled.table`
  border-collapse: collapse;
`;

const Tr = styled.tr`
  background-color: ${props => (props.num % 2 ? '#eee' : '#fff')};
  border-bottom: 1px solid #ccc;
  td {
    padding: 0 5px;
  }
`;

export default function SermonTable({sermons}) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Bible Passage(s)</th>
          <th>Preacher</th>
          <th>Date Preached</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {sermons.map((sermon, index) => (
          <Tr key={sermon.nid} num={index}>
            <td>
              <Link to={`/sermon/${sermon.nid}`} dangerouslySetInnerHTML={{__html: sermon.node_title ? sermon.node_title : 'untitled'}} />
            </td>
            <td>{sermon.text ? sermon.text : ''}</td>
            <td>{sermon.preacher ? sermon.preacher : ''}</td>
            <td>{sermon.datepreached ? sermon.datepreached : ''}</td>
            <td>
              <a href={sermon.url} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" />
              </a>
            </td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
