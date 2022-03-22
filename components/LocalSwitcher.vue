<template>
  <div class="locale-switcher">
    <div class="select" @mouseleave="handlerVisibleOptions">
      <div class="select-header" @mouseenter="handlerVisibleOptions">
        <div class="select-title">{{ $t('main.selectLang') }}</div>
        <img
          class="select-img"
          src="../assets/images/Russia.png"
          alt="Russia"
          v-if="selectedLocale === 2"
        />
        <img
          class="select-img"
          src="../assets/images/USA.png"
          alt="USA"
          v-if="selectedLocale === 1"
        />
      </div>
      <div class="options" v-if="isVisibleOptions">
        <p @click="switchLang(locales[0])">
          <nuxt-link class="options-link" :to="switchLocalePath('en')">
            English
          </nuxt-link>
        </p>
        <p @click="switchLang(locales[1])">
          <nuxt-link class="options-link" :to="switchLocalePath('ru')">
            Русский
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LocalSwitcher',
  components: {},
  data() {
    return {
      isVisibleOptions: false,
      locales: [
        { name: 'English', lang: 'en', value: 1 },
        { name: 'Русский', lang: 'ru', value: 2 },
      ],
    }
  },
  computed: {
    ...mapGetters({
      selectedLocale: 'localLang/getLang',
    }),
  },
  methods: {
    ...mapActions({
      changeSelectLang: 'localLang/changeSelectLocale',
    }),
    handlerVisibleOptions() {
      this.isVisibleOptions = !this.isVisibleOptions
    },
    switchLang(locales) {
      if (this.$i18n.locale !== locales.lang) {
        this.$i18n.locale = locales.lang
      }
      this.isVisibleOptions = false
      this.changeSelectLang(locales.value)
    },
  },
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

.select {
  width: 200px;
  position: relative;
  &-title {
    margin: 0;
    text-align: center;
    color: $base-text-white;
    &:hover {
      cursor: pointer;
    }
  }
  &-header {
    display: flex;
    border-bottom: solid 1px $base-app-background-gray-light;
    justify-content: center;
    align-items: center;
  }
  &-img {
    width: 20px;
    height: 10px;
    margin: 0;
    padding: 3px 0 0 10px;
  }
  p:hover {
    cursor: pointer;
  }
  .options {
    position: absolute;
    width: 100%;
    background-color: $base-input-color;
    text-align: center;
    border-radius: 5px;
    &-link {
      text-decoration: none;
      color: $base-text-white;
      &:hover {
        color: $base-blue-color;
        cursor: pointer;
      }
    }
  }
}
</style>
