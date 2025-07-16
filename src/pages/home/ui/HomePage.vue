<template>
  <div class="home">
    <img alt="Vue logo" src="../../../shared/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/shared/ui/HelloWorld'; // @ is an alias to /src

export default defineComponent({
  name: 'HomePage',
  components: {
    HelloWorld,
  },
});
</script>
