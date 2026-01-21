import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

export const DetailPage: React.FC = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const org = searchParams.get('org') || 'lemoncode'

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Hello from Detail page
      </Typography>
      <Typography variant="h6">User Id: {id}</Typography>
      <Typography variant="body1">Organization: {org}</Typography>
      <Button
        component={Link}
        to={`/list?org=${org}`}
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Back to list page
      </Button>
    </Box>
  )
}
