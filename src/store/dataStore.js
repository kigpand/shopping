import create from 'zustand';

const useDataStore = create(set => ({
    searchList: [],
    loading: false,
    contentData: null,
    changeSearchList: (list) => set({ searchList: list }),
    changeLoading: (state) => set({ loading: state }),
    changeContentData: (item) => set({ contentData: item })
}));

export default useDataStore;