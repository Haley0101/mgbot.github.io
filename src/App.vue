<template>
  <Header />
  <router-view/>
  <TopButton />
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