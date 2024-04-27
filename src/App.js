import React, { useState } from 'react';
import './App.css';
import DashBoard from './components/dashboard/DashBoard';
import InteractiveWebPage from './components/interactive/InteractiveWebPage';
import RobotSimulation from './components/robotsimulation/RobotSimulation';

function App() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <div className="switching_btn">
        <button
          className="toDashboard"
          onClick={() => handleComponentChange('dashboard')}>
          데이터 시각화 대쉬보드
        </button>
        <button
          className="toInteractive"
          onClick={() => handleComponentChange('interactive')}>
          색상 선택 시뮬레이터
        </button>
        <button
          className="toRobotSimulator"
          onClick={() => handleComponentChange('robot')}>
          자율주행 로봇 시뮬레이터
        </button>
      </div>
      {activeComponent === 'dashboard' && <DashBoard />}
      {activeComponent === 'interactive' && <InteractiveWebPage />}
      {activeComponent === 'robot' && <RobotSimulation />}
    </div>
  );
}

export default App;
