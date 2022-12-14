import create from 'zustand';

const useDataStore = create(set => ({
    searchList: [],
    changeSearchList: (list) => set({ searchList: list }),
}));

export default useDataStore;