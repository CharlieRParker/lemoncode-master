import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box, Typography } from '@mui/material'
import {
  SearchInput,
  MemberList,
  PaginationControls,
} from '../../shared/components'
import { getMembers, MemberEntity } from './api/github-api'
import { useOrganization } from '../../shared/context/organization-context'

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
    const fetchMembers = async () => {
      try {
        const membersData = await getMembers(organization, page, 10)
        setMembers(membersData)
      } catch (error) {
        console.error('Error fetching members:', error)
        setMembers([])
      }
    }
    fetchMembers()
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
        <SearchInput
          label="Organization"
          value={inputValue}
          onChange={setInputValue}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <MemberList members={members} />
      <PaginationControls
        page={page}
        onPrev={handlePrev}
        onNext={handleNext}
        disabledPrev={page === 1}
      />
    </Box>
  )
}
