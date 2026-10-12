import React from 'react';
import { Volume2, VolumeX, Sparkles, Compass, Sun, Moon } from 'lucide-react';
import { GameMode, PlayerProgress } from '../types/homophones';
import { isAudioMuted, setAudioMuted, soundFx } from '../services/soundFx';

interface HeaderProps {
  currentMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
  progress: PlayerProgress;
  onOpenVault: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  progress,
  onOpenVault,
  isDark,
  onToggleTheme,
}) => {
  const [muted, setMuted] = React.useState(isAudioMuted());

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    setAudioMuted(next);
    if (!next) {
      soundFx.click();
    }
  };

  const totalStars = Object.values(progress.stageStars).reduce((sum, s) => sum + s, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 px-6 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Prominent Homophone Expedition and School Attribution */}
        <button
          onClick={() => {
            soundFx.click();
            onSelectMode('EXPEDITION');
          }}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8 sm:w-9 sm:h-9 text-amber-600 dark:text-amber-400 group-hover:rotate-45 transition-transform duration-300 shrink-0" />
            <div className="flex flex-col">
              <div className="flex flex-wrap items-baseline gap-x-2.5">
                <span className="font-display text-xl sm:text-2xl font-black tracking-wide text-amber-700 dark:text-amber-300 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors whitespace-nowrap">
                  Homophone Expedition
                </span>
                <span className="hidden xl:inline text-amber-500 font-bold text-lg" aria-hidden="true">·</span>
                <span className="hidden xl:inline font-display text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                  Nannestad High School - Barbara Anna Zielonka
                </span>
              </div>
              <span className="xl:hidden font-display text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 tracking-tight">
                Nannestad High School - Barbara Anna Zielonka
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: 4 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => {
              soundFx.click();
              onSelectMode('EXPEDITION');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentMode === 'EXPEDITION'
                ? 'text-amber-700 dark:text-amber-300 border-amber-600 dark:border-amber-400 font-semibold'
                : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Expedition Map
          </button>

          <button
            onClick={() => {
              soundFx.click();
              onSelectMode('PROOFREAD');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentMode === 'PROOFREAD'
                ? 'text-amber-700 dark:text-amber-300 border-amber-600 dark:border-amber-400 font-semibold'
                : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Editor’s Gauntlet
          </button>

          <button
            onClick={() => {
              soundFx.click();
              onSelectMode('BLITZ');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentMode === 'BLITZ'
                ? 'text-amber-700 dark:text-amber-300 border-amber-600 dark:border-amber-400 font-semibold'
                : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Speed Blitz Duel
          </button>

          <button
            onClick={() => {
              soundFx.click();
              onSelectMode('MANUAL');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentMode === 'MANUAL'
                ? 'text-amber-700 dark:text-amber-300 border-amber-600 dark:border-amber-400 font-semibold'
                : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Lexicon Codex
          </button>
        </nav>

        {/* Zone 3: 1 primary action container */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Metadata: Stars and Exp unboxed */}
          <div className="hidden sm:flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
            <span className="text-amber-600 dark:text-amber-400 font-medium">★ {totalStars} / 18</span>
            <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
            <span className="text-emerald-600 dark:text-emerald-400 tabular-nums">{progress.totalExpPoints} EXP</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label={muted ? 'Unmute game audio' : 'Mute game audio'}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-amber-400 dark:hover:border-amber-500/50 hover:text-amber-700 dark:hover:text-amber-300 transition-colors cursor-pointer shadow-xs"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => {
              soundFx.click();
              onOpenVault();
            }}
            className="px-3.5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Treasure Vault</span>
          </button>
        </div>
      </div>
    </header>
  );
};

