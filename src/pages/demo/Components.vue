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
    <Button text>Button Text</Button>
    <Button text color="primary">Button Text</Button>
    <Button text color="secondary">Button Text</Button>
    <Break></Break>
    <Button outlined>Button Outlined</Button>
    <Button outlined color="primary">Button Outlined</Button>
    <Button outlined color="secondary">Button Outlined</Button>
    <Break></Break>
    <Button raised>Button Raised</Button>
    <Button raised color="primary">Button Raised</Button>
    <Button raised color="secondary">Button Raised</Button>
    <Break></Break>
    <Button unelevated>Button Unelevated</Button>
    <Button unelevated color="primary">Button Unelevated</Button>
    <Button unelevated color="secondary">Button Unelevated</Button>
    <Break></Break>
    <Input />
    <Input value="with default" />
    <ActionInput></ActionInput>
    <ActionInput label="with label"></ActionInput>
    <ActionInput label="with label" default-value="with default"></ActionInput>
    <LabeledInput label="label"></LabeledInput>
    <LabeledInput label="label" default-value="with default"></LabeledInput>
    <EmailSignup></EmailSignup>
    <Icon name="close" small></Icon>
    <Icon name="close"></Icon>
    <Icon name="close" big></Icon>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import ActionInput from '~/components/molecular/ActionInput'
import LabeledInput from '~/components/molecular/LabeledInput'
import EmailSignup from '~/components/molecular/EmailSignup'

export default new Component({
  name: 'Components',
  components: {
    ActionInput,
    LabeledInput,
    EmailSignup,
  },
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
