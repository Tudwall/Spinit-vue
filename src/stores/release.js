import { defineStore } from 'pinia'

export const useReleaseStore = defineStore('release', {
  state: () => ({ release: {} }),

  getters: {
    getRelease(state) {
      console.log(state.release)
      return state.release
    },
  },

  actions: {
    async fetchRelease() {
      try {
        const res = await fetch('https://api.discogs.com/releases/249504')
        if (!res) {
          throw new Error('Récupération impossible')
        }
        const result = await res.json()
        this.release = result
        console.log(result)
      } catch (err) {
        console.error(err)
      }
    },
  },
})
