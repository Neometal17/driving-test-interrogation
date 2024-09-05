import './App.css'
import preguntas from './assets/JSON/preguntas.json' 

function App() {

  console.log(preguntas)

  // const temp_preguntas = preguntas.map(pregunta =>
  //   <div className='container'>
  //     <div className='left'>{pregunta.NUMERO}</div>
  //     <div className='rigth'>
  //       <p className='parrafix'><b>Tipo de Materia:</b> {pregunta.TIPO_DE_MATERIA}</p>
  //       <p className='parrafix'><b>Tema:</b> {pregunta.TEMA}</p>
  //       <p className='parrafix'><b>Descripcion Pregunta:</b> {pregunta.DESCRIPCION_DE_LA_PREGUNTA}</p>
  //       <p className='parrafix'><b>Opcion 1:</b> {pregunta.ALTERNATIVA_1}</p>
  //       <p className='parrafix'><b>Opcion 2:</b> {pregunta.ALTERNATIVA_2}</p>
  //       <p className='parrafix'><b>Opcion 3:</b> {pregunta.ALTERNATIVA_3}</p>
  //       <p className='parrafix'><b>Opcion 4:</b> {pregunta.ALTERNATIVA_4}</p>
  //       <p className='parrafix'><b>Respuesta:</b> {pregunta.RESPUESTA}</p>
  //     </div>
  //   </div>
  // );

  const temp_preguntas = preguntas.map(pregunta => 
    <div className='container'>
      <div className='left'>{pregunta.NUMERO}</div>
      <div className='right'>
        <div className='parrafix'><b>Tipo de Materia:</b> {pregunta.TIPO_DE_MATERIA}</div>
        <div className='parrafix'><b>Tema:</b> {pregunta.TEMA}</div>
        <div className='parrafix'><b>Descripcion Pregunta:</b> {pregunta.DESCRIPCION_DE_LA_PREGUNTA}</div>
        <div className='parrafix'><b>Opcion 1:</b> {pregunta.ALTERNATIVA_1}</div>
        <div className='parrafix'><b>Opcion 2:</b> {pregunta.ALTERNATIVA_2}</div>
        <div className='parrafix'><b>Opcion 3:</b> {pregunta.ALTERNATIVA_3}</div>
        <div className='parrafix'><b>Opcion 4:</b> {pregunta.ALTERNATIVA_4}</div>
        <div className='parrafix'><img src={`images/question-${pregunta.NUMERO}.png`}/></div>
        <div className='parrafix-center result-color'><b>Respuesta:</b> {pregunta.RESPUESTA}</div>
      </div>
    </div>
  );

  return (
    <div className='principal'>
      {temp_preguntas}
    </div>
  )
}

export default App
