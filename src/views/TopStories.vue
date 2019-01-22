import { ArticleType } from "../types";
<template>

  <div>

    <v-container>
      <h1 class="headline">Top Stories</h1>
    </v-container>

    <NewsList :newsArticles="newsArticles"></NewsList>

  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import newsService from '../services/newsService';
import NewsList from '../components/NewsList.vue';
import { ArticleType, NewsArticle } from '../types';

@Component({
  components: {
    NewsList 
  }
})
export default class TopStories extends Vue {
  newsArticles: NewsArticle[] = [];

  mounted() {
    newsService.getArticlesByType(ArticleType.TopStory)
      .then((newsArticles: NewsArticle[]) => {
        this.newsArticles = newsArticles;
      });
  }

}
</script>
