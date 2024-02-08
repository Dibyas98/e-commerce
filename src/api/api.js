import axios from "axios";



export const fetchData = async (key) => {
  try {
    const response = await axios.get(
      "https://real-time-product-search.p.rapidapi.com/search",
      {
        params: {
          q: key,
          country: 'in',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': 'dac8841c16mshd84f193b470335ep12bfb4jsnafb4ac73c087',
          'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {}
};
