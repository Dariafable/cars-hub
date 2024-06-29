import axios from "axios";

export const fetchCars = async () => {
  const options = {
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: { model: "corolla" },
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
