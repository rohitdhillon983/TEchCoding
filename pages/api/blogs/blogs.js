import { connectToDatabase } from "@/utils/mongodb";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json(blogs);
  }

  if (req.method === "POST") {
    try {
      const newBlog = new Blog(req.body);
      await newBlog.save();
      return res.status(201).json({ message: "Blog added successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to add blog", error });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
