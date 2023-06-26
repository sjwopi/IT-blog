import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginStatePassword } from './getLoginStatePassword';

describe('getLoginStatePassword.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123123',
      },
    };
    expect(getLoginStatePassword(state as StateSchema)).toEqual('123123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginStatePassword(state as StateSchema)).toEqual('');
  });
});
