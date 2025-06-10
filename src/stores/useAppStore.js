import { create } from "zustand"
import { accountsStore } from "./accounts-store"
import { transactionStore } from "./transactions-store"
import { UIStore } from "./ui-store"

export const useAppStore = create((set, get) => ({
 ...accountsStore(set, get),
 ...transactionStore(set, get),
 ...UIStore(set)
}))