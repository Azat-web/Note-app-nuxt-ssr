<template>
  <div class="container">
    <section class="page centre">
      <section class="base">
        <BaseAppImage :width="{ width: '130px' }" />
        <section class="base-content">
          <article class="base-auth-text-container mt-20 mb-20">
            <span class="base-auth-text md-size mb-5">{{
              $t('auth.the_notes_app')
            }}</span>
            <span class="base-auth-text sm-size">{{
              $t('auth.write_notes_every_day')
            }}</span>
          </article>
          <form @submit.prevent="onSubmit" class="base-auth-form">
            <BaseAppInput
              :invalid="invalidForm"
              :parent-value="form.email"
              v-model="form.email"
              input-type="email"
              input-name="email"
              :placeholder="$t('auth.email')"
            />
            <BaseAppInput
              :invalid="invalidForm"
              :parent-value="form.password"
              v-model="form.password"
              input-type="password"
              input-name="password"
              :placeholder="$t('auth.password')"
            />
            <BaseAppButton
              :isLoading="isLoading"
              :disabled="isLoading"
              type="submit"
              :title="$t('auth.sign_in')"
            />
          </form>
          <article class="base-auth-text-container mt-20 mb-20">
            <div class="register-link">
              <span class="base-auth-text font-open-sans sm-size mr-5"
                >{{
                  $t('auth.click_on_the_link_to_get_your_login_details')
                }}
                -</span
              >
              <span
                class="base-link font-open-sans sm-size mr-5"
                @click="getLogin"
                >{{ $t('auth.receive') }}</span
              >
            </div>
            <span class="base-auth-text"> </span>
          </article>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  layout: "localSwitcher",
  data() {
    return {
      submitError: null,
      isLoading: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    invalidForm() {
      return this.submitError
    },
  },
  methods: {
    ...mapActions({
      isAuth: 'auth/changeIsAuth',
    }),
    inputEmail (val) {
     this.form.email = val;
    },
    getLogin() {
      this.form.email = 'front@mail.com'
      this.form.password = 'admin'
    },
    onSubmit() {
      this.submitError = null
      if (
        this.form.email === 'front@mail.com' &&
        this.form.password === 'admin'
      ) {
        this.isAuth(true)
        this.$router.push('/')
      } else {
        this.submitError = true
        this.$toast.error(this.$t('main.email_or_password_invalid'))
        this.isLoading = false

      }
    },
  },
}
</script>
<style lang="scss" scoped>

.base-auth-text-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .register-link {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: auto;
  }
}

.base-auth-text {
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  color: #f2f2f2;

  &.sm-size {
    font-size: 14px;
  }

  &.md-size {
    font-size: 24px;
  }
}

.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.inline-block {
  display: inline-block;
}
.overflow-hidden {
  overflow: hidden;
}
.rounded-full {
  border-radius: 999px;
}

</style>
