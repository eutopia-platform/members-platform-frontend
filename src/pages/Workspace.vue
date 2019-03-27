<template>
  <div class="workspace">
    <MenuSidebar></MenuSidebar>
    <Initiative></Initiative>
  </div>
</template>

<script>
import Header from "../components/atomic/Header.vue";
import MenuSidebar from "./workspace/Sidebar.vue";
import Initiative from "./workspace/Initiative.vue";

export default {
  name: "Workspace",
  components: {
    Header,
    MenuSidebar,
    Initiative
  },
  mounted: function() {
    console.log(document.cookie);
  }
};
</script>

<style lang="scss" scoped>
.workspace {
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
