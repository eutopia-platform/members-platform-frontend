<template>
  <div class="workspace">
    <MenuSidebar></MenuSidebar>
    <Initiative></Initiative>
    <Overlay v-if="showOverlay"></Overlay>
  </div>
</template>

<script>
import Header from "../components/atomic/Header.vue";
import MenuSidebar from "./workspace/Sidebar.vue";
import Initiative from "./workspace/Initiative.vue";
import Overlay from "./workspace/Overlay";

export default {
  name: "Workspace",
  components: {
    Header,
    MenuSidebar,
    Initiative,
    Overlay
  },
  data: function() {
    return {
      showOverlay: !(this.$route.query.withoutOverlay === null)
    };
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
