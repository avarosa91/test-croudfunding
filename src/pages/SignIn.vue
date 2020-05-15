<template>
  <div class="sign-in">
    <div class="container">
      <form>
        <h3>Войти</h3>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control form-control-lg"
            v-model="user.email"
          />
        </div>

        <div class="form-group">
          <label>Пароль</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="user.password"
          />
        </div>

        <button
          type="submit"
          class="btn btn-dark btn-lg btn-block"
          @click.prevent="userLogin"
        >
          Войти
        </button>

        <p class="forgot-password text-right mt-2 mb-4"></p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SignIn",
  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  computed: {
    ...mapState("login", ["regUsers"]),
  },
  methods: {
    userLogin() {
      console.log(this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 850px;
  height: calc(100vh - 260px);
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
