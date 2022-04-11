import { createGlobalStyle } from 'styled-components';

const themes = {
  light: {
    body: '#FFF',
    background: 'white',
    text: '#363537',
    borderColor: '#363537',
    toolTipBorderColor: '#363537',
  },
  dark: {
    body: '#171717',
    background: 'rgb(0, 30, 60)',
    text: '#FAFAFA',
    borderColor: '#FAFAFA',
    toolTipBorderColor: '#FAFAFA',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    --wrapper-width: 90%;
    --logo-font-size: 100px;
    --font-size: 16px;
    --button-size:32px;
    --field-responsive-width: max(32%,220px);
    --card-width: 70%;
    --modal-text-color: #363537;
  }

  a{
    color: ${({ theme }) => themes[theme].text} ;
    
    &:hover {
        text-decoration: none;
    }
  }

  body {
    background: ${({ theme }) => themes[theme].body};
    color: ${({ theme }) => themes[theme].text};
    border-color: ${({ theme }) => themes[theme].borderColor} !important;
  }

  span::after{
    border-color: transparent transparent ${({ theme }) =>
      themes[theme].toolTipBorderColor} transparent;
  }
`;

export default GlobalStyle;