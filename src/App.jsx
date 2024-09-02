import './App.css'

let alunos = [
  {nome: 'diogo (sem)bunda', curso:['DS', 'ADM']},
  {nome: 'VICTHAI (Cem)bunda', curso:['MEIO AMBIENTE', 'ADM']}

]
function App() {
  

  return (
    <>
    {
      alunos.map((element)=>(
          <div key={element.nome}> 
          <h1>{element.nome} </h1>
          {
             element.curso.map((curso) => (
              <h1 key={curso}>{curso}</h1>
            ))
          }
          </div>
          
      ))
    }      
    </>
  )
}

export default App
