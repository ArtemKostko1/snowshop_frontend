import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  IProfileInfoForm,
  IPasswordChangeForm,
  IChangePasswordRequest,
  IUserProfileProps,
} from '../../common/types/user/userProfileTypes';
import { ProfileInfoSchema, PasswordChangeSchema } from '../../utils/yup/yupSchemas';
import styles from './UserProfile.styles';

const UserProfile: React.FC<IUserProfileProps> = ({
  user,
  isLoading,
  onUpdateProfile,
  onChangePassword,
}) => {
  // Состояние для хранения выбранного пола
  const [selectedSexId, setSelectedSexId] = useState<number | null | undefined>(user.sexId);

  // Форма основной информации
  const {
    register: registerInfo,
    handleSubmit: handleSubmitInfo,
    formState: { errors: errorsInfo, dirtyFields: dirtyFieldsInfo },
    reset: resetInfo,
    watch: watchInfo,
    setValue,
  } = useForm<IProfileInfoForm>({
    resolver: yupResolver(ProfileInfoSchema) as any,
    mode: 'onChange',
    defaultValues: {
      email: user.email || '',
      name: user.name || '',
      sexId: user.sexId || undefined,
      age: user.age || undefined,
      phoneNumber: user.phoneNumber || '',
    },
  });

  // Форма смены пароля
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword, isDirty: isDirtyPassword, isValid: isValidPassword },
    reset: resetPassword,
  } = useForm<IPasswordChangeForm>({
    resolver: yupResolver(PasswordChangeSchema) as any,
    mode: 'onChange',
  });

  // Проверяем, есть ли измененные поля и ошибки
  const hasChangedFields =
    Object.keys(dirtyFieldsInfo).length > 0 ||
    (selectedSexId !== user.sexId && selectedSexId !== undefined);
  const hasErrors = Object.keys(errorsInfo).some(
    (key) =>
      dirtyFieldsInfo[key as keyof IProfileInfoForm] && errorsInfo[key as keyof IProfileInfoForm],
  );

  // Сброс формы профиля при получении обновленных данных пользователя
  useEffect(() => {
    if (user) {
      resetInfo({
        email: user.email || '',
        name: user.name || '',
        sexId: user.sexId,
        age: user.age || undefined,
        phoneNumber: user.phoneNumber || '',
      });
      setSelectedSexId(user.sexId);
    }
  }, [user, resetInfo]);

  // Обработчик изменения пола
  const handleSexChange = (value: number) => {
    setSelectedSexId(value);
    setValue('sexId', value, { shouldDirty: true });
  };

  // Обработчик обновления профиля
  const onSubmitInfo = (data: IProfileInfoForm) => {
    // Собираем только измененные поля и преобразуем пустые строки в null (кроме имени и email)
    const changedData = Object.keys(dirtyFieldsInfo).reduce((acc: Record<string, any>, key) => {
      const fieldKey = key as keyof IProfileInfoForm;

      // Преобразуем пустые строки в null, кроме обязательных полей
      if (fieldKey === 'name' || fieldKey === 'email') {
        acc[fieldKey] = data[fieldKey];
      } else if (fieldKey === 'age') {
        // Явно устанавливаем null для возраста, если поле пустое или undefined
        const ageValue = data[fieldKey];
        acc[fieldKey] =
          ageValue === undefined || ageValue === null || String(ageValue).trim() === ''
            ? null
            : ageValue;
      } else if (fieldKey === 'phoneNumber') {
        // Явно устанавливаем null для телефона, если поле пустое
        const phoneValue = data[fieldKey];
        acc[fieldKey] = phoneValue === undefined || phoneValue === '' ? null : phoneValue;
      } else {
        // Для других полей проверяем тип перед сравнением
        const value = data[fieldKey];
        if (typeof value === 'string') {
          acc[fieldKey] = value === '' ? null : value;
        } else {
          acc[fieldKey] = value;
        }
      }
      return acc;
    }, {}) as Record<string, any>;

    // Если пол был изменен, добавляем его в измененные данные
    if (selectedSexId !== user.sexId) {
      changedData.sexId = selectedSexId;
    }

    // Проверяем, были ли поля возраста или телефона очищены, но не отмечены как измененные
    const currentAge = watchInfo('age');
    if (
      !changedData.hasOwnProperty('age') &&
      user.age !== null &&
      (currentAge === undefined ||
        currentAge === null ||
        (typeof currentAge === 'string' && currentAge === ''))
    ) {
      changedData.age = null;
    }

    const currentPhone = watchInfo('phoneNumber');
    if (
      !changedData.hasOwnProperty('phoneNumber') &&
      user.phoneNumber !== null &&
      (currentPhone === undefined || currentPhone === '')
    ) {
      changedData.phoneNumber = null;
    }

    onUpdateProfile(changedData as IProfileInfoForm);
  };

  // Обработчик смены пароля
  const onSubmitPassword = (data: IPasswordChangeForm) => {
    const passwordData: IChangePasswordRequest = {
      userId: user.id,
      currentPassword: data.currentPassword.trim(),
      newPassword: data.newPassword.trim(),
    };
    onChangePassword(passwordData);
    resetPassword();
  };

  return (
    <div style={styles.profileContainer as React.CSSProperties}>
      {/* Блок основной информации */}
      <div>
        <h2 style={styles.sectionTitle as React.CSSProperties}>Основная информация</h2>
        <form onSubmit={handleSubmitInfo(onSubmitInfo) as any}>
          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Email</label>
            <input
              style={styles.input as React.CSSProperties}
              type="email"
              {...registerInfo('email')}
            />
            {errorsInfo.email && (
              <p style={styles.errorText as React.CSSProperties}>{errorsInfo.email.message}</p>
            )}
          </div>

          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Имя</label>
            <input
              style={styles.input as React.CSSProperties}
              type="text"
              {...registerInfo('name')}
            />
            {errorsInfo.name && (
              <p style={styles.errorText as React.CSSProperties}>{errorsInfo.name.message}</p>
            )}
          </div>

          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Пол</label>
            <div style={styles.radioGroup as React.CSSProperties}>
              <label style={styles.radioLabel as React.CSSProperties}>
                <input
                  style={styles.radioInput as React.CSSProperties}
                  type="radio"
                  checked={selectedSexId === 1}
                  onChange={() => handleSexChange(1)}
                />
                Мужской
              </label>
              <label style={styles.radioLabel as React.CSSProperties}>
                <input
                  style={styles.radioInput as React.CSSProperties}
                  type="radio"
                  checked={selectedSexId === 2}
                  onChange={() => handleSexChange(2)}
                />
                Женский
              </label>
            </div>
            {errorsInfo.sexId && (
              <p style={styles.errorText as React.CSSProperties}>{errorsInfo.sexId.message}</p>
            )}
          </div>

          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Возраст</label>
            <input
              style={styles.input as React.CSSProperties}
              type="number"
              {...registerInfo('age')}
            />
            {errorsInfo.age && (
              <p style={styles.errorText as React.CSSProperties}>{errorsInfo.age.message}</p>
            )}
          </div>

          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Номер телефона</label>
            <input
              style={styles.input as React.CSSProperties}
              type="tel"
              placeholder="Пример: +375290000000"
              {...registerInfo('phoneNumber')}
            />
            {errorsInfo.phoneNumber && (
              <p style={styles.errorText as React.CSSProperties}>
                {errorsInfo.phoneNumber.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              ...(styles.button as React.CSSProperties),
              ...((!hasChangedFields || isLoading || hasErrors
                ? styles.buttonDisabled
                : {}) as React.CSSProperties),
            }}
            disabled={!hasChangedFields || isLoading || hasErrors}
          >
            Обновить профиль
          </button>
        </form>
      </div>

      <hr style={styles.divider as React.CSSProperties} />

      {/* Блок смены пароля */}
      <div>
        <h2 style={styles.sectionTitle as React.CSSProperties}>Смена пароля</h2>
        <form onSubmit={handleSubmitPassword(onSubmitPassword) as any}>
          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Текущий пароль</label>
            <input
              style={styles.input as React.CSSProperties}
              type="password"
              {...registerPassword('currentPassword')}
            />
            {errorsPassword.currentPassword && (
              <p style={styles.errorText as React.CSSProperties}>
                {errorsPassword.currentPassword.message}
              </p>
            )}
          </div>

          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Новый пароль</label>
            <input
              style={styles.input as React.CSSProperties}
              type="password"
              {...registerPassword('newPassword')}
            />
            {errorsPassword.newPassword && (
              <p style={styles.errorText as React.CSSProperties}>
                {errorsPassword.newPassword.message}
              </p>
            )}
          </div>

          <div style={styles.formGroup as React.CSSProperties}>
            <label style={styles.label as React.CSSProperties}>Подтвердите пароль</label>
            <input
              style={styles.input as React.CSSProperties}
              type="password"
              {...registerPassword('confirmNewPassword')}
            />
            {errorsPassword.confirmNewPassword && (
              <p style={styles.errorText as React.CSSProperties}>
                {errorsPassword.confirmNewPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              ...(styles.button as React.CSSProperties),
              ...((!isDirtyPassword || !isValidPassword || isLoading
                ? styles.buttonDisabled
                : {}) as React.CSSProperties),
            }}
            disabled={!isDirtyPassword || !isValidPassword || isLoading}
          >
            Сменить пароль
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
