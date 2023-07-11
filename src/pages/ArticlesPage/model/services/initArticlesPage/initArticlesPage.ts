import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (props, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
