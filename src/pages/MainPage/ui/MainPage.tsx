import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div className='page'>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
