import axios from "axios";

// api key = 6453f1bc
export default axios.create({
  baseUrl: "http://www.omdbapi.com",
});
