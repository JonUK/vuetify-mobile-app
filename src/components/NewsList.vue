<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="newsArticle in newsArticles" :key="newsArticle.id">
          <v-card>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs9>
                  <div>
                    <div class="subheading font-weight-medium">
                      {{ newsArticle.title }}
                    </div>
                    <div>{{ newsArticle.dateString }}</div>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    contain
                    :src="`/thumbnails/${newsArticle.baseImageName}.png`"
                    :srcset="`/thumbnails/${newsArticle.baseImageName}.png 1x,
                             /thumbnails/${newsArticle.baseImageName}@2x.png 2x`"
                    height="72px"
                    transition="false"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { NewsArticle } from '../types';

  @Component
  export default class NewsList extends Vue {
    @Prop({required: true}) newsArticles!: NewsArticle[];
  }
</script>
