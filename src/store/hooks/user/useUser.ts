import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useUser() {
  const { user, isUserLoading, passwordChangeSuccess } = useSelector(
    (state: RootState) => state.user,
  );

  return { user, isUserLoading, passwordChangeSuccess };
}
