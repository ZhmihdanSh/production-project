import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames.ts', () => {
    test('Один класс', () => {
        expect(classNames('class1')).toBe('class1 ');
    });
    test('Два класса', () => {
        expect(classNames('class1', {}, ['class2'])).toBe('class1 class2 ');
    });
    test('Один класс и работующий мод', () => {
        expect(classNames('class1', { disable: true })).toBe('class1 disable');
    });
    test('Один класс и работующий мод со строковым значением', () => {
        expect(classNames('class1', { disable: 'true' })).toBe('class1 disable');
    });
    test('Два класса и неработующий мод', () => {
        expect(classNames('class1', { disable: false }, ['class2'])).toBe('class1 class2 ');
    });
    test('undefined в поле класса', () => {
        expect(classNames(undefined)).toBe(' ');
    });
    test('undefined в поле дополнительного класса', () => {
        expect(classNames('class1', {}, [])).toBe('class1 ');
    });
});
