import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps {
  className?: string;
}

export const ArticleCreatePage = ({ className }: ArticleCreatePageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      ArticleCreatePage
    </div>
  );
};

export default ArticleCreatePage;
