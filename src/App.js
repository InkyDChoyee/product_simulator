import './App.css';
import DashBoard from './components/dashboard/DashBoard';
import InteractiveWebPage from './components/interactive/InteractiveWebPage';
import RobotSimulation from './components/robotsimulation/RobotSimulation';

function App() {
  return (
    <div className="App">
      <DashBoard />
      <InteractiveWebPage />
      <RobotSimulation />
    </div>
  );
}

export default App;
