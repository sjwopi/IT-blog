import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { ProfilePageHeader } from 'pages/ProfilePage';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: isLoading }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Что-то пошло не так')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <ProfilePageHeader />
      <div className={cls.data}>
        <Input
          value={data?.first}
          theme={InputTheme.OUTLINE}
          placeholder={t('Ваше имя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          theme={InputTheme.OUTLINE}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          theme={InputTheme.OUTLINE}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          theme={InputTheme.OUTLINE}
          placeholder={t('Город')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
      </div>
    </div>
  );
};
