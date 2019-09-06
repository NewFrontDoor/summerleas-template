import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  position: absolute;
  left: 0;
  min-width: 200px;
  width: 750px;
  list-style: none;
  display: ${props => props.display};
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 3px solid ${props => props.theme.colors.highlight};
  border-top: none;
  background-color: #fff;
  padding: 10px;
  gap: 40px;
  z-index: 1000;
`;

const Blurb = styled('div')`
  background-color: ${props => props.theme.colors.highlight};
  width: 100%;
  color: white;
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  height: fit-content;
`;

const Header = styled('li')`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  margin: 8px;
  color: ${props => props.theme.colors.highlight};
`;

const SubmenuList = styled('div')`
  color: #333;
  a {
    color: #333;
    border-top: 1px solid #eee;
    padding: 5px 0 0 0;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  li {
    padding: 0;
    font-weight: 400;
    margin: 8px;
  }
`;

const Link = styled('a')`
  font-size: 14px;
  line-height: 20px;
  padding: 5px 0;
`;

export default function SubmenuBlock({submenu: {blurb, menus}, visible}) {
  return (
    <Wrapper
      columns={menus.length >= 2 ? menus.length + 1 : 3}
      display={visible ? 'grid' : 'none'}
    >
      <Blurb>{blurb}</Blurb>
      {menus.map(list => (
        <SubmenuList>
          <ul>
            <Header>{list.header}</Header>
            {list.items.map(item => (
              <li>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </SubmenuList>
      ))}
    </Wrapper>
  );
}
