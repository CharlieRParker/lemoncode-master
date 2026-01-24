import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface PaginationControlsProps {
  page: number
  onPrev: () => void
  onNext: () => void
  disabledPrev?: boolean
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  onPrev,
  onNext,
  disabledPrev = false,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <IconButton onClick={onPrev} disabled={disabledPrev}>
        <ChevronLeft />
      </IconButton>
      <Typography sx={{ mx: 2 }}>Page {page}</Typography>
      <IconButton onClick={onNext}>
        <ChevronRight />
      </IconButton>
    </Box>
  )
}
