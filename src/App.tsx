import React, { Suspense } from 'react';

import HeaderComponent from './components/Header.component';
import IconBtn from './components/IconBtn.component';
import logo from './logo.svg';
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from './context/Theme.context';
import { importLazy } from './hooks/importLazy';
import Loader from './Loader';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailComponent from './components/Detail.component';


const GridComponent = importLazy(2000)("Grid");

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
          <BrowserRouter>
            <Suspense fallback={<Loader log={["Loading country data", "Fetching flags icons"]} delay={2000} />}>
              <Switch>
                <Route exact path="/">
                  <GridComponent />
                </Route>
                <Route exact={true} path="/country/:countryID">
                  <DetailComponent />
                </Route>
              </Switch>
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
