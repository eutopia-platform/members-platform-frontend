<template>
  <component :is="getTag" :class="getClass" class="header">
    <slot/>
  </component>
</template>

<script>
const types = ['primary', 'secondary', 'tertiary', 'quaternary']
export default {
  name: 'Header',
  props: Object.fromEntries(types.map(t => [t, Boolean])),
  computed: {
    type: (self = this) => types.map(t => ([t, self[t]])).find(t => t[1])[0],
    getClass: (self = this) =>
      types.map(t => self[t]).includes(true)
        ? Object.fromEntries(types.map(t => [t, self[t]]))
        : {[types[0]]: true},
    getTag: (self = this) => 'h' + (types.indexOf(self.type) + 1)
  }
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";
@import "../sharedStyles/text.scss";

.header {
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  margin-top: .5em;
  margin-bottom: .5em;
  display: block;

  img {
    height: 1.5em;
    transform: translateY(.25em);
    margin-right: .5em;
    display: inline-block;
  }
}

.primary {
  font-size: $fs-header-1;
}

.secondary {
  font-size: $fs-header-2;
}

.tertiary {
  font-size: $fs-header-3;
}

.quaternary {
  font-size: $fs-header-4;
}
</style>
