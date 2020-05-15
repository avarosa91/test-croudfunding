<template>
  <div class="project">
    <div class="project-image" :style="projectImg"></div>
    <div class="project-description">
      <div class="project-title">{{ project.title }}</div>
      <div class="project-owner">Автор {{ project.head }}</div>
      <div class="project-progressbar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    projectImg() {
      return {
        "background-image": `url(${this.project.imageUrl})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  height: 300px;

  .project-image {
    width: 300px;
    height: 170px;
    background-size: cover;
  }

  .project-description {
    display: flex;
    flex-direction: column;
    margin: 15px 30px;

    .project-title {
      margin-bottom: 15px;
      font-size: 18px;
    }

    .project-owner {
      color: grey;
    }

    .project-progressbar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #dadada;
      height: 10px;

      &:before {
        content: '';
        display: block;
        width: 80%;
        height: 100%;
        background-color: indianred;
      }
    }
  }
}
</style>
