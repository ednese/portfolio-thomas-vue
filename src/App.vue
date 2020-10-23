<template>
  <div id="app">
    <!-- <router-link :to="`/${lang.locale}/about`">{{$t('nav.about')}}</router-link>
    <p v-on:click="switchLang('fr')" >FR</p>
    <p v-on:click="switchLang('en')" >EN</p> -->
    <router-view/>
  </div>
</template>

<script>
import i18n from './i18n'

export default {
  name: 'App',
  data () {
    return {
      lang: i18n,
      switch: ''
    }
  },
  methods: {
    switchLang: function (language) {
      this.switch = this.lang.locale
      if (this.switch !== language) {
        this.$router.push({
          params: {lang: language}
        })
      }
      this.switch = language
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: 'Josefin Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
textarea:focus, input:focus, button, select, select:hover {
  outline: none;
}
</style>
