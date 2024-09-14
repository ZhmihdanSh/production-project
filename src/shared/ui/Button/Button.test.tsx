import { render, screen } from '@testing-library/react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

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

    test('render Button with background theme', () => {
        render(<Button theme={ButtonTheme.BACKGROUND}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('background');
    });

    test('render Button with backgroundInverted theme', () => {
        render(<Button theme={ButtonTheme.BACKGROUND_INVERTED}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('backgroundInverted');
    });

    test('render square Button with M size', () => {
        render(<Button size={ButtonSize.M} square theme={ButtonTheme.OUTLINE_INVERTED}>X</Button>);
        expect(screen.getByText('X')).toHaveClass('square size_m');
    });

    test('render square Button with L size', () => {
        render(<Button size={ButtonSize.L} square theme={ButtonTheme.OUTLINE_INVERTED}>X</Button>);
        expect(screen.getByText('X')).toHaveClass('square size_l');
    });

    test('render square Button with XL size', () => {
        render(<Button size={ButtonSize.XL} square theme={ButtonTheme.OUTLINE_INVERTED}>X</Button>);
        expect(screen.getByText('X')).toHaveClass('square size_xl');
    });
});
