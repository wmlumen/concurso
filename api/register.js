import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Simulación de DB en memoria (usa una DB real en producción)
const usuariosPendientes = [];

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,    // tu mail para enviar
    pass: process.env.EMAIL_PASS     // tu contraseña o app password
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { nombre, ci, email, lat, lon } = req.body;

  if (!nombre || !ci || !email || !lat || !lon) {
    res.status(400).json({ error: 'Faltan datos obligatorios' });
    return;
  }

  // Generar token único para validar el mail
  const token = crypto.randomBytes(20).toString('hex');

  // Guardar usuario pendiente (ejemplo, en producción guarda en DB)
  usuariosPendientes.push({ nombre, ci, email, lat, lon, token, estado: 'pendiente' });

  // Enlace para validar
  const urlValidacion = `${process.env.BASE_URL}/api/validate?token=${token}`;

  // Preparar mail
  const mailOptions = {
    from: `"DocentePy" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Valida tu correo para activar tu cuenta en DocentePy',
    html: `
      <p>Hola ${nombre},</p>
      <p>Gracias por registrarte. Para activar tu cuenta haz clic en el siguiente enlace:</p>
      <a href="${urlValidacion}">Activar mi cuenta</a>
      <p>Si no solicitaste este registro, ignora este correo.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo de validación enviado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar correo' });
  }
}
