<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        That was easy!<br/>Find your teams first initiative: {{info.milestone}}
      </Header>
      <Paragraph>
        A milestone brings together the key aspects of a successful initiative - your teammates, objectives, key results, toolkits and frameworks so you and your team achieve more, important goals.
      </Paragraph>
      <div class="input-wrap">
        <Button @click="onSubmit">
          Find your initiative in Cubed
        </Button>
      </div>
    </div>
    <template v-slot:dashboard>
      <div>
        <Paragraph class="email">{{info.emailShort}}</Paragraph>
        <Paragraph class="organization">{{info.organization}}</Paragraph>
        <Paragraph class="ini-title">{{info.milestone}}</Paragraph>
        <Paragraph class="ini-icon">{{info.milestone}}</Paragraph>
        <Paragraph class="member-title">Team members</Paragraph>
        <ul class="members">
          <li v-for="member in info.members">
            {{member.split('@')[0]}}
          </li>
        </ul>
      </div>
    </template>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: "ViewFinal",
  extends: ViewBase,
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/dashboard-3.svg")
  }
}
</script>
