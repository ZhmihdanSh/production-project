import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button.test', () => {
    test('Отрисовка кнопки в интерфейсе', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('Button');
    });
    test('Отрисовка кнопки в интерфейсе с clear темой', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
    test('Отрисовка кнопки в интерфейсе с clearInverted темой', () => {
        render(<Button theme={ButtonTheme.CLEAR_INVERTED}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clearInverted');
    });
    test('Отрисовка кнопки в интерфейсе с outline темой', () => {
        render(<Button theme={ButtonTheme.OUTLINE}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('outline');
    });
    test('Отрисовка кнопки в интерфейсе с outlineInverted темой', () => {
        render(<Button theme={ButtonTheme.OUTLINE_INVERTED}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('outlineInverted');
    });
});
