import { connectToDatabase } from "@/utils/mongodb";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
    await connectToDatabase();

    if (req.method === "POST") {
        const { id } = req.body;
        const blogs = await Blog.find({ _id: id });
        return res.status(200).json(blogs);
    }

    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}