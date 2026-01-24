import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material'

interface Character {
  id: number
  name: string
  image: string
  status: string
  species: string
  gender: string
  origin: { name: string }
  location: { name: string }
}

export const RickAndMortyDetailPage: React.FC = () => {
  const { id } = useParams()
  const [character, setCharacter] = React.useState<Character | null>(null)

  React.useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data))
    }
  }, [id])

  if (!character) return <Typography>Loading...</Typography>

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        {character.name}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="h6">Details</Typography>
          <Typography>Status: {character.status}</Typography>
          <Typography>Species: {character.species}</Typography>
          <Typography>Gender: {character.gender}</Typography>
          <Typography>Origin: {character.origin.name}</Typography>
          <Typography>Location: {character.location.name}</Typography>
        </CardContent>
      </Card>
      <Button
        component={Link}
        to="/rickandmorty"
        variant="outlined"
        sx={{ mt: 2 }}
      >
        Back to Characters
      </Button>
    </Box>
  )
}
