<template>
  <div class="ini-menuitem">
    <Icon v-bind:src="img_path" height="16px"></Icon>
    <Paragraph>
      {{name}}
    </Paragraph>
  </div>
</template>

<script>
import Icon from '../../components/atomic/Icon.vue'
import Paragraph from '../../components/atomic/Paragraph.vue'

export default {
  name: "IniMenuItem",
  props: {
    name: String
  },
  components: {
    Icon,
    Paragraph
  },
  computed: {
    img_path: () => require("../../../data/img/ui/initiative.svg")
  }
}
</script>

<style lang="scss" scoped>
@import "../../components/sharedStyles/colors.scss";

.ini-menuitem {
  display: flex;
  flex-direction: row;
  height: 2rem;
  align-items: center;

  * {
    &:nth-child(2n) {
      margin-left: 1rem;
    }
  }

  &:hover {
    cursor: pointer;
    .paragraph {
      color: $c-accent;
    }
  }
}
</style>
