import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = memo(() => {
    const { t } = useTranslation('not-found');

    return (
        <div className={classes.NotFoundPage}>
            {t('Страница не найдена')}
        </div>
    );
});

export default NotFoundPage;
