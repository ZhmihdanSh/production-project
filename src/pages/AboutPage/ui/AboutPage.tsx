import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');

    return (
        <div className='page'>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
