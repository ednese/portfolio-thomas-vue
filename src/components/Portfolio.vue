<template>
  <div class="Home">
      <Navigation/>
      <Footer :element="element"/>
  </div>
</template>

<script>
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

export default {
  name: 'Home',
  components: {
    Navigation,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
