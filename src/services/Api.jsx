import axios from "axios";

export async function FetchData(setData) {
  try {
    const product = await axios.get("https://dummyjson.com/quotes");
    setData(product.data);
    console.log(product.data.quotes);
  } catch (error) {
    console.log(error);
  }
}
