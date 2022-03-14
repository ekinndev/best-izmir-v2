import type { NextApiRequest, NextApiResponse } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const payload = `Site üzerinden ${new Date().toDateString()} Bir Başvuru Yapıldı.<br/>
  <hr>
  <strong> Birinci Yarışmacı: </strong><br/>
  <strong>Isim:</strong> ${req.body?.[0]?.Name} ${req.body?.[0]?.Surname}<br/>
  <strong>Ogrenci Numarasi:</strong> ${req.body?.[0]?.StudentId}<br/>
  <strong>Email:</strong> ${req.body?.[0]?.Email}<br/>
  <strong>Telefonu:</strong> ${req.body?.[0]?.PhoneNumber}<br/>
  <strong>Bölüm:</strong> ${req.body?.[0]?.Faculty} ${req.body?.[0]?.Major}<br/>
  <hr>
  <strong>İkinci Yarışmacı:</strong> <br>
  <strong>Isim:</strong> ${req.body?.[1]?.Name} ${req.body?.[1]?.Surname}<br/>
  <strong>Ogrenci Numarasi:</strong> ${req.body?.[1]?.StudentId}<br/>
  <strong>Email:</strong> ${req.body?.[1]?.Email}<br/>
  <strong>Telefonu:</strong> ${req.body?.[1]?.PhoneNumber}<br/>
  <strong>Bölüm:</strong> ${req.body?.[1]?.Faculty} ${req.body?.[1]?.Major}<br/>
  <hr>
  <strong>Üçüncü Yarışmacı:</strong><br/>
  <strong>Isim:</strong> ${req.body?.[2]?.Name} ${req.body?.[2]?.Surname}<br/>
  <strong>Ogrenci Numarasi:</strong> ${req.body?.[2]?.StudentId}<br/>
  <strong>Email:</strong> ${req.body?.[2]?.Email}<br/>
  <strong>Telefonu:</strong> ${req.body?.[2]?.PhoneNumber}<br/>
  <strong>Bölüm:</strong> ${req.body?.[2]?.Faculty} ${req.body?.[2]?.Major}<br/>
  <hr>
  <strong>Dördüncü Yarışmacı:</strong><br/>
  <strong>Isim:</strong> ${req.body?.[3]?.Name} ${req.body?.[3]?.Surname}<br/>
  <strong>Ogrenci Numarasi:</strong> ${req.body?.[3]?.StudentId}<br/>
  <strong>Email:</strong> ${req.body?.[3]?.Email}<br/>
  <strong>Telefonu:</strong> ${req.body?.[3]?.PhoneNumber}<br/>
  <strong>Bölüm:</strong> ${req.body?.[3]?.Faculty} ${req.body?.[3]?.Major}<br/>
  <strong>Yarışma Tipi:</strong> ${req.body[3]?.CompetitionType}<br/>`;

  const msg = {
    to: process.env.EBEC_MAIL,
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
