<template>
  <div class="Header" :id="`/${this.lang.locale}/#${ $t('nav.home.link')}`">
    <ul class="header__social">
        <a href="https://www.instagram.com/thomxrts/" target="_blank">
            <li><img class="header__social__icones" alt="social" src="../../assets/icones/INSTA_BLUE.svg"/></li>
        </a>
        <a href="https://twitter.com/T_Jze" target="_blank">
            <li><img class="header__social__icones" alt="social" src="../../assets/icones/TWITTER_BLUE.svg"/></li>
        </a>
        <a href="https://www.youtube.com/channel/UCDeSCeLJwtmIgl8RyA3tBtQ" target="_blank">
            <li><img class="header__social__icones" alt="social" src="../../assets/icones/YOUTUBE_BLUE.svg"/></li>
        </a>
    </ul>
    <div class="header__inner">
        <img class="header__illustration" alt="character" src="../../assets/img/CHARACTER_HEADER.svg"/>
        <div class="header__textbox">
            <h1 class="header__title">THOMAS <span>JAUZE</span></h1>
            <h2 class="header__subtitle">{{ $t('header') }}</h2>
            <a :href="`#/${lang.locale}/#${ $t('nav.about.link') }`"><img class="header__arrow" alt="character" src="../../assets/icones/ARROW_MAIN_PAGE.svg"/></a>
        </div>
    </div>
  </div>
</template>

<script>
import i18n from '../../i18n'

import './header.css'

export default {
  name: 'Header',
  data () {
    return {
      lang: i18n
    }
  }
}
</script>
