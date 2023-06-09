export const getGifs = async (category) => {
    const api_key = 'ASISU2rToUMBtp4RwiAmj9VL4H4D88HH'
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        urlImg: img.images.downsized_medium.url
    }));

    return gifs;
}