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
  },
  data () {
    return {
      element: false
    }
  }
}
</script>
