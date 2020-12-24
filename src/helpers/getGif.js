
export const getGif = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=80h4oAppGDJyT3wvEUgMlz9O1DyixdMu&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();


const gifs = data.map(img=>{
    return{
        id: img.id,
        title: img.title,
        url: img.images.original.url,
    }});
    console.log(gifs)
    return gifs;

}