<template>
  <div>
    <div id="error">
      <div class="error-status">{{ error.statusCode }}</div>
      <div class="error-message">{{ error.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout',
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

#error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: $base-text-white;
  .error-status {
    font-size: 48px;
  }
  .error-message {
    font-size: 18px;
  }
}
</style>
