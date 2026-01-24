import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { useOrganization } from './organization-context'

export const DetailPage: React.FC = () => {
  const { id } = useParams()
  const { organization } = useOrganization()

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Hello from Detail page
      </Typography>
      <Typography variant="h6">User Id: {id}</Typography>
      <Typography variant="body1">Organization: {organization}</Typography>
      <Button component={Link} to="/list" variant="outlined" sx={{ mt: 2 }}>
        Back to list page
      </Button>
    </Box>
  )
}
