import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { appRoutes } from './config/appRoutes'
import { AppRoute } from './types/appTypes'
import { Header } from './components/Header'
import { GlobalStoreProvider } from './context/GlobalStoreProvider'

function App() {

  return (
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
  )
}

export default App;
