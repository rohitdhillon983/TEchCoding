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
    // const transporter = nodemailer.createTransport({
    //     service: "Gmail",
    //     auth: {
    //         user: "info@techcoding.in", // Admin email (use environment variables)
    //         pass: "Khushidhillon983", // Admin email password or App Password
    //     },
    // });
    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER, // Main mailbox
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: "info@techcoding.in", // Replace with your admin email
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

        await transporter.sendMail({
            from: '"TechCoding" <info@techcoding.in>',
            to: email,
            subject: `Thank You, ${name}! Our Team Will Contact You Soon`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8" />
            </head>
            <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td align="center" style="padding:40px 20px;">
                    
                    <table width="600" cellpadding="0" cellspacing="0"
                        style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

                        <tr>
                        <td style="background:#b91202;padding:30px;text-align:center;">
                            <h1 style="color:#ffffff;margin:0;">
                            TechCoding
                            </h1>
                            <p style="color:#e5e7eb;margin-top:10px;">
                            Website & App Development Solutions
                            </p>
                        </td>
                        </tr>

                        <tr>
                        <td style="padding:40px;">
                            <h2 style="margin-top:0;color:#111827;">
                            Hi ${name} 👋
                            </h2>

                            <p style="color:#4b5563;line-height:1.8;">
                            Thank you for reaching out to <strong>TechCoding</strong>.
                            We have successfully received your message.
                            </p>

                            <p style="color:#4b5563;line-height:1.8;">
                            Our team will review your inquiry and get back to you
                            within <strong>24 hours</strong>.
                            </p>

                            <div style="
                            background:#f8fafc;
                            border-left:4px solid #b91202;
                            padding:15px;
                            margin:25px 0;
                            border-radius:6px;
                            ">
                            <p style="margin:0;color:#111827;">
                                <strong>Your Submitted Details</strong>
                            </p>
                            <p style="margin:8px 0 0;">
                                Name: ${name}<br/>
                                Email: ${email}<br/>
                                Contact: ${contact}
                            </p>
                            </div>

                            <p style="color:#4b5563;line-height:1.8;">
                            If your request is urgent, feel free to reply directly to this email.
                            </p>

                            <div style="text-align:center;margin-top:35px;">
                            <a href="https://techcoding.in"
                                style="
                                background:#b91202;
                                color:#fff;
                                text-decoration:none;
                                padding:12px 24px;
                                border-radius:8px;
                                display:inline-block;
                                ">
                                Visit TechCoding
                            </a>
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <td style="
                            background:#f9fafb;
                            padding:25px;
                            text-align:center;
                            color:#6b7280;
                            font-size:14px;
                        ">
                            © ${new Date().getFullYear()} TechCoding<br/>
                            Website Development • Mobile Apps • UI/UX Design
                        </td>
                        </tr>

                    </table>

                    </td>
                </tr>
                </table>
            </body>
            </html>
            `,
            });

        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email." });
    }
}
