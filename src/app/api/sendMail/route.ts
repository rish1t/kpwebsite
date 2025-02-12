import nodemailer from "nodemailer";

export async function POST(req: { json: () => PromiseLike<{ name: any; city: any; phone: any; course: any; }> | { name: any; city: any; phone: any; course: any; }; }) {
  try {
    const { name, city, phone, course } = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kayaplanetacademy@gmail.com",
      subject: "New Academy Application",
      text: `Name: ${name}\nCity: ${city}\nPhone: ${phone}\nSelected Course: ${course}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Application sent successfully!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error sending email", error }), { status: 500 });
  }
}
