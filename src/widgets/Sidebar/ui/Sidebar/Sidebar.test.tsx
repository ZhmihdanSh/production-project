import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar.test', () => {
    test('Отрисовка Sidebar', () => {
        renderWithTranslation(Sidebar);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Отрисовка свернутого Sidebar', () => {
        renderWithTranslation(Sidebar);
        const toggleButton = screen.getByTestId('toggle-button');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
