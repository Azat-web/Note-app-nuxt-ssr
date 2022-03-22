<template>
  <div class="new-note">
    <form @submit.prevent="addNote">
      <BaseAppInput
        :invalid="invalidForm"
        @input="input"
        :placeholder="$t('main.name')"
        inputType="text"
      />
      <BaseTextArea @input="onInput" :placeholder="$t('main.description')" />
      <BaseAppButton :title="$t('main.add')" type="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddNote',
  data() {
    return {
      form: {
        note: {
          title: '',
          body: '',
        },
      },
      submitError: null,
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts/getPosts',
    }),
    invalidForm() {
      return this.submitError
    },
  },
  methods: {
    ...mapActions({
      changePosts: 'posts/changePosts',
    }),
    input(val) {
      this.form.note.title = val
    },
    onInput(val) {
      this.form.note.body = val
    },
    addNote(event) {
      this.submitError = null
      let { title, body } = this.form.note
      const newNotes = this.posts
      if (title === '') {
        this.submitError = true
        this.$toast.error(this.$t('main.this_is_a_required_field'))
        return false
      }
      newNotes.unshift({
        title: title,
        body: body,
        id: this.posts.length + 1,
      })
      this.changePosts(newNotes)
      this.$toast.success(this.$t('main.note_added'))
      this.form.note.title = ''
      this.form.note.body = ''
      event.target.reset()
    },
  },
}
</script>

<style lang="scss">
.invalid-feedback {
  color: red;
  font-size: 11px;
}
</style>
