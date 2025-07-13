export default function handler(req, res) {
  const { token } = req.query;

  // Buscar usuario pendiente
  const usuario = usuariosPendientes.find(u => u.token === token);

  if (!usuario) {
    res.status(400).send('<h1>Token inválido o ya usado.</h1>');
    return;
  }

  // Cambiar estado a activo (en DB actualizar)
  usuario.estado = 'activo';

  res.status(200).send('<h1>Cuenta activada correctamente. Ya podés ingresar a DocentePy.</h1>');
}
