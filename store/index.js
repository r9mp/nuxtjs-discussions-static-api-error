export const state = () => ({
  beerSlug: null,
})

export const actions = {}

export const mutations = {
  setBeerSlug(state, beerSlug) {
    state.beerSlug = beerSlug
  }
}
