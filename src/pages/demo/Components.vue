<template>
  <div :class="getClass">
    <Header s1>Header (s1)</Header>
    <Header s2>Header (s2)</Header>
    <Header s3>Header (s3)</Header>
    <Header s4>Header (s4)</Header>
    <Header s5>Header (s5)</Header>
    <Paragraph>Paragraph</Paragraph>
    <Small>Small</Small>
    <Big>Big</Big>
    <Big extra>Big (extra)</Big>
    <Button>Button</Button>
    <Button secondary>Button (secondary)</Button>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'

export default new Component({
  name: 'Components',
})
</script>

<style lang="scss" scoped>
div:first-child {
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: auto;
  background: white;
}
</style>
