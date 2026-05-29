import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import LensWindow from './components/LensWindow';
import FullSystem from './components/modes/FullSystem';
import EmployeeBuilder from './components/modes/EmployeeBuilder';
import AIScenarioCoach from './components/modes/AIScenarioCoach';
import HomeView from './components/HomeView';

export default function App() {
  const [mode, setMode] = useState('home');           // home | full | builder | coach
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activeLens, setActiveLens] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSelectLens = useCallback((lensId) => {
    setActiveLens(lensId);
    if (mode === 'home') setMode('full');
  }, [mode]);

  const handleSelectProfile = useCallback((profileId) => {
    setSelectedProfile(profileId);
    if (mode === 'home') setMode('full');
  }, [mode]);

  const renderMain = () => {
    switch(mode) {
      case 'full':    return <FullSystem    profile={selectedProfile} activeLens={activeLens} onSelectLens={handleSelectLens} onSelectProfile={handleSelectProfile} />;
      case 'builder': return <EmployeeBuilder />;
      case 'coach':   return <AIScenarioCoach profile={selectedProfile} />;
      default:        return <HomeView onSelectMode={setMode} onSelectProfile={handleSelectProfile} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{background:'#0a0a0f'}}>
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen(p => !p)}
        mode={mode}
        onSelectMode={setMode}
        selectedProfile={selectedProfile}
        onSelectProfile={handleSelectProfile}
        activeLens={activeLens}
        onSelectLens={handleSelectLens}
      />
      <div className="flex-1 flex flex-col overflow-hidden" style={{marginLeft: sidebarOpen ? '280px' : '60px', transition:'margin 0.25s ease'}}>
        {renderMain()}
      </div>
    </div>
  );
}
