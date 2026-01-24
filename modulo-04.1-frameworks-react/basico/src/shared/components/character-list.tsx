import React from 'react'
import { List } from '@mui/material'
import { CharacterListItem } from './character-list-item'

interface Character {
  id: number
  name: string
  image: string
  status: string
  species: string
}

interface CharacterListProps {
  characters: Character[]
}

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <List>
      {characters.map((character) => (
        <CharacterListItem key={character.id} character={character} />
      ))}
    </List>
  )
}
