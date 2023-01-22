import './styles/global.css';

import { Habit } from "./components/Habit";


function App() {
  return (
    <div>
      <Habit completed={33} />
      <Habit completed={33} />
      <Habit completed={353} />
      <Habit completed={33} />
    </div>

  )
}

export default App
