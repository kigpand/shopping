import create from 'zustand';

const useDataStore = create(set => ({
    searchList: [],
    loading: false,
    changeSearchList: (list) => set({ searchList: list }),
    changeLoading: (state) => set({ loading: state })
}));

export default useDataStore;