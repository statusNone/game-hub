import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  selectGenreId: (genreId: number) => void; // Added selectGenreId property with number type
  selectPlatformId: (platformId: number) => void; // Added selectPlatformId property with number type
  selectSortOrder: (sortOrder: string) => void; // Added selectSortOrder property with string type
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  selectGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })), // Added number type for genreId parameter
  selectPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })), // Added number type for platformId parameter
  selectSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })), // Added string type for sortOrder parameter
}));

export default useGameQueryStore;
