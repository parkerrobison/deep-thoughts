import React from 'react';

// to integrate Apollo into the front end add these imports
// this will provide data to all of the other components.
import { ApolloProvider } from '@apollo/react-hooks';
// this gets that data when we're ready to use it.
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// this establishes a new connection witrh the GraphQL server using Apollo.
const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
