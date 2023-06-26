import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginStateUsername } from './getLoginStateUsername';

describe('getLoginStateUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123123',
      },
    };
    expect(getLoginStateUsername(state as StateSchema)).toEqual('123123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginStateUsername(state as StateSchema)).toEqual('');
  });
});
