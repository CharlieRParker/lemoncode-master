import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface Character {
  id: number
  name: string
  image: string
  status: string
  species: string
}

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const RickAndMortyPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [characters, setCharacters] = React.useState<Character[]>([])
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)

  const debouncedSearch = useDebounce(search, 500)

  React.useEffect(() => {
    setPage(1)
  }, [debouncedSearch])

  React.useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`
    if (debouncedSearch) {
      url += `&name=${debouncedSearch}`
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results || [])
      })
      .catch(() => setCharacters([]))
  }, [page, debouncedSearch])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
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
        Rick and Morty Characters
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button
          component={Link}
          to="/list"
          variant="contained"
          color="secondary"
        >
          Back to GitHub List
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          label="Search characters"
          value={search}
          onChange={handleSearchChange}
          size="small"
          fullWidth
        />
      </Box>
      <List>
        {characters.map((character) => (
          <ListItem key={character.id}>
            <ListItemAvatar>
              <Avatar src={character.image} />
            </ListItemAvatar>
            <ListItemText
              primary={character.name}
              secondary={`${character.status} - ${character.species}`}
            />
            <Button
              component={Link}
              to={`/rickandmorty/detail/${character.id}`}
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
