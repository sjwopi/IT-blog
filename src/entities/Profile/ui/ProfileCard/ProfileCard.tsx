import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from 'pages/ProfilePage';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
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
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
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
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          theme={InputTheme.PROFILE}
          placeholder={t('Ваше имя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          theme={InputTheme.PROFILE}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          theme={InputTheme.PROFILE}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          theme={InputTheme.PROFILE}
          placeholder={t('Город')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.avatar}
          theme={InputTheme.PROFILE}
          placeholder={t('Ссылка на ваш аватар')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <Input
          value={data?.username}
          theme={InputTheme.PROFILE}
          placeholder={t('Имя пользователя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <div className={cls.selectContainer}>
          <CountrySelect
            onChange={onChangeCountry}
            value={data?.country}
            className={cls.select}
            readonly={readonly}
          />
          <CurrencySelect
            onChange={onChangeCurrency}
            value={data?.currency}
            className={cls.select}
            readonly={readonly}
          />
        </div>
      </div>
    </div>
  );
};
