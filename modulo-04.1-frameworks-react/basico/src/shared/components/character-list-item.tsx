import React from 'react'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from '@mui/material'

interface Character {
  id: number
  name: string
  image: string
  status: string
  species: string
}

interface CharacterListItemProps {
  character: Character
}

export const CharacterListItem: React.FC<CharacterListItemProps> = ({
  character,
}) => {
  return (
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
  )
}
