import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
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
            to: email, 
            subject: "Thank you for reaching out",
            html: `
                <h2>hii ${email}</h2>
                <p>Thank you for reaching out to us. We value your feedback and will get back to you as soon as possible.</p>
            `,
        });
        res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to send email." });
    }
}