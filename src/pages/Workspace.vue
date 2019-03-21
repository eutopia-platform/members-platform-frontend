<template>
  <div class="workspace">
    <MenuSidebar></MenuSidebar>
    <main>
      asdf
    </main>
  </div>
</template>

<script>
import Header from '../components/atomic/Header.vue'
import MenuSidebar from '../components/molecular/MenuSidebar.vue'

export default {
  name: "Workspace",
  components: {
    Header,
    MenuSidebar
  }
}
</script>

<style lang="scss" scoped>
.workspace {
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

main {
  height: 150vh;
  width: calc(100vw - 20rem);
  transform: translateX(20rem);
}
</style>
