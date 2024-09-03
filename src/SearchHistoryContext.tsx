import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export type SearchContextType = {
  recentSearches: string[];
  addSearch: (city: string) => void;
  deleteSearch: (city: string) => void;
};

const SearchHistoryContext = createContext<SearchContextType | null>(null);

export const SearchHistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
  });

  const addSearch = useCallback((city: string) => {
    setRecentSearches((recentSearches: string[]) => {
      if (recentSearches.includes(city)) return recentSearches;

      const updatedSearches = [city, ...recentSearches];

      if (updatedSearches.length > 5) {
        updatedSearches.pop();
      }

      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

      return updatedSearches;
    });
  }, []);

  const deleteSearch = useCallback((deleteCity: string) => {
    setRecentSearches((recentSearches: string[]) => {
      const updatedSearches = recentSearches.filter((search: string) => search !== deleteCity);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      return updatedSearches;
    });
  }, []);

  const value = useMemo(
    () => ({
      recentSearches,
      addSearch,
      deleteSearch
    }),
    [recentSearches, addSearch, deleteSearch]
  );

  return <SearchHistoryContext.Provider value={value}>{children}</SearchHistoryContext.Provider>;
};

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext);
  if (!context) {
    throw new Error('useSearchHistory must be used within a SearchHistoryProvider');
  }
  return context;
};
