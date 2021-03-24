import logo from './logo.svg';
import './App.css';
import HabitTable from './components/HabitTable';
import Habit from './components/Habit';

function App() {
  return (
    <div className="container-fluid App">
      <div className="mb-5">
        <h1>Habit Tracker</h1>
      </div>
      <Habit />
    </div>
  );
}

export default App;
