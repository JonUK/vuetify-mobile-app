import { ArticleType, NewsArticle } from '../types';

const url = '/data/articles.json';

class NewsService {

  getArticlesByType(articleType: ArticleType): Promise<NewsArticle[]> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverArticles) => {

        const newsArticles = serverArticles
          .filter((serverArticle: any) => serverArticle.articleType === articleType)
          .map(this.map);

        return newsArticles;
      })
      .catch((e) => {
        console.error('An error occurred retrieving the news articles from ' + url, e);
      })
  }

  getFavorites(): Promise<NewsArticle[]> {

    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverArticles) => {
        const newsArticles = serverArticles
          .filter((serverArticle: any) => serverArticle.isFavourite === true)
          .map(this.map);

        return newsArticles;
      })
      .catch((e) => {
        console.error('An error occurred retrieving the news articles from ' + url, e);
      })
  }

  private map(serverArticle: any): NewsArticle {
    return {
      id: serverArticle.id,
      title: serverArticle.title,
      content: serverArticle.content,
      dateString: serverArticle.dateString,
      baseImageName: serverArticle.baseImageName,
      articleType: serverArticle.articleType,
      isFavourite: serverArticle.isFavourite
    } as NewsArticle;
  }

}

export default new NewsService();