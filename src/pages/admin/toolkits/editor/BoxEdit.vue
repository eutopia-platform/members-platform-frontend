<template>
  <div :class="getClass">
    <div class="left">
      <div class="title">
        <Paragraph>Box {{ index }}</Paragraph>
        <Button outlined @click="$emit('delete', index)">delete</Button>
      </div>
      <div class="pos">
        <LabeledInput
          v-model="value.x"
          label="x"
          :default-value="box.x.toString()"
        ></LabeledInput>
        <LabeledInput
          v-model="value.y"
          label="y"
          :default-value="box.y.toString()"
        ></LabeledInput>
      </div>
      <div class="scale">
        <LabeledInput
          v-model="value.w"
          label="width"
          :default-value="box.w.toString()"
        ></LabeledInput>
        <LabeledInput
          v-model="value.h"
          label="height"
          :default-value="box.h.toString()"
        ></LabeledInput>
      </div>
    </div>
    <Textedit
      v-model="value.content"
      class="content"
      :default-text="box.content"
    ></Textedit>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import LabeledInput from '~/components/molecular/LabeledInput'
import Textedit from '~/components/molecular/Textedit'

export default new Component({
  name: 'BoxEdit',
  props: {
    box: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    LabeledInput,
    Textedit,
  },
  data() {
    return {
      value: Object.assign({}, this.box),
    }
  },
  watch: {
    value: {
      handler() {
        for (let p of ['x', 'y', 'w', 'h'])
          this.value[p] = parseFloat(this.value[p]) || 0
        this.$emit('input', this.value)
      },
      deep: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.box-edit {
  border-bottom: 1px solid black;
  display: flex;

  .left {
    display: flex;
    flex-direction: column;

    .pos,
    .scale,
    .title {
      display: flex;
      justify-content: space-between;
    }

    .labeled-input {
      width: 5rem;
    }
  }

  .content {
    margin: 0.5;
    margin-left: 2rem;
  }
}
</style>
