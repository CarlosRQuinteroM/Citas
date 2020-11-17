import React from 'react';

const Cita = ({cita}) => (
<div className="cita">
<p>Mascota:<spam>{cita.mascota}</spam> </p>
<p>Dueño:<spam>{cita.propietario}</spam> </p>
<p>Fecha:<spam>{cita.fecha}</spam> </p>
<p>Hora:<spam>{cita.hora}</spam> </p>
<p>Sintomas:<spam>{cita.sintomas}</spam> </p>
</div>
);

export default Cita;