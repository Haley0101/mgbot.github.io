<template>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
      user-scaleable="yes"
    >
  </head>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopButton from '@/components/top-button';

export default {
  components: {
    Header,
    Footer,
    TopButton
  },
  
  mounted () {
      $("#darkBtn").on('click', function() {
        ChangeFun()
      })

      $("#lightBtn").on('click', function() {
        ChangeFun()
      })
  }
}
</script>