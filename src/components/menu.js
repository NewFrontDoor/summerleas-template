import React, {useState} from 'react';
import {ThemeProvider} from 'emotion-theming';
import styled from '@emotion/styled';
import SubmenuBlock from './submenu-block';

const theme = {
  colors: {
    highlight: '#c2b49a'
  }
};

const List = styled('ul')`
  margin: 0;
  list-style: none;
  display: ${props => props.isVisible};
  li {
    padding: 16px 20px;
    font-weight: bold;
    a {
      color: #777;
    }
  }
  @media (min-width: 770px) {
    display: flex;
  }
`;

const Caret = styled('span')`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border-top: 4px solid #000;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  margin-left: 6px;
  content: '';
  cursor: pointer;
`;

export default function Menu({items, isVisible}) {
  const [openMenu, updateOpenMenu] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <List isVisible={isVisible ? 'block' : 'none'}>
        {items.map(item => {
          const {title, submenu, slug, name} = item;

          if (submenu) {
            return (
              <li>
                <a
                  className="dropdown-toggle"
                  title={title}
                  style={{
                    cursor: 'pointer'
                  }}
                  onClick={() =>
                    updateOpenMenu(openMenu === title ? null : title)
                  }
                >
                  {title}
                  <Caret />
                </a>
                <SubmenuBlock submenu={submenu} visible={openMenu === title} />
              </li>
            );
          }

          return (
            <li>
              <a href={slug}>{name}</a>
            </li>
          );
        })}
      </List>
    </ThemeProvider>
  );
}
