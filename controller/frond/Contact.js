const nodemailer = require("nodemailer");
const {
    validationResult
} = require("express-validator");

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    service: 'gmail',
    secure: false,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

module.exports.index = async (res, req) => {
    const contact_page = "This is contact page content (replace with DB or config)";

    return res.json({
        success: true,
        metadata: "seo_contact",
        contact_page
    });
}

module.exports.sendMail = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array()
        });
    }

    try {
        const {
            name,
            email,
            phone,
            subject,
            message
        } = req.body;

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.MAIL_TO,
            subject: subject,
            html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/> ${message}</p>
        `
        };

        // Send mail
        if (process.env.QUEUE_MAIL === 'true') {
            // ممكن تحط هنا logic للـ queue
            await transporter.sendMail(mailOptions);
        } else {
            await transporter.sendMail(mailOptions);
        }

        return res.json({
            success: true,
            message: "Thanks for contacting us. We will contact you soon."
        });
    } catch (error) {
        console.error("Mail error:", error);
        return res.status(500).json({
            success: false,
            message: `Something went wrong while sending the message : ${error.message}`
        });
    }
}