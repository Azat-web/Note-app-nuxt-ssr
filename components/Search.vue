<template>
  <div class="search">
    <BaseAppInput @input="input" :placeholder="placeholder" inputType="text" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  props: {
    placeholder: {
      type: String,
    },
  },
  data() {
    return {
      value: '',
      search: '',
    }
  },
  methods: {
    ...mapActions({
      searchPost: 'posts/searchPost',
    }),
    input(val) {
      this.searchPost(val)
    },
  },
  computed: {
    ...mapGetters({
      posts: 'posts/getPosts',
    }),
  },
}
</script>

<style>
.search {
  min-width: 320px;
}
</style>
