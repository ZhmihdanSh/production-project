import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames.test', () => {
    test('Один класс', () => {
        expect(classNames('Класс1')).toBe('Класс1');
    });
    test('Два класса', () => {
        expect(classNames('Класс1', {}, ['Класс2'])).toBe('Класс1 Класс2');
    });
    test('Три класса', () => {
        expect(classNames('Класс1', {}, ['Класс2', 'Класс3'])).toBe('Класс1 Класс2 Класс3');
    });
    test('Два класса + работающий мод', () => {
        expect(classNames('Класс1', { selected: true }, ['Класс2'])).toBe('Класс1 Класс2 selected');
    });
    test('Один класс + неработающий мод', () => {
        expect(classNames('Класс1', { selected: false })).toBe('Класс1');
    });
});
