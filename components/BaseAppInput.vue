<template>
  <div class="input-container">
    <span v-if="additionalName" class="additional-text">
      {{ additionalName }}
    </span>
    <input
      class="base-input"
      :class="{ invalid: invalid }"
      :type="inputType"
      :name="inputName"
      :placeholder="placeholder"
      @input="handleInput"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseAppInput',
  props: {
    inputType: {
      type: String,
      default: 'text',
      required: true,
    },
    inputName: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    parentValue: String,
    additionalName: String,
  },
  data() {
    return {
      value: '',
    }
  },
  watch: {
    parentValue(val) {
      this.value = val
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/_variables.scss';

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
  width: 100%;
  span {
    margin: 10px 0 5px 0;
  }
  .additional-text {
    font-size: 14px;
    color: white;
    font-family: 'Open Sans', sans-serif;
  }
}
.base-input {
  width: auto;
  height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid transparent;
  border-radius: 8px;
  background: $base-input-color;
  color: $base-text-white;
  outline-style: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
}
.invalid {
  border: 1px dashed red;
}
</style>
