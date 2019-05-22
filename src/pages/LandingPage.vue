<template>
  <div>
    <Mainnav></Mainnav>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script>
import Mainnav from './landingPage/Mainnav'
import Footer from './landingPage/Footer'

export default {
  name: 'LandingPage',
  components: {
    Mainnav,
    Footer,
  },
}
</script>
