import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispath/useAppDispath';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadOnly);
  const dispath = useAppDispatch();

  const onEdit = useCallback(() => {
    dispath(profileActions.setReadonly(false));
  }, [dispath]);
  const onCanselEdit = useCallback(() => {
    dispath(profileActions.cancelEdit());
  }, [dispath]);
  const onSave = useCallback(() => {
    dispath(updateProfileData());
  }, [dispath]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCanselEdit}
          >
            {t('Отменить')}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};
