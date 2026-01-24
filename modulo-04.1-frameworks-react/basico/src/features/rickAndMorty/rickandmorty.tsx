import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box, Typography } from '@mui/material'
import {
  SearchInput,
  CharacterList,
  PaginationControls,
} from '../../shared/components'
import { getCharacters } from './api/rickandmorty-api'

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
  const [characters, setCharacters] = React.useState<Character[]>([])
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)

  const debouncedSearch = useDebounce(search, 500)

  React.useEffect(() => {
    setPage(1)
  }, [debouncedSearch])

  React.useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersData = await getCharacters(page, debouncedSearch)
        setCharacters(charactersData)
      } catch (error) {
        console.error('Error fetching members:', error)
        setCharacters([])
      }
    }
    fetchCharacters()
  }, [page, debouncedSearch])

  const handleSearchChange = (value: string) => {
    setSearch(value)
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
      <SearchInput
        label="Search characters"
        value={search}
        onChange={handleSearchChange}
        fullWidth={true}
      />
      <CharacterList characters={characters} />
      <PaginationControls
        page={page}
        onPrev={handlePrev}
        onNext={handleNext}
        disabledPrev={page === 1}
      />
    </Box>
  )
}
