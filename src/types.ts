
// Store State
export interface RootState {
  topToolbar: TopToolbarState;
}

// Store Module Models
export interface TopToolbarState {
  title: string;
}

// General Models
export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  dateString: string;
  baseImageName: string;
  articleType: ArticleType;
  isFavourite: boolean;
}

export enum ArticleType {
  TopStory = 'TOP_STORY',
  CodeExample = 'CODE_EXAMPLE'
}
