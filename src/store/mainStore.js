import create from 'zustand';

const useMainStore = create(set => ({
    id: null,
    nickName: null,
    changeId: (item) => set({ id: item }),
    changeNickName: (item) => set({ nickName: item})
}));

export default useMainStore;