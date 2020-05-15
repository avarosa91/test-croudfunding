<template>
  <div id="home-page">
    <div class="home-page-container">
      <div class="main-image"><span>Краудфандинговая платформа</span></div>
      <div class="content">
        <div class="projects-block">
          <div class="title">Популярные проекты</div>
          <ProjectCard :currentProject="currentProject || toDefault" />
          <div class="projects-list">
            <div
              class="project-item"
              v-for="(project, key) in projects"
              :key="key"
              @click="toChooseProject($event, project)"
            >
              <Projects :project="project" />
            </div>
          </div>
        </div>
        <div class="mentors-block">
          <div class="title">Наставники</div>
          <div class="mentors-list">
            <div class="mentor-item" v-for="(user, key) in users" :key="key">
              <template v-if="user.position === 'Наставник'">
                <Mentors :user="user" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "../components/Projects";
import ProjectCard from "../components/ProjectCard";
import Mentors from "../components/Mentors";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Projects,
    ProjectCard,
    Mentors,
  },
  data: () => ({
    currentProject: null,
  }),
  computed: {
    ...mapGetters("projects", ["projects"]),
    ...mapGetters("participants", ["users"]),
    toDefault() {
      return this.projects[0];
    },
  },
  methods: {
    toChooseProject(e, project) {
      this.currentProject = project;
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
#home-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-page-container {
    flex: 1 0 auto;

    .main-image {
      width: 100%;
      height: 200px;
      background: url("https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-blue-geometric-business-minimalistic-business-card-background-image_237858.jpg");
      display: flex;
      background-size: cover;
      background-position: center;

      span {
        align-self: center;
        margin: 0 auto;
        font-size: 30px;
        letter-spacing: 1px;
      }
    }

    .content {
      margin: 30px;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 22px;
        margin: 30px;
      }

      .projects-list {
        display: flex;
        flex-wrap: wrap;

        .project-item {
          margin: 30px auto;
          cursor: pointer;
        }
      }

      .mentors-list {
        display: flex;
        flex-wrap: wrap;

        .mentor-item {
          width: 20%;
          margin: 10px 20px;
        }
      }
    }
  }
}
</style>
