import axios from "axios";

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
("https://api.example.com/search?q=${query}");
