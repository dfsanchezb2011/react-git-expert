import { getGifs } from "../../src/helpers/getGifs"

describe('GetGifs class Tests', () => {

    test('Test 1. Must return a Gifs array', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            urlImg: expect.any(String),
        })
    });
});