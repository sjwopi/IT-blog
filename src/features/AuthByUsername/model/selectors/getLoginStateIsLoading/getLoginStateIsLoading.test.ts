import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginStateIsLoading } from './getLoginStateIsLoading';

describe('getLoginStateIsLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginStateIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginStateIsLoading(state as StateSchema)).toEqual(false);
  });
});
