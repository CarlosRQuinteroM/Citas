import React, { Fragment, useState } from 'react';

const Formulario  = () => {

       // Crear State de Citas 
     const [cita, actualizarCita] = useState({
         mascota:  '',
         propietario: '',
         fecha: '',
         hora: '', 
         sintomas: '',
     });


     // Funcion que se ejecuta cada que el usuario escribe en un input
     const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]:  e.target.value
        })
       }
     
       //Extraer los valores
       const {mascota, propietario, fecha, hora, sintomas } = cita;

      return ( 
        <Fragment>
        <h2> Crear Cita</h2>

        <form>
      <label> Nombre Mascota </label>
      <input 
           type="text"
           name="mascota"
           className="u-full-width"
           placeholder="Nombre Mascota"
           onChange={actualizarState}
           value={mascota}
         
          />
         
         <label> Nombre Del Dueño</label>
         <input 
             type="text"
             name="propietario"
             className="u-full-width"
             placeholder="Nombre Dueño de la mascota "
             onChange={actualizarState}
             value={propietario}
           
           />

          <label>Fecha</label>
          <input
             type="Date"
             name="fecha"
             className="u-full-width"
             onChange={actualizarState}
             value={fecha}
            
          />

           <label>Hora</label>
           <input 
              type="Time"
              name="hora"
              className="u-full-width"
              onChange={actualizarState}
              value={hora}
              
            />
            
            <label> Sintomas</label>
            <textarea
             className="u-full-width"
             name="sintomas"
             onChange={actualizarState}
             value={sintomas}
             ></textarea>

             <button
             type="submit"
             className="u-full-width button-primary"
             >AGREGAR CITA</button>
        </form>

        </Fragment>
     );
}
 
export default Formulario ;