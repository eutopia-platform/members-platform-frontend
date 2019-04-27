<template>
  <div class="process">
    <Header primary>Test your ideas quicker</Header>
    <Tagline class="tagline">
      Run data driven experiments with toolkits and processes to build, validate
      and iterate through prototypes quick.
    </Tagline>
    <div class="steps">
      <div class="step">
        <Icon :src="img1"></Icon>
        <Header tertiary>Choose a toolkit</Header>
        <Paragraph>
          Toolkits help you get the job done. No matter if you want to identify your customer, 
          develop a new feature or even an entire MVP.
        </Paragraph>
      </div>
      <div class="step">
        <Icon :src="img2"></Icon>
        <Header tertiary>Set a hypothesis</Header>
        <Paragraph>
          Every toolkit require you to write a hypothesis and a metric to
          measure your result by.
        </Paragraph>
      </div>
      <div class="step">
        <Icon :src="img3"></Icon>
        <Header tertiary>User-test it</Header>
        <Paragraph>
          We make it easy to test your result by offering a way to setup user
          tests in under five minuts.
        </Paragraph>
      </div>
      <div class="step">
        <Icon :src="img4"></Icon>
        <Header tertiary>Validate or pivot</Header>
        <Paragraph>
          Use the result of your user test to back up your strategic decision
          and iterate towards product-market fit.
        </Paragraph>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'
import Tagline from '/components/atomic/Tagline'
import Icon from '/components/atomic/Icon'
import Paragraph from '/components/atomic/Paragraph'

export default {
  name: 'Process',
  components: {
    Header,
    Tagline,
    Icon,
    Paragraph,
  },
  computed: {
    img1: () => require('/../data/img/landingpage/test1.svg'),
    img2: () => require('/../data/img/landingpage/test2.svg'),
    img3: () => require('/../data/img/landingpage/test3.svg'),
    img4: () => require('/../data/img/landingpage/test4.svg'),
  },
}
</script>

<style lang="scss" scoped>
.process {
  padding: 5rem;
  text-align: center;

  * {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .tagline {
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .steps {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5rem;

    .step {
      width: 15rem;
      * {
        margin: 0;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
