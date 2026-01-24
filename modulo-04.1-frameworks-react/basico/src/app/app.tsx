import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ListPage } from '../features/github/list'
import { DetailPage } from '../features/github/detail'
import { RickAndMortyPage } from '../features/rickAndMorty/rickandmorty'
import { RickAndMortyDetailPage } from '../features/rickAndMorty/rickandmorty-detail'
import { LoginPage } from '../auth/login'
import { OrganizationProvider } from '../shared/context/organization-context'

const theme = createTheme()

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrganizationProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/rickandmorty" element={<RickAndMortyPage />} />
            <Route
              path="/rickandmorty/detail/:id"
              element={<RickAndMortyDetailPage />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </OrganizationProvider>
    </ThemeProvider>
  )
}
