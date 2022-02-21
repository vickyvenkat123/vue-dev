<template>
  <div>
      <header1 />
      <router-view />
      <footer2 />
  </div>
</template>

<script>
import header1 from './header1'
import footer2 from './footer2'


export default {
    components:{
        header1,
        footer2,
   

   
    }

}
</script>

<style>

</style>