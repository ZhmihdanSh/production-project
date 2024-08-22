import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button.tsx', () => {
    test('render Button with default theme', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('render Button with clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });

    test('render Button with clearInverted theme', () => {
        render(<Button theme={ButtonTheme.CLEAR_INVERTED}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clearInverted');
    });

    test('render Button with outline theme', () => {
        render(<Button theme={ButtonTheme.OUTLINE}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('outline');
    });

    test('render Button with outlineInverted theme', () => {
        render(<Button theme={ButtonTheme.OUTLINE_INVERTED}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('outlineInverted');
    });
});
