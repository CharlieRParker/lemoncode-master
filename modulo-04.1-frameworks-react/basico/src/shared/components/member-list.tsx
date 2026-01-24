import React from 'react'
import { List } from '@mui/material'
import { MemberListItem } from './member-list-item'

interface MemberEntity {
  id: string
  login: string
  avatar_url: string
}

interface MemberListProps {
  members: MemberEntity[]
}

export const MemberList: React.FC<MemberListProps> = ({ members }) => {
  return (
    <List>
      {members.map((member) => (
        <MemberListItem key={member.id} member={member} />
      ))}
    </List>
  )
}
