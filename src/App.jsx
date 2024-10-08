import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [inputValue, setInputValue] = useState('')

  const adicionarTarefa = () => {
    if(inputValue.trim() ==='')return;
    setTarefas([...tarefas, inputValue])
    setInputValue('')
  };

  const removerTarefa = (index) => {
    const newTarefas = tarefas.filter((_, i) => i !== index)
    setTarefas(newTarefas);
  };


  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input
      type='text'
      value={inputValue}
      onChangeCapture={(e) => setInputValue(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
   </div>
  );
}

export default App
