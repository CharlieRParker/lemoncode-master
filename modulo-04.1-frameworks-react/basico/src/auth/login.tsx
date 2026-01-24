import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Box, Typography, Alert } from '@mui/material'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (username === 'admin' && password === 'test') {
      navigate('/list')
    } else {
      setError('User / password not valid, psst... admin / test')
    }
  }

  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Hello from login page
      </Typography>
      <form onSubmit={handleNavigation}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  )
}
