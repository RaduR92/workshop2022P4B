import { Meme } from "./memeInterface";


const mapData = (data) => {
  return "";
}

const renderApp = async () => {
 await fetch('https://api.imgflip.com/get_memes')
  .then((response) => response.json())
  .then((data) => {
    const mappedData = mapData(data);

});
}


// init app

(function initializeApp() {
  renderApp()
})();