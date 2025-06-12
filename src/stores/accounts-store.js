import { v4 as uuid } from 'uuid';

export const accountsStore = (set, get) => ({
  accounts: [],
  addNewAccount: (data) => {
    const account = {id: uuid(), name: data.name, ammount: parseInt(data.amount)}
    const error = get().error
    const modal = get().modal
    get().accounts.some(acc => acc.name === account.name) ? set(() => ({ error: true })) : set(state => ({ accounts: [...state.accounts, account], modal: false }))
  }
})