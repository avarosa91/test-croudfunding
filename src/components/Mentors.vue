<template>
  <div class="mentor">
    <div class="mentor-image" :style="mentorImg"></div>
    <div class="mentor-title">{{ user.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Mentors",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    mentorImg() {
      return {
        "background-image": `url(${this.user.photoURL})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .mentor {
    /* padding: 30px; */

    .mentor-image {
      width: 100%;
      min-width: 200px;
      height: 200px;
      background-size: cover;
      border-radius: 4px;
    }

    .mentor-title {
      padding: 10px;
      text-align: center;
    }
  }
</style>
