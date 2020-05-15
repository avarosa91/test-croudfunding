<template>
  <div class="user-page">
    <h1 class="title">Все участники</h1>
    <div class="users-list">
      <div class="users" v-for="(user, key) in users" :key="key">
        <User :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import User from "../components/User";

export default {
  name: "Users",
  components: {
    User,
  },
  computed: {
    ...mapGetters("participants", ["users"]),
  },
};
</script>

<style lang="scss" scoped>
.user-page {
  .title {
    text-align: center;
    margin: 50px;
    font-size: 30px;
  }

  .users-list {
    display: flex;
    flex-wrap: wrap;

    .users {
      width: 50%;
    }
  }
}
</style>
