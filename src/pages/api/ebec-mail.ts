import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const payload = `Site üzerinden ${new Date().toDateString()} Bir Başvuru Yapıldı.<br/>
  Birinci Yarışmacı:<br/>
  Isim:${req.body?.[0]?.Name} ${req.body?.[0]?.Surname}<br/>
  Ogrenci Numarasi:${req.body?.[0]?.StudentId}<br/>
  Email:${req.body?.[0]?.Email}<br/>
  Telefonu:${req.body?.[0]?.PhoneNumber}<br/>
  Bölüm:${req.body?.[0]?.Faculty} ${req.body?.[0]?.Major}<br/>
  İkinci Yarışmacı:
  Isim:${req.body?.[1]?.Name} ${req.body?.[1]?.Surname}<br/>
  Ogrenci Numarasi:${req.body?.[1]?.StudentId}<br/>
  Email:${req.body?.[1]?.Email}<br/>
  Telefonu:${req.body?.[1]?.PhoneNumber}<br/>
  Bölüm:${req.body?.[1]?.Faculty} ${req.body?.[1]?.Major}<br/>
  Üçüncü Yarışmacı:<br/>
  Isim:${req.body?.[2]?.Name} ${req.body?.[2]?.Surname}<br/>
  Ogrenci Numarasi:${req.body?.[2]?.StudentId}<br/>
  Email:${req.body?.[2]?.Email}<br/>
  Telefonu:${req.body?.[2]?.PhoneNumber}<br/>
  Bölüm:${req.body?.[2]?.Faculty} ${req.body?.[2]?.Major}<br/>
  Dördüncü Yarışmacı:<br/>
  Isim:${req.body?.[3]?.Name} ${req.body?.[3]?.Surname}<br/>
  Ogrenci Numarasi:${req.body?.[3]?.StudentId}<br/>
  Email:${req.body?.[3]?.Email}<br/>
  Telefonu:${req.body?.[3]?.PhoneNumber}<br/>
  Bölüm:${req.body?.[3]?.Faculty} ${req.body?.[3]?.Major}<br/>
  `;

  const msg = {
    to: 'yekta.yuksel@gmail.com',
    from: 'contact@em3543.bestizmirege.org',
    subject: `EBEC Başvuru`,
    text: payload,
    html: payload,
  };
  try {
    const response = await sgMail.send(msg);
    res.send(response);
  } catch (e) {
    console.log(e);

    res.send(e);
  }
};
