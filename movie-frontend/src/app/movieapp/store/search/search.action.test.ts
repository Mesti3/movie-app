import { getSearch, loadsearchSuccess, loadSearchFailure, SearchActionTypes } from './search.action';
import { Search } from './search.model'; 

describe('Search Actions', () => {
  describe('getSearch', () => {
    it('should create an action for getting a search', () => {
      const query = 'test query';
      const page = 1;
      const action = getSearch({ query, page });

      expect(action.type).toBe(SearchActionTypes.getSearch);
      expect(action.query).toBe(query);
      expect(action.page).toBe(page);
    });
  });

  describe('loadsearchSuccess', () => {
    it('should create an action for search success', () => {
      const search: Search[] = [
        { 
          id: 1, 
          name: 'Test Search', 
          overview: 'Overview of the test search', 
          backdrop_path: 'test-backdrop.jpg', 
          adult: false, 
          original_language: 'en', 
          poster_path: 'test-poster.jpg', 
          original_name: 'Original Test Search'
        },
      ];
      const action = loadsearchSuccess({ search });

      expect(action.type).toBe(SearchActionTypes.SearchSuccess);
      expect(action.search).toEqual(search);
    });
  });

  describe('loadSearchFailure', () => {
    it('should create an action for search failure', () => {
      const error = 'An error occurred';
      const action = loadSearchFailure({ error });

      expect(action.type).toBe(SearchActionTypes.Error);
      expect(action.error).toBe(error);
    });
  });
});
