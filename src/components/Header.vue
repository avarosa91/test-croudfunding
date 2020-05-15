<template>
  <div class="header">
    <div class="navigation">
      <router-link to="/"
        ><img class="logo" src="../assets/images/1.png" alt="logo"
      /></router-link>
      <span>Проекты</span>
      <span><router-link to="/users">Пользователи</router-link></span>
      <span class="sign-in"
        ><router-link to="/sign-up">Войти</router-link></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: white;

  .navigation {
    display: flex;

    a {
      align-self: center;
      .logo {
        width: 60px;
        height: 50px;
      }
    }

    span {
      margin: 20px;

      &.sign-in {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
