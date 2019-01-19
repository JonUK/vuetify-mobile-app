<template>

  <v-bottom-nav app fixed :active.sync="activeItem" :value="true">
    <v-btn flat color="primary" value="top">
      <span>Top Stories</span>
      <v-icon>thumb_up</v-icon>
    </v-btn>

    <v-btn flat color="primary" value="code">
      <span>Code Examples</span>
      <v-icon>code</v-icon>
    </v-btn>

    <v-btn flat color="primary" value="favorites">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>

  </v-bottom-nav>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class BottomNav extends Vue {
    activeItem: string = 'top';
  }
</script>
