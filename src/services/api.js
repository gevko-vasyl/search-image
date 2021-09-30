import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

async function fetchImages(name, page) {
  const response = await axios.get(
    `/?q=${name}&page=${page}&key=20312002-359243adeeeebb2bc74e90a1f&image_type=photo&orientation=horizontal&per_page=12`
  );
  const images = response.data.hits;
  return images;
}

export default fetchImages;
