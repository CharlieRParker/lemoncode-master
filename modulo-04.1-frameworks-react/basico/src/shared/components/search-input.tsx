import React from 'react'
import { TextField, Box } from '@mui/material'

interface SearchInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  fullWidth?: boolean
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  value,
  onChange,
  fullWidth = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        size="small"
        fullWidth={fullWidth}
      />
    </Box>
  )
}
