import { Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SearchContextType, useSearchHistory } from '../SearchHistoryContext';
import { useCallback } from 'react';

export default function SearchHistoryButtons() {
  const navigate = useNavigate();
  const { recentSearches, deleteSearch } = useSearchHistory() as SearchContextType;

  const handleDelete = useCallback(
    (search: string) => {
      deleteSearch(search);
    },
    [deleteSearch]
  );

  return (
    <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
      {recentSearches.map((search: string) => {
        return (
          <Chip
            key={search}
            color="primary"
            label={search}
            onClick={() => navigate(`/${search.trim()}`)}
            onDelete={() => handleDelete(search)}
            sx={{ marginX: 1, marginY: { xs: 1, md: 0 } }}
          />
        );
      })}
    </Box>
  );
}
