<template>
  <div :class="`Footer ${element}`">
    <div v-if="element"><Contact/></div>
    <div v-else><Work/></div>
    <div :class="`footer_background_${element}`"/>
    <div class="footer__inner">
      <div class="footer__container left">
        <h1 class="footer__container__title">THOMAS<span>JAUZE</span></h1>
        <h2>{{ $t('footer.social') }}</h2>
        <div class="footer__left__social">
          <a href="https://www.instagram.com/thomxrts/" target="_blank">
            <img alt="social" src="../../assets/icones/INSTA_WHITE.svg"/>
          </a>
          <a href="https://twitter.com/T_Jze" target="_blank">
            <img alt="social" src="../../assets/icones/TWITTER_WHITE.svg"/>
          </a>
          <a href="https://www.youtube.com/channel/UCDeSCeLJwtmIgl8RyA3tBtQ" target="_blank">
            <img alt="social" src="../../assets/icones/YOUTUBE_WHITE.svg"/>
          </a>
        </div>
      </div>
      <h2 class="footer__copyright">Copyright © 2020<span class="bolder">THOMAS</span>JAUZE</h2>
      <div class="footer__container right">
        <h1 class="footer__container__title">INFORMATIONS</h1>
        <h2>E-MAIL : pro@thomasjauze.com</h2>
        <h2>{{ $t('footer.phone') }}: +33 6 50 08 45 38</h2>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../../i18n'
import Contact from '../Contact/Contact'
import Work from '../Work/Work'

import './footer.css'

export default {
  name: 'Footer',
  props: ['element'],
  components: {
    Contact,
    Work
  },
  data () {
    return {
      lang: i18n
    }
  }
}
</script>
