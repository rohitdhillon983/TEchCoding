import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, contact, email, message } = req.body;

    if (!name || !contact || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER, // Admin email (use environment variables)
            pass: process.env.EMAIL_PASS, // Admin email password or App Password
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "rohitdhillon983@gmail.com", // Replace with your admin email
            subject: "New Contact Form Submission",
            html: `
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email." });
    }
}
