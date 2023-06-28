import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid Component Tests', () => {

    const category = 'Lamborghini';

    test('Test 1. It must show the loading message initially', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Test 2. It must show items when the images have been loaded.', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'abc',
                urlImg: 'http://localhost.abc.jpg'
            },
            {
                id: 'ABCD',
                title: 'abcd',
                urlImg: 'http://localhost.abcd.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});