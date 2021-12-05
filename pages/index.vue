<template>
  <div>
    <div v-for="beer in beers" :key="beer.id">{{ beer.name }}</div>
    <div class="mt-12">
      <div v-for="mountain in mountains" :key="mountain.id"> {{ mountain.name }}</div>
    </div>
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
      mountains: []
    }
  },
  async fetch(): Promise<void> {
    const result: any = await this.$axios.$get('https://api.nuxtjs.dev/mountains')

    console.log('Fetch has been executed')

    this.mountains = result.map((beer: any) => ({
      id: beer.slug,
      name: beer.title,
    }))
  },
})
</script>
