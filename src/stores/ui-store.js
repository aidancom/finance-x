export const UIStore = (set) => ({
  modal: false,
  modal_type: 'common',
  error: false,
  setModal: (value) => set({ modal: value, modal_type: 'common' }),
  setModalType: (value) => set({modal_type: value})
})