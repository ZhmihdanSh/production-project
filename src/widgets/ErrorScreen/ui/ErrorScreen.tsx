import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ErrorScreen.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ErrorScreenProps {
    className?: string;
}

export const ErrorScreen = memo((props: ErrorScreenProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage = useCallback(() => {
        location.reload();
    }, []);

    return (
        <div className={classNames(classes.ErrorScreen, {}, [className])}>
            <h1>{t('Неизвестная ошибка')}</h1>
            <Button
                onClick={reloadPage}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
});
