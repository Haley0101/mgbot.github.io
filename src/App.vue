<template>
  <head><meta name="viewport" content="width=device-width, initial-scale=1.0" user-scaleable="yes"></head>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style src="../public/css/crossbrowser.css"></style>
<style src="../public/css/main.css"></style>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer
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