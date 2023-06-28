import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs Hook Tests', () => {

    const category = 'Lamborghini';

    test('Test 1. It must return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Test 2. It must return an image array and isLoading variable in false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});