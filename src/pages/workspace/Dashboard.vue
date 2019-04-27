<template>
  <div class="dashboard">
    <Header tertiary>Dashboard</Header>
    <div class="content">
      <WelcomeInfo class="welcome"></WelcomeInfo>
      <ToolkitStatus></ToolkitStatus>
      <Validation></Validation>
      <Process class="process"></Process>
    </div>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'
import ToolkitStatus from './dashboard/ToolkitStatus'
import Validation from './dashboard/Validation'
import Process from './dashboard/Process'
import WelcomeInfo from './dashboard/WelcomeInfo'

export default {
  name: 'Dashboard',
  components: {
    Header,
    ToolkitStatus,
    Validation,
    Process,
    WelcomeInfo,
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 1rem;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    * {
      height: 100%;
      @media screen and (max-width: 1200px) {
        grid-column-start: span 2;
      }
    }

    .process,
    .welcome {
      grid-column-start: span 2;
    }
  }
}
</style>
