import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootRedusers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootRedusers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
