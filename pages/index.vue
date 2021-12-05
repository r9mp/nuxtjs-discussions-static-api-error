<template>
  <div>
    <div v-for="beer in beers" :key="beer.id">{{ beer.name }}</div>
    <div class="mt-12">
      {{ beer }}
    </div>
    <br /><br />
    <button @click="loadBeer">Load Beer</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Item {
  id: string
  name: number
}

export default Vue.extend({
  async asyncData({ $axios }): Promise<{beers: [Item]}> {
    const result: any = await $axios.$get('https://api.nuxtjs.dev/beers')

    console.log('AsyncData has been executed')

    return {
      beers: result.map((beer: any) => ({
        id: beer.product_id,
        name: beer.name,
      }))
    }
  },
  data() {
    return {
      beer: {}
    }
  },
  async fetch(): Promise<void> {
    console.log('Fetch is being executed')

    const result: any = await this.$axios.$get(`https://api.nuxtjs.dev/beers/${this.$store.state.beerSlug}`)

    console.log('Fetch has been executed')

    this.beer = {
      id: result.slug,
      name: result.name,
    }
  },
  fetchOnServer: true,
  methods: {
    loadBeer() {
      this.$store.commit('setBeerSlug', 'black-label')
      this.$fetch()
    },
  },
})
</script>
