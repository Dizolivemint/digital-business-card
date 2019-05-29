/**
 * common/App.js
 * 
 * What it Does:
 *   This is our root React Element. The rest of our app is initialized here.
 *   In this file we set up the react context and styled-components theme
 *   to use our koji customization properties. Now anywhere in our react
 *   or styled components we can use these customizations. This file also
 *   sets up wrapConsole.js, which allows us to see console.log()'s in the
 *   koji preview window. Lastly this file sets up an event listener on 
 *   postMessage to see if the editor has sent us any new customization
 *   updates.
 * 
 * Things to Change:
 *   Any element or library that should be globally available accross all
 *   pages should be put here. Also this is a great place to put a router
 *   if you want multiple pages in your application.
 */

import React from 'react';
import styled from 'styled-components';
import Router from './Router';
import Koji from 'koji-tools';

import Font from 'common/helpers/Font'

// function getFontFamily(ff) {
//     const start = ff.indexOf('family=');
//     if(start === -1) return 'sans-serif';
//     let end = ff.indexOf('&', start);
//     if(end === -1) end = undefined;
//     return ff.slice(start + 7, end);
// }

const Container = styled.div`
    padding: 0;
    margin: 0;
    font-family: '${() => Font.getFontFamily(Koji.config.layout.fontFamily)}', sans-serif;
`;

class App extends React.PureComponent {
  componentWillMount() {
    Koji.pageLoad();
  }

  render() {
    return (
      <Container>
        <Router />
      </Container>
    );
  }
}

export default App;
