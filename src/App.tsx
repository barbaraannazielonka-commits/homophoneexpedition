import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExpeditionMap } from './components/ExpeditionMap';
import { EditorsGauntlet } from './components/EditorsGauntlet';
import { SatBlitz } from './components/SatBlitz';
import { FieldManual } from './components/FieldManual';
import { TreasureVaultModal } from './components/TreasureVaultModal';
import { GameMode, PlayerProgress } from './types/homophones';

const STORAGE_KEY = 'homophone_expedition_progress_v1';
const THEME_KEY = 'homophone_theme_mode';

const INITIAL_PROGRESS: PlayerProgress = {
  unlockedStage: 1,
  stageStars: {},
  highScoreBlitz: 0,
  proofreadCompleted: [],
  masteredWords: [],
  totalExpPoints: 0,
};

export default function App() {
  const [currentMode, setCurrentMode] = useState<GameMode>('EXPEDITION');
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
    }
    return false; // Default to light mode
  });

  const [progress, setProgress] = useState<PlayerProgress>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // Fallback to initial
        }
      }
    }
    return INITIAL_PROGRESS;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
  }, [isDark]);

  const handleUpdateProgress = (newProgress: PlayerProgress) => {
    setProgress(newProgress);
  };

  const handleResetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-amber-400/30 selection:text-amber-800 dark:selection:text-amber-200`}>
      {/* 3-Zone Header Contract */}
      <Header
        currentMode={currentMode}
        onSelectMode={setCurrentMode}
        progress={progress}
        onOpenVault={() => setIsVaultOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {currentMode === 'EXPEDITION' && (
          <ExpeditionMap
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onOpenVault={() => setIsVaultOpen(true)}
          />
        )}

        {currentMode === 'PROOFREAD' && (
          <EditorsGauntlet
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {currentMode === 'BLITZ' && (
          <SatBlitz
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {currentMode === 'MANUAL' && (
          <FieldManual
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}
      </main>

      {/* Clean Editorial Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
            <span className="font-display font-bold text-amber-700 dark:text-amber-400 tracking-wide">
              Homophone Expedition
            </span>
            <span className="text-amber-500 font-bold" aria-hidden="true">·</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Nannestad High School - Barbara Anna Zielonka
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>24 Academic Homophone Pairs</span>
          </div>
        </div>
      </footer>

      {/* Treasure Vault Modal */}
      {isVaultOpen && (
        <TreasureVaultModal
          progress={progress}
          onClose={() => setIsVaultOpen(false)}
          onResetProgress={handleResetProgress}
        />
      )}
    </div>
  );
}
