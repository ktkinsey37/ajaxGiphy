const btn = document.querySelector('#button')
btn.addEventListener('click', async function(evt){
    evt.preventDefault();
    const gif = await getData();
    addGif(gif);
})

const del = document.querySelector('#delete')
del.addEventListener('click', async function(evt){
    evt.preventDefault();
    const list = document.querySelector('#list')
    list.innerHTML = "";
})

async function getData () {                                 //retrieves the img url needed and puts it in const img
    const query = document.querySelector('#search')
    const data = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query.value}&api_key=6ItBn9p6dGi9k6XJrKIC79lhPyjRc8Ja`)
    const gif = (data.data.data[0].images.original.url)
    return gif;
}

function addGif (gif){
    const list = document.querySelector('#list')
    const div = document.createElement('div')
    div.classList.add('container')
    div.style.backgroundImage = "url(" + gif + ")";
    div.style.backgroundImage.objectFit = "fill";
    list.appendChild(div)
}