import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useUser } from '../../store/hooks/user/useUser';
import {
  getUserByIdThunk,
  updateUserThunk,
  changePasswordThunk,
} from '../../store/thunks/users/usersThunk';
import UserProfile from './UserProfile';
import { IProfileInfoForm, IChangePasswordRequest } from '../../common/types/user/userProfileTypes';
import styles from './UserProfile.styles';

const UserProfileContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isUserLoading, passwordChangeSuccess } = useUser();
  const userId = sessionStorage.getItem('id');

  useEffect(() => {
    if (userId) {
      dispatch(getUserByIdThunk(Number(userId)));
    }
  }, [dispatch, userId]);

  const handleUpdateProfile = (data: IProfileInfoForm) => {
    if (user && user.id) {
      const updatedUser = {
        ...user,
        ...data,
        age: data.age === null ? null : data.age || user.age,
        sexId: data.sexId === null ? null : data.sexId || user.sexId,
      };

      dispatch(updateUserThunk(updatedUser));
    }
  };

  const handleChangePassword = (data: IChangePasswordRequest) => {
    if (user && user.id) {
      const passwordData = {
        ...data,
        userId: user.id,
      };
      dispatch(changePasswordThunk(passwordData));
    }
  };

  if (!user || !user.id) {
    return <div style={styles.loadingContainer as React.CSSProperties}>Загрузка профиля...</div>;
  }

  return (
    <UserProfile
      user={user}
      isLoading={isUserLoading}
      onUpdateProfile={handleUpdateProfile}
      onChangePassword={handleChangePassword}
    />
  );
};

export default UserProfileContainer;
