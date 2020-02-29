import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [consultarPresupuesto, setConsultarPresupuesto] = useState(true)

  const [gastos, setGastos] = useState([])
  const [gasto, saveGasto] = useState([])

  const [crearGasto , setCrearGasto] = useState(false)  


  useEffect(() => {
    if(crearGasto){
      
                  
      setGastos([...gastos, gasto])


      const presupRestante = restante - gasto.cantidad

      setRestante(presupRestante)

      setCrearGasto(false)

    }
  }, [gasto,gastos,restante,crearGasto])


  return (
    <div className="container">
      <header>
        <h1>HOLA</h1>
        <div className="contenido-principal contenido">
          {
            consultarPresupuesto ?
              (
                <Pregunta
                  setPresupuesto={setPresupuesto}
                  setRestante={setRestante}
                  setConsultarPresupuesto={setConsultarPresupuesto}
                />
              )
              :
              (

                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      setPresupuesto={setPresupuesto}
                      setRestante={setRestante}
                      saveGasto={saveGasto}
                      setCrearGasto={setCrearGasto}
                    />

                  </div>
                  <div className="one-half column">
                    <Listado gastos={gastos}/>
                    <ControlPresupuesto
                    
                      presupuesto={presupuesto}
                      restante={restante}
                    
                    />

                  </div>
                </div>

              )
          }
        </div>
      </header>

    </div>
  );
}

export default App;
