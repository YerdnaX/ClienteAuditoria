const { getConnection } = require('../config/db');

const ERROR_BASE_DATOS = {
  error: {
    message: 'No se pudo conectar a la base de datos',
    code: '1_001_000',
  },
};

async function obtenerAuditoriasLogin(req, res) {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(`
      SELECT
        IdAuditoria,
        IdUsuario,
        CorreoIngresado,
        Resultado,
        Motivo,
        DireccionIP,
        UserAgent,
        FechaIntento
      FROM AuditoriaLogin
      ORDER BY FechaIntento DESC, IdAuditoria DESC
    `);

    res.json({ auditoriasLogin: result.recordset });
  } catch (error) {
    res.status(500).json(ERROR_BASE_DATOS);
  }
}

module.exports = {
  obtenerAuditoriasLogin,
};
