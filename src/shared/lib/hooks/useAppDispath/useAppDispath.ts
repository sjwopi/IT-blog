import { useDispatch } from 'react-redux';
import { AppDispath } from 'app/providers/StoreProvider';

export const useAppDispath = () => useDispatch<AppDispath>();
