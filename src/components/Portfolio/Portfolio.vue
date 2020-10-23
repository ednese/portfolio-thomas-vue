<template>
  <div class="Portfolio">
    <div :id="`/${this.lang.locale}/#portfolio`" class="portfolio__nav"/>
    <div class="portfolio__inner">
        <h1 class="portfolio__title">PORTFOLIO</h1>
        <div class="portfolio__assets">
            <img class="portfolio__asset__line left" src="../../assets/shapes/LINE.svg" alt="bag"/>
            <a :href="`#/${lang.locale}/portfolio`"><img class="portfolio__asset__bag" src="../../assets/img/BAGPACK.svg" alt="bag"/></a>
            <img class="portfolio__asset__line right" src="../../assets/shapes/LINE.svg" alt="bag"/>
        </div>
    </div>
  </div>
</template>

<script>
import i18n from '../../i18n'

import './portfolio.css'

export default {
  name: 'Portfolio',
  data () {
    return {
      lang: i18n
    }
  }
}
</script>
