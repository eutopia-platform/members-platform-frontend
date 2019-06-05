<template>
  <textarea
    v-model="text"
    :class="getClass"
    @blur="$emit('blur')"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
import Molecular from '/components/sharedScripts/component'

export default new Molecular({
  name: 'Textedit',
  data: () => ({
    text: '',
  }),
})
</script>

<style lang="scss" scoped>
.textedit {
  display: block;
  width: 100%;
  height: calc(100% - 2 * var(--baseline));
  min-width: 10rem;
  min-height: 5rem;
  box-sizing: border-box;
  resize: none;
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
  padding: 0;

  font-size: 1rem;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
}
</style>
