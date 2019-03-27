<template>
  <div>
    <IniMenuItem name="Dashboard"></IniMenuItem>
    <IniMenuItem name="Key Results"></IniMenuItem>
    <IniMenuItem name="Current OKRs"></IniMenuItem>
  </div>
</template>

<script>
import IniMenuItem from "./IniMenuItem.vue";

export default {
  name: "IniList",
  components: {
    IniMenuItem
  }
};
</script>
