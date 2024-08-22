import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={className}
            onClick={toggleLanguage}
            theme={ButtonTheme.CLEAR_INVERTED}
        >
            {t('Язык')}
        </Button>
    );
});
