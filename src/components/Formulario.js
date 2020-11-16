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
      const [error, actualizarError ] = useState(false)


     // Funcion que se ejecuta cada que el usuario escribe en un input
     const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]:  e.target.value
        })
       }

       //Extraer los valores
       const {mascota, propietario, fecha, hora, sintomas } = cita;

       //Cuando el usuario preciona agregar cita 
       const submitCita = e => {
           e.preventDefault();
            
           
          //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }


          //asignar un ID

          //crear la cita 
          
          //reiniciar el form
       }


      return ( 
        <Fragment>
        <h2> Crear Cita</h2>

        {error? <p className="alerta-error">Todos los campos son obligatorios</p>  : null}

        <form
        onSubmit={submitCita}
        >

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