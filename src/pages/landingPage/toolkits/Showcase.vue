<template>
  <div :class="getClass">
    <div class="title">
      <Header s3>{{ kit.name }}</Header>
      <div class="tags">
        <Paragraph v-for="tag in kit.tags" :key="kit.tags.indexOf(tag)">
          &#35;{{ tag }}
        </Paragraph>
      </div>
    </div>
    <Button outlined @click="$router.push('/login')">Use Toolkit</Button>
    <div class="description">
      <Paragraph v-for="t in kit.description" :key="kit.description.indexOf(t)">
        {{ t }}
      </Paragraph>
    </div>
    <Toolcard :kit="kit"></Toolcard>
  </div>
</template>

<script>
import Component from '/scripts/component'
import Toolcard from './Toolcard'
import Toolkit from './toolkit'

export default new Component({
  name: 'Showcase',
  components: {
    Toolcard,
  },
  props: {
    kit: {
      type: Toolkit,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/colors';

.showcase {
  width: 80vw;
  margin: auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 5vw;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    .toolcard,
    .button {
      display: none;
    }
  }

  .toolcard {
    height: 25vw;
    margin: 0;
  }

  .button {
    background-color: #fffe;
    border: none;
    color: color('on-surface');
    width: 15ch;
    position: relative;
    left: 100%;
    transform: translateX(-100%);
    height: 2rem;
  }

  .description {
    *:first-child {
      margin-top: 0;
    }
  }

  .title {
    display: flex;
    flex-direction: column;

    *:first-child {
      margin-bottom: 0;
    }

    .tags {
      display: flex;
      flex-direction: row;

      *:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
