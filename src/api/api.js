import axios from "axios";



export const fetchData = async (key) => {
    console.log(key);
  try {
    const response = await axios.get(
      "https://amazon-product-data6.p.rapidapi.com/product-by-text",
      {
        params: {
          keyword: key,
          page: "1",
          country: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "b79a8174b1msha56e2e400404746p14f525jsn811b2e963156",
          "X-RapidAPI-Host": "amazon-product-data6.p.rapidapi.com",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {}
};
