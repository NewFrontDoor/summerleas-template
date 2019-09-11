import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const EventWrapper = styled.div`
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-bottom: 5px;
`;

const Icon = styled.div`
  font-size: 40px;
  float: left;
`;

const Title = styled.div`
  font-size: 1.1em;
  margin-left: 45px;
`;

const Date = styled.div`
  font-size: 0.9em;
  margin-left: 45px;
`;

export default function UpcomingEvent({title, startdate}) {
  return (
    <EventWrapper>
      <Icon className="ion-calendar" />

      <Title>{title}</Title>
      <Date>{startdate}</Date>
    </EventWrapper>
  );
}

UpcomingEvent.propTypes = {
  title: PropTypes.string.isRequired,
  startdate: PropTypes.string.isRequired
};
