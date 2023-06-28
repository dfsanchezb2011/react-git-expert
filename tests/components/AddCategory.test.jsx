import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('AddCategory Component Tests', () => {

    const inputValue = 'Transformers';

    test('Test 1. It must change the value of the input text', () => {
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);
    });

    test('Test 2. It must call onNewCategory if the input has a value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        /* expect(onNewCategory).toHaveBeenCalled(); */
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('Test 3. It must not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled(); // Esta opción también es válida.
    });
});