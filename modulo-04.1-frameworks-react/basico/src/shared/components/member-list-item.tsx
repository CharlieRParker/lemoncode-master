import React from 'react'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
} from '@mui/material'

interface MemberEntity {
  id: string
  login: string
  avatar_url: string
}

interface MemberListItemProps {
  member: MemberEntity
}

export const MemberListItem: React.FC<MemberListItemProps> = ({ member }) => {
  return (
    <ListItem key={member.id}>
      <ListItemAvatar>
        <Avatar src={member.avatar_url} />
      </ListItemAvatar>
      <ListItemText primary={member.login} secondary={`ID: ${member.id}`} />
      <Button
        component={Link}
        to={`/detail/${member.login}`}
        variant="outlined"
      >
        View Details
      </Button>
    </ListItem>
  )
}
