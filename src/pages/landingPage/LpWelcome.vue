<template>
  <div class="lp-welcome">
    <Header type="primary">
      Helping projects succeed
    </Header>
    <p>
      Project hub helps you to identify the most important aspects of your
      project so you achieve the right goals.
    </p>
    <Button>
      Request early access
    </Button>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'
import Button from '../../components/atomic/Button.vue'

const LpWelcome = {
  name: "LpWelcome",
  components: {
    Header,
    Button
  }
}
export default LpWelcome
</script>

<style lang="scss" scoped>
  .lp-welcome {
    align-content: center;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    text-align: center;
    top: 50vh;
    transform: translateY(-50%);
    position: relative;

    p {
      font-size: 1.2rem;
      margin: 2em;
    }

    .button {
      margin-top: 1rem;
    }

  }
</style>
