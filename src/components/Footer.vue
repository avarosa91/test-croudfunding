<template>
  <div class="footer">
    <ul>
      <li>Проекты</li>
      <li>Пользователи</li>
      <li>Контакты</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  border-top: 2px solid #2b8aec;
  flex-shrink: 0;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0 auto;
    padding: 60px 0;
    width: 50%;
    justify-content: space-between;
  }
}
</style>
