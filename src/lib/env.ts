const dotenv = require("dotenv");
dotenv.config();

const env = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
};

export default env;
