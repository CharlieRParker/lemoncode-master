import React from 'react'
import { Link } from 'react-router-dom'
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useOrganization } from './organization-context'

interface MemberEntity {
  id: string
  login: string
  avatar_url: string
}

export const ListPage: React.FC = () => {
  const { organization, setOrganization } = useOrganization()
  const [members, setMembers] = React.useState<MemberEntity[]>([])
  const [inputValue, setInputValue] = React.useState('')
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    setInputValue(organization)
    setPage(1) // reset page when org changes
  }, [organization])

  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${organization}/members?page=${page}&per_page=10`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json))
  }, [organization, page])

  const handleSearch = () => {
    setOrganization(inputValue)
  }

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Hello from List page
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button
          component={Link}
          to="/rickandmorty"
          variant="contained"
          color="secondary"
        >
          Go to Rick and Morty
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          label="Organization"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <List>
        {members.map((member) => (
          <ListItem key={member.id}>
            <ListItemAvatar>
              <Avatar src={member.avatar_url} />
            </ListItemAvatar>
            <ListItemText
              primary={member.login}
              secondary={`ID: ${member.id}`}
            />
            <Button
              component={Link}
              to={`/detail/${member.login}`}
              variant="outlined"
            >
              View Details
            </Button>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton onClick={handlePrev} disabled={page === 1}>
          <ChevronLeft />
        </IconButton>
        <Typography sx={{ mx: 2 }}>Page {page}</Typography>
        <IconButton onClick={handleNext}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  )
}
