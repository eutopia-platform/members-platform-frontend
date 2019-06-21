<template>
  <div class="dashboard">
    <Header s3>Dashboard</Header>
    <div class="content">
      <InfoCard>
        <div>
          <Paragraph>
            Welcome to the dashboard of your workspace &mdash; the new home of
            your project.
            <Break></Break>
            Manage toolkits and processes and always stay on top of the progress
            your team is making.
          </Paragraph>
        </div>
      </InfoCard>
      <ToolkitStatus></ToolkitStatus>
      <Validation></Validation>
      <Process class="process"></Process>
    </div>
  </div>
</template>

<script>
import ToolkitStatus from './dashboard/ToolkitStatusCard'
import Validation from './dashboard/Validation'
import Process from './dashboard/Process'
import InfoCard from '~/components/molecular/InfoCard'

export default {
  name: 'Dashboard',
  components: {
    ToolkitStatus,
    Validation,
    Process,
    InfoCard,
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
