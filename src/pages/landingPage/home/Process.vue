<template>
  <div class="process">
    <Header s1>Test your ideas quicker</Header>
    <Big>
      Run data driven experiments with toolkits and processes to build, validate
      and iterate through prototypes quick.
    </Big>
    <div class="steps">
      <div class="step">
        <Icon :src="img1"></Icon>
        <Header s3>Choose a toolkit</Header>
        <Paragraph>
          Toolkits help you get the job done. No matter if you want to identify
          your customer, develop a new feature or even an entire MVP.
        </Paragraph>
      </div>
      <div class="step">
        <Icon :src="img2"></Icon>
        <Header s3>Set a hypothesis</Header>
        <Paragraph>
          Every toolkit require you to write a hypothesis and a metric to
          measure your result by.
        </Paragraph>
      </div>
      <div class="step">
        <Icon :src="img3"></Icon>
        <Header s3>User-test it</Header>
        <Paragraph>
          We make it easy to test your result by offering a way to setup user
          tests in under five minuts.
        </Paragraph>
      </div>
      <div class="step">
        <Icon :src="img4"></Icon>
        <Header s3>Validate or pivot</Header>
        <Paragraph>
          Use the result of your user test to back up your strategic decision
          and iterate towards product-market fit.
        </Paragraph>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
  computed: {
    img1: () => require('/../data/img/landingpage/test1.svg'),
    img2: () => require('/../data/img/landingpage/test2.svg'),
    img3: () => require('/../data/img/landingpage/test3.svg'),
    img4: () => require('/../data/img/landingpage/test4.svg'),
  },
  mounted: function() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: function() {
      if (window.scrollY > this.$el.offsetTop - this.$el.offsetHeight / 4) {
        Array.from(this.$el.getElementsByClassName('step')).forEach(step =>
          step.classList.add('active')
        )
        window.removeEventListener('scroll', this.onScroll)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.process {
  padding: 5rem;
  text-align: center;

  @media screen and (max-width: 800px) {
    padding: 2rem;
    text-align: left;
  }

  * {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .steps {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5rem;
    flex-wrap: wrap;
    align-items: end;

    @media screen and (max-width: 544px) {
      justify-content: center;
    }

    .step {
      opacity: 0;
      width: 15rem;
      transition: all 1s ease-out;
      transform: translateY(-2rem);
      text-align: center;

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          transition-delay: #{($i - 1) * 0.15}s;
        }
      }

      * {
        margin: 0;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }

      &.active {
        opacity: 1;
        transform: none;
      }

      .paragraph {
        text-align: left;
        margin: 2rem;
      }
    }
  }
}
</style>
