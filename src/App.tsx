import React, { Suspense } from 'react';

import HeaderComponent from './components/Header.component';
import IconBtn from './components/IconBtn.component';
import logo from './logo.svg';
import {QueryClient, QueryClientProvider} from "react-query";
import DropdownComponent from './components/Dropdown.component';
import style from "./style/Component.module.scss";
import ThemeProvider from './context/Theme.context';
import CountryService from './service/country.service';

const GridComponent = React.lazy(() => import('./components/Grid.component'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

// queryClient.prefetchQuery('todos', () => CountryService.getFlags(), {cacheTime: 50000});

function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
      <HeaderComponent>
      Where in the world?
      </HeaderComponent>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading</div>}>
        <GridComponent />
        </Suspense>
      </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
