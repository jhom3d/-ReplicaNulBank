import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import {StatusBar} from 'react-native';

const App = () => (
  <>
    <StatusBar barStule="light-content" backgroundColor="#353535" />
    <Routes />
  </>
);

export default App;
