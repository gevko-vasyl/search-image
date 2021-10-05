import axios from "axios";

const apiKey = "20312002-359243adeeeebb2bc74e90a1f";

axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImages = async (name, page) => {
  const response = await axios.get(
    `/?q=${name}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const images = response.data.hits;
  return images;
};

export default fetchImages;
