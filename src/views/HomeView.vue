<template>
  <div class="home">
   <Marquee/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Marquee from '@/components/Marquee.vue'

export default {
  name: 'HomeView',
  components: {
	Marquee
  }
}
</script>
