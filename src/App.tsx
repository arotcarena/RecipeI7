import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { appRoutes } from './config/appRoutes'
import { AppRoute } from './types/appTypes'
import { Header } from './components/Header'
import { GlobalStoreProvider } from './context/GlobalStoreProvider'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <GlobalStoreProvider>
        <BrowserRouter basename="/">
        <Header />
          <Routes>
            {
              appRoutes.map((route: AppRoute, index: number) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                />
              ))
            }
          </Routes>
        </BrowserRouter>
      </GlobalStoreProvider>
    </Provider>
  )
}

export default App;
