import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { LoginPage } from './login'
import { ListPage } from './list'
import { DetailPage } from './detail'
import { RickAndMortyPage } from './rickandmorty'
import { RickAndMortyDetailPage } from './rickandmorty-detail'
import { OrganizationProvider } from './organization-context'

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
