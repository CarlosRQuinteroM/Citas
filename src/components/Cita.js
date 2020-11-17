import React from 'react';

const Cita = ({cita, eliminarCita}) => (
<div className="cita">
<p>Mascota:<spam>{cita.mascota}</spam> </p>
<p>Dueño:<spam>{cita.propietario}</spam> </p>
<p>Fecha:<spam>{cita.fecha}</spam> </p>
<p>Hora:<spam>{cita.hora}</spam> </p>
<p>Sintomas:<spam>{cita.sintomas}</spam> </p>

<button
className="button eliminar u-full-width"
 onClick={() => eliminarCita(cita.id) }
> Eliminar &times;</button>
</div>
);

export default Cita;