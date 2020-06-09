<template>
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ components: {} })
export default class App extends Vue {
  test = '1';

  mounted() {
    this.$q.electron.ipcRenderer.on('ping', (event, message) => {
      console.log(message);
    });
  }
}
</script>

<style lang="scss" scoped></style>
