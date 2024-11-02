import { SearchReducer, initialState, SearchState } from './search.reducer';
import { loadsearchSuccess, loadSearchFailure } from './search.action';
import { Search } from './search.model';

describe('SearchReducer', () => {
  it('should return the initial state when no action is provided', () => {
    const action = {} as any; // No action provided
    const result = SearchReducer(undefined, action);
    expect(result).toEqual(initialState);
  });

  it('should update the state with search results on loadsearchSuccess action', () => {
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

    const action = loadsearchSuccess({ search: searchResults });
    const result: SearchState = SearchReducer(initialState, action);

    expect(result.search).toEqual(searchResults);
    expect(result.error).toBeNull(); // Ensure no error is set
    expect(result.loading).toBeFalsy(); // Ensure loading is still false
  });

  it('should update the state with error message on loadSearchFailure action', () => {
    const errorMessage = 'An error occurred';

    const action = loadSearchFailure({ error: errorMessage });
    const result: SearchState = SearchReducer(initialState, action);

    expect(result.error).toEqual(errorMessage);
    expect(result.search).toEqual([]); // Ensure search is still empty
    expect(result.loading).toBeFalsy(); // Ensure loading is still false
  });
});
