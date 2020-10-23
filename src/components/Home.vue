<template>
  <div class="Home">
      <Navigation/>
      <Header/>
      <About/>
      <Portfolio/>
      <Footer :element="element"/>
  </div>
</template>

<script>
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Footer from './Footer/Footer'

export default {
  name: 'Home',
  components: {
    Navigation,
    Header,
    About,
    Portfolio,
    Footer
  },
  data () {
    return {
      msg: 'i18n',
      element: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
