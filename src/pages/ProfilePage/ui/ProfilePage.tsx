import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        {t('Cтраница профиля')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
