#!/bin/bash
set -e
DEST=/tmp/pi-looking-glass/src

# ── index.css ──────────────────────────────────────────────────────────────────
cat > $DEST/index.css << 'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --sidebar-w: 280px; }

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: #0a0a0f;
  color: #e2e8f0;
  overflow: hidden;
  height: 100vh;
}

::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }

.glass {
  background: rgba(15,23,42,0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.06);
}

.lens-card {
  transition: all 0.2s ease;
}
.lens-card:hover {
  transform: translateY(-1px);
  border-color: rgba(255,255,255,0.15) !important;
}

.profile-pill {
  transition: all 0.15s ease;
}
.profile-pill:hover, .profile-pill.active {
  transform: scale(1.02);
}

.sidebar-lens-btn {
  transition: all 0.15s ease;
  cursor: pointer;
}
.sidebar-lens-btn:hover {
  background: rgba(255,255,255,0.05);
}
.sidebar-lens-btn.active {
  background: rgba(99,102,241,0.15);
  border-left: 2px solid #6366f1;
}

.score-bar {
  transition: width 0.8s cubic-bezier(0.4,0,0.2,1);
}

@keyframes fadeIn {
  from { opacity:0; transform: translateY(8px); }
  to   { opacity:1; transform: translateY(0); }
}
.fade-in { animation: fadeIn 0.25s ease forwards; }

@keyframes pulse-dot {
  0%,100% { opacity:1; }
  50%      { opacity:0.4; }
}
.pulse-dot { animation: pulse-dot 2s infinite; }
CSS

echo "index.css ✓"

# ── main.jsx ───────────────────────────────────────────────────────────────────
cat > $DEST/main.jsx << 'JSX'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
JSX

echo "main.jsx ✓"

# ── App.jsx ────────────────────────────────────────────────────────────────────
cat > $DEST/App.jsx << 'JSX'
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
JSX

echo "App.jsx ✓"
