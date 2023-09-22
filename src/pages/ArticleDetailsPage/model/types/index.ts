import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecomendationSchema } from './ArticleDetailsRecomendationSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recomendation: ArticleDetailsRecomendationSchema;
}
