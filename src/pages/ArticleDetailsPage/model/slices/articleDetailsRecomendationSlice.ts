import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticlesRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations';
import { ArticleDetailsRecomendationSchema } from '../types/ArticleDetailsRecomendationSchema';

const recomendationAdapter = createEntityAdapter<Article>({
  selectId: (comment) => comment.id,
});

export const getArticleRecomendation = recomendationAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recomendation || recomendationAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState:
    recomendationAdapter.getInitialState<ArticleDetailsRecomendationSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecomendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesRecomendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recomendationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesRecomendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
