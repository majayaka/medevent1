// pages/api/contact.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  const content = {
    to: ['floriane.majault@medevent.fr', 'philippe.bouillard@medevent.fr'],
    from: 'info@medevent.fr',
    subject: `New Message From ${name} - ${subject}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
