export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=HDVKBMXSpc8S0yJBariN9mozSx59J8Eh`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(data);
    return gifs;
}