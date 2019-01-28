import { ArticleType, NewsArticle } from '../types';

class NewsService {

  getArticlesByType(articleType: ArticleType): Promise<NewsArticle[]> {

    return fetch('/data/articles.json')
      .then((response) => {
        return response.json();
      })
      .then((serverArticles) => {
        const newsArticles = serverArticles
          .filter((serverArticle: any) => serverArticle.articleType === articleType)
          .map(this.map);

        return newsArticles;
      });
  }

  getFavorites(): Promise<NewsArticle[]> {

    return fetch('/data/articles.json')
      .then((response) => {
        return response.json();
      })
      .then((serverArticles) => {
        const newsArticles = serverArticles
          .filter((serverArticle: any) => serverArticle.isFavourite === true)
          .map(this.map);

        return newsArticles;
      });
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
