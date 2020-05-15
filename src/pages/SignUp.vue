<template>
  <div class="sign-in">
    <div class="container">
      <form class="was-validated">
        <h3>Регистрация</h3>

        <div class="form-group">
          <label>Имя</label>
          <input
            type="text"
            class="form-control form-control-lg"
            v-model="user.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Возраст</label>
          <input
            type="text"
            class="form-control form-control-lg"
            v-model="user.age"
            required
          />
        </div>

        <div class="form-group">
          <label>Регион</label>
          <input
            type="text"
            class="form-control form-control-lg"
            v-model="user.region"
            required
          />
        </div>

        <div class="form-group">
          <label>Должность</label>
          <select
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            v-model="user.position"
            required
          >
            <option value="Участник">Участник</option>
            <option value="Тренер">Тренер</option>
            <option value="Наставник">Наставник</option>
            <option value="Инвестор">Инвестор</option>
          </select>
        </div>

        <div class="form-group">
          <label>О себе</label>
          <input
            type="text"
            class="form-control form-control-lg"
            v-model="user.about"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control form-control-lg"
            v-model="user.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Пароль</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="user.password"
            required
          />
        </div>

        <button
          type="submit"
          class="btn btn-dark btn-lg btn-block"
          @click.prevent="onFormSubmit"
        >
          Зарегестрироваться
        </button>

        <p class="forgot-password text-right">
          Уже зарегестрированы?
          <router-link :to="{ name: 'sign-in' }">Войти</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SignUp",
  data: () => ({
    user: {
      name: "",
      email: "",
      password: "",
      age: "",
      region: "",
      about: "",
      position: "",
    },
  }),
  computed: {
    ...mapGetters("login", ["regUsers"]),
  },
  methods: {
    ...mapActions("login", ["saveUser", "addLoginedUsers"]),
    resetForm() {
      this.user.name = "";
      this.user.email = "";
      this.user.password = "";
      this.user.age = "";
      this.user.region = "";
      this.user.about = "";
      this.user.position = "";
    },
    onFormSubmit() {
      if (
        this.user.name &&
        this.user.email &&
        this.user.password &&
        this.user.age &&
        this.user.region &&
        this.user.about &&
        this.user.position
      ) {
        const formData = {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          age: this.user.age,
          region: this.user.region,
          about: this.user.about,
          position: this.user.position,
        };
        const loginInfo = {
          email: this.user.email,
          password: this.user.password,
        };
        this.saveUser(formData);
        this.addLoginedUsers(loginInfo);
        this.resetForm();
        this.$router.push({ path: "/" });
      } else return;
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
}
</style>
