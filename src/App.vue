<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.fetchProjects();
    this.fetchUsers();
  },
  methods: {
    ...mapActions("projects", ["fetchProjects"]),
    ...mapActions("participants", ["fetchUsers"]),
  },
};
</script>

<style>
html,
body {
  height: 100vh;
}
body {
  display: flex;
  flex-direction: column;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex: 1 0 auto;
}
</style>
