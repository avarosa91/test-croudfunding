<template>
  <div class="project-card">
    <div class="project-image" :style="projectImg"></div>
    <div class="project-description">
      <div class="project-title">
        {{ currentProject.title }}
      </div>
      <div class="project-owner">Автор {{ currentProject.head }}</div>
      <div class="project-info">
        {{ currentProject.info }}
      </div>
      <a href="#" class="project-link">Подробнее</a>
      <div class="project-funds-amount">
        Собрано {{ currentProject.fundsAmount }} руб.
      </div>
      <div class="project-progressbar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    currentProject: {
      type: Object,
      default: () => [{}],
    },
  },
  computed: {
    projectImg() {
      return {
        "background-image": `url(${this.currentProject.imageUrl})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;

  .project-image {
    width: 50%;
    height: 100%;
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

    .project-info {
      margin-top: 30px;
    }

    .project-funds-amount {
      margin-top: 30px;
      color: gray;
    }

    .project-link {
      margin-top: 30px;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    .project-progressbar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #dadada;
      height: 10px;

      &:before {
        content: "";
        display: block;
        width: 80%;
        height: 100%;
        background-color: indianred;
      }
    }
  }
}
</style>
