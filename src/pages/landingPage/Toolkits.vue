<template>
  <div class="toolkits">
    <Header class="selection-title" tertiary>
      Whatever the goal, our toolkits get you started
    </Header>
    <div class="selection">
      <Toolcard
        v-for="kit in kits"
        :key="kits.indexOf(kit)"
        :title="kit.name"
        :img="kit.icon"
      ></Toolcard>
    </div>
    <Showcase :kit="kits[0]"></Showcase>
  </div>
</template>

<script>
import Toolcard from './toolkits/Toolcard'
import Showcase from './toolkits/Showcase'
import Toolkit from './toolkits/toolkit'

export default {
  name: 'Toolkits',
  components: {
    Toolcard,
    Showcase,
  },
  data() {
    return {
      kits: [
        new Toolkit(
          'User Interview',
          'https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_1.svg',
          [
            'Validate your assumptions and learn about your user, the problems, desires, goals, and dreams they have. This toolkit gets you started in running user interviews that deliver actionable insights.',
            'It is perfect for product managers, UX research teams and startups when trying to build or test a new product or feature.',
            'Personalize this and other toolkits to guide your teams towards developing products so good, people tell their friends about it.',
          ]
        ),
        new Toolkit(
          'Empathy Map',
          'https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_2.svg',
          [
            'Collect the observations you make during the discovery stage of your product or feature development.',
            'The empathy helps you to answer questions like: What do my users hear, see, say & do, what is influencing them and what are the problems they face when trying to achieve their goal?',
            'Personalize this and other toolkits to guide your teams towards developing products so good, people tell their friends about it.',
          ]
        ),
        new Toolkit(
          'User Flow Design',
          'https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_3.svg',
          [
            'Time to design your user flow.',
            'User flows are the path taken by a user on a website or app to complete a task. It should take your user from their entry point through a set of steps towards a successful outcome and final action, such as purchasing a product.',
            'Personalize this and other toolkits to guide your teams towards developing products so good, people tell their friends about it.',
          ]
        ),
        new Toolkit(
          'Business Model Canvas',
          'https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_4.svg',
          [
            'Design your business model in a visual way.',
            'From your value proposition, the infrastructure, your customers to how you are planning to earn money, the business model canvas is a great strategic tool to develop new or document existing business models. It assists you with aligning your activities by illustrating potential trade-offs.',
            'Personalize this and other toolkits to guide your teams towards developing products so good, people tell their friends about it.',
          ]
        ),
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.toolkits {
  @include colorScheme('primary');
  width: 100vw;
  height: 400vh;
  background: linear-gradient(#6bc1ff, #5969f6);
  padding-top: 7rem;

  .selection-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .selection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    margin: auto;

    *:first-child {
      margin-left: 0;
    }

    *:last-child {
      margin-right: 0;
    }
  }
}
</style>
