import { GifItem } from "../components/GifItem";

export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LZ0JoU8rb7NtBzAfs9U9QZ8RY2MgIW66&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif => ({id:gif.id,title:gif.title,url:gif.images.original.url}));
    return gifs;
}