import { selectAllSearch, selectSearchsError, selectSearchState } from './search.selector';
import { SearchState } from './search.reducer';
import { Search } from './search.model';

describe('Search Selectors', () => {
  const initialState: SearchState = {
    search: [],
    error: null,
    loading: false,
    currentPage: 1,
  };

  describe('selectSearchState', () => {
    it('should select the search state', () => {
      const result = selectSearchState.projector(initialState);
      expect(result).toEqual(initialState);
    });
  });

  describe('selectAllSearch', () => {
    it('should return the search array from state', () => {
      const searchResults: Search[] = [
        {
            id: 1, name: 'Test Search 1',
            adult: false,
            backdrop_path: '',
            original_language: '',
            original_name: '',
            overview: '',
            poster_path: ''
        },
        {
            id: 2, name: 'Test Search 2',
            adult: false,
            backdrop_path: '',
            original_language: '',
            original_name: '',
            overview: '',
            poster_path: ''
        },
      ];
      const state: SearchState = {
        ...initialState,
        search: searchResults,
      };

      const result = selectAllSearch.projector(state);
      expect(result).toEqual(searchResults);
    });

    it('should return an empty array when search array is empty', () => {
      const state: SearchState = {
        ...initialState,
        search: [],
      };

      const result = selectAllSearch.projector(state);
      expect(result).toEqual([]);
    });
  });

  describe('selectSearchsError', () => {
    it('should return the error from state', () => {
      const errorMessage = 'An error occurred';
      const state: SearchState = {
        ...initialState,
        error: errorMessage,
      };

      const result = selectSearchsError.projector(state);
      expect(result).toEqual(errorMessage);
    });

    it('should return null when there is no error', () => {
      const state: SearchState = {
        ...initialState,
        error: null,
      };

      const result = selectSearchsError.projector(state);
      expect(result).toBeNull();
    });
  });
});
