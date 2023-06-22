import axios from 'axios';

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  const sendinblueConfig = {
    method: 'POST',
    url: 'https://api.sendinblue.com/v3/smtp/email',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.SENDINBLUE_API_KEY,
    },
    data: {
      sender: { name, email: 'info@medevent.fr' },  // Change "Your Name" to the "name" received from req.body
      to: [
        { email: 'yumotoayaka@gmail.com' },
      
      ],
      subject: `New Message From ${name} - ${subject}`,
      htmlContent: `<p>${message}</p>`,
      replyTo: { email, name }
    }
  };

  try {
    await axios(sendinblueConfig);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
