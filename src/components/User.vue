<template>
  <div class="user">
    <div class="user-image" :style="userImg"></div>
    <div class="user-description">
      <div class="user-name">{{ user.name }}</div>
      <div class="user-age">{{ user.age }} лет</div>
      <div class="user-region">{{ user.region }}</div>
      <div class="user-position">{{ user.position }}</div>
      <div class="user-about">{{ user.about }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object,
    },
  },
  computed: {
    userImg() {
      if (this.user.photoURL) {
        return {
          "background-image": `url(${this.user.photoURL})`,
        };
      }
      return {
        "background-image": `url(https://images.macrumors.com/t/XjzsIpBxeGphVqiWDqCzjDgY4Ck=/800x0/article-new/2019/04/guest-user-250x250.jpg)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  padding: 30px;
  display: flex;

  .user-image {
    width: 40%;
    height: 200px;
    background-size: cover;
  }

  .user-description {
    margin-left: 30px;
    font-size: 18px;
    padding: 10px;
  }
}
</style>
