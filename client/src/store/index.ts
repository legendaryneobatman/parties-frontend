import {defineStore} from "pinia";
import {menuItems} from "@/settings/menuItems";

export const useAppStore = defineStore('app', {
  state: () => ({
    menuItems: menuItems
  })
})
