import axios from "axios";

export default async function handler(req, res) {
  try {
    const { query } = req.query;
    const response = await axios.get(
      `https://api.example.com/search?q=${query}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
