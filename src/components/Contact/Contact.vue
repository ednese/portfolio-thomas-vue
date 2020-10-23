<template>
  <div class="Contact">
    <div :id="`/${this.lang.locale}/#${ $t('nav.contact.link')}`" class="contact__nav"/>
    <div class="contact__inner">
        <form class="contact__form" @submit="send($event)" >
            <h1 class="contact__form__title">{{ $t('nav.contact.title') }}</h1>
            <div class="contact__form__top">
                <div class="name">
                    <label>{{ $t('contact.name') }}</label>
                    <input v-model="name" type="text" class="name" id="Name"/>
                </div>
                <div class="mail">
                    <label>E-MAIL</label>
                    <input v-model="mail" type="text" class="email" id="email"/>
                </div>
            </div>
            <div class="contact__form__bottom">
                <label>MESSAGE</label>
                <textarea v-model="message" rows="10" cols="30" type="text" class="mess" id="mess"/>
                <div class="button" v-on:click="send">{{ $t('contact.send') }}</div>
            </div>
        </form>
        <img src="../../assets/img/CONTACT.svg" alt="phone"/>
    </div>
  </div>
</template>

<script>
import i18n from '../../i18n'

import './contact.css'

export default {
  name: 'Portfolio',
  methods: {
    send: function () {
      this.name = ''
      this.mail = ''
      this.message = ''
      alert('Your message has been sent')
    }
  },
  data () {
    return {
      lang: i18n,
      name: '',
      mail: '',
      message: ''
    }
  }
}
</script>
