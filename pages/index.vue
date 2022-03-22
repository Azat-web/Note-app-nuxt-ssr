<template>
  <div class="wrapper" id="app">
    <div class="container">
      <div class="header">
        <div class="header-image">
          <BaseAppImage :width="{ width: '70px' }" />
        </div>
        <div class="header-title">
          <h1 class="header-text">{{ title }}</h1>
        </div>
      </div>
      <div class="header-line"></div>
      <div class="search-box">
        <Search :placeholder="$t('main.search_by_name')" />
      </div>
      <div class="create-note">
        <!-- new note -->
        <h2 class="create-note-title">{{ $t('main.add_note') }}</h2>
        <div class="create-note-line"></div>
        <AddNote />
      </div>
      <Notes :posts="posts" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  middleware: 'checkAuth',
  data() {
    return {
      title: 'Notes App',
    }
  },
  computed: {
    ...mapGetters({
      getLang: 'localLang/getLang',
    }),
  },
  asyncData() {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=6/')
      .then((response) => {
        return {
          posts: response.data,
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  mounted() {
    if (this.getLang === 1) {
      this.$i18n.locale = 'en'
    } else {
      this.$i18n.locale = 'ru'
    }
  },
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

.header {
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  padding-top: 20px;
  &-image {
  }
  &-title {
    display: flex;
    align-items: flex-end;
    padding-top: 25px;
    margin-left: 10px;
  }
}
.header-line {
  border-bottom: 1px solid $base-app-background-gray-light;
  margin: 0 20px 30px 20px;
}
.header-text {
  text-align: center;
}
.create-note {
  max-width: 800px;
  margin: 20px;
  border: 2px solid $base-input-color;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
}
.create-note-title {
  text-align: center;
}
.create-note-line {
  border-bottom: 1px solid $base-input-color;
  margin: 0 0 20px 0;
}
.search-box {
  display: flex;
  justify-content: center;
}
</style>
