import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');

interface NextApiRequestAndSendGrid extends NextApiRequest {
  sgMail: any;
}

export default async (req: NextApiRequestAndSendGrid, res: NextApiResponse) => {
  req.sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const payload = `Site üzerinden ${new Date().toDateString()} Tarihinde Bir Form Dolduruldu.<br/>
  Isim:${req.body?.name}<br/>
  Email:${req.body?.email}<br/>
  Telefonu:${req.body?.number}<br/>
  Mesaj:${req.body?.message}<br/>
  `;

  const msg = {
    to: 'izmir@best-eu.org',
    from: 'contact@em3543.bestizmirege.org',
    subject: `${req.body?.subject} - Iletisim Formu Doldurumu`,
    text: payload,
    html: payload,
  };
  try {
    const response = await sgMail.send(msg);
    res.send(response);
  } catch (e) {
    res.send(e);
  }
};
