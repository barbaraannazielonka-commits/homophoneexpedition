import React, { useState } from 'react';
import { Star, Lock, Check, MapPin, Sparkles, Trophy, BookOpen, Download } from 'lucide-react';
import { EXPEDITION_STAGES } from '../data/homophonesData';
import { ExpeditionStage, PlayerProgress } from '../types/homophones';
import { StageChallengeModal } from './StageChallengeModal';
import { soundFx } from '../services/soundFx';

// Direct ESM imports so Vite bundles and fingerprints images for production/Cloudflare
import mapBackdropAsset from '../assets/images/treasure_map_backdrop_1791783713987.jpg';
import compassRelicAsset from '../assets/images/compass_astrolabe_relic_1791783726090.jpg';

const MAP_IMAGE = mapBackdropAsset || '/treasure_map.jpg';
const COMPASS_IMAGE = compassRelicAsset || '/compass_relic.jpg';

interface ExpeditionMapProps {
  progress: PlayerProgress;
  onUpdateProgress: (newProgress: PlayerProgress) => void;
  onOpenVault: () => void;
}

export const ExpeditionMap: React.FC<ExpeditionMapProps> = ({
  progress,
  onUpdateProgress,
  onOpenVault,
}) => {
  const [activeStage, setActiveStage] = useState<ExpeditionStage | null>(null);
  const [hoveredStage, setHoveredStage] = useState<ExpeditionStage | null>(null);

  const totalStars = Object.values(progress.stageStars).reduce((sum, s) => sum + s, 0);

  const isStageUnlocked = (stage: ExpeditionStage) => {
    return totalStars >= stage.requiredStars || stage.id <= progress.unlockedStage;
  };

  const handleStageClick = (stage: ExpeditionStage) => {
    if (isStageUnlocked(stage)) {
      soundFx.nodeSelect();
      setActiveStage(stage);
    } else {
      soundFx.incorrect();
    }
  };

  const handleStageCompleted = (stageId: number, starsEarned: number, expEarned: number) => {
    const currentStars = progress.stageStars[stageId] || 0;
    const newStars = Math.max(currentStars, starsEarned);

    const nextUnlocked = Math.max(progress.unlockedStage, stageId + 1);

    onUpdateProgress({
      ...progress,
      unlockedStage: nextUnlocked,
      stageStars: {
        ...progress.stageStars,
        [stageId]: newStars,
      },
      totalExpPoints: progress.totalExpPoints + expEarned,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Expedition Mission Briefing Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-mono mb-2">
              <span className="font-bold">HOMOPHONE EXPEDITION</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">NANNESTAD HIGH SCHOOL - BARBARA ANNA ZIELONKA</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-400">18 EXPEDITION STARS</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight" style={{ textWrap: 'balance' }}>
              The Homophone Archipelago: The Cartographer’s Trail
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Navigate 6 treacherous island biomes where homophone traps mislead unprepared minds. Unravel contextual riddles, discern Latin etymologies, and collect gold stars to unlock the legendary Lexicographer’s Vault.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shrink-0">
            <img
              src={COMPASS_IMAGE}
              alt="Navigational Astrolabe Relic"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/compass_relic.jpg')) {
                  target.src = '/compass_relic.jpg';
                }
              }}
              className="w-14 h-14 object-cover rounded-lg border border-amber-500/40 shadow-md"
            />
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Expedition Stars</div>
              <div className="font-mono text-xl font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
                <span>{totalStars} / 18</span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {totalStars >= 10 ? 'Final Vault Ready' : `${10 - totalStars} more stars for Vault`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Canvas Container */}
      <div className="relative rounded-2xl border border-slate-300 dark:border-slate-800 overflow-hidden shadow-2xl bg-slate-950 aspect-[16/9] min-h-[460px] max-h-[700px]">
        {/* Map Image Backdrop with Resilient Fallback */}
        <img
          src={MAP_IMAGE}
          alt="Vintage Archipelago Expedition Map"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith('/treasure_map.jpg')) {
              target.src = '/treasure_map.jpg';
            }
          }}
          className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
        />

        {/* Ambient Darkened Vignette for UI Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/50 pointer-events-none" />

        {/* Top Left Compass Rose Overlay */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none hidden sm:block bg-slate-900/85 dark:bg-slate-950/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700 dark:border-slate-800 text-xs text-slate-100 shadow-md">
          <div className="font-display font-bold text-amber-300">Archipelago Coordinates</div>
          <div className="text-slate-300 dark:text-slate-400 font-mono text-[11px]">N 34° 22&apos; 18&quot; · W 119° 41&apos; 54&quot;</div>
        </div>

        {/* Top Right Download Map Image for GitHub / Offline Use */}
        <a
          href={MAP_IMAGE}
          download="homophone_treasure_map.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-900 text-amber-300 hover:text-amber-200 border border-amber-500/50 px-3.5 py-2 rounded-xl text-xs font-bold backdrop-blur-md transition-all shadow-xl hover:scale-105 cursor-pointer"
          title="Download original map image for GitHub"
        >
          <Download className="w-3.5 h-3.5 text-amber-400" />
          <span>Download Map Image</span>
        </a>

        {/* Trail SVG Connector Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 18% 38% Q 30% 30%, 44% 42% T 62% 48% T 78% 40% T 58% 18% T 78% 70%"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="opacity-70 animate-pulse"
          />
        </svg>

        {/* Interactive Stage Waypoint Pins */}
        {EXPEDITION_STAGES.map((stage) => {
          const unlocked = isStageUnlocked(stage);
          const starsEarned = progress.stageStars[stage.id] || 0;
          const isMastered = starsEarned === 3;
          const isNextActive = unlocked && starsEarned === 0;

          return (
            <div
              key={stage.id}
              style={{
                left: `${stage.xPercent}%`,
                top: `${stage.yPercent}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-20"
              onMouseEnter={() => setHoveredStage(stage)}
              onMouseLeave={() => setHoveredStage(null)}
            >
              <button
                onClick={() => handleStageClick(stage)}
                disabled={!unlocked}
                aria-label={`Expedition stage ${stage.id}: ${stage.name}`}
                className={`group relative flex flex-col items-center justify-center transition-all cursor-pointer ${
                  unlocked ? 'hover:scale-115 active:scale-95' : 'cursor-not-allowed opacity-75'
                }`}
              >
                {/* Waypoint Indicator Pin */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-display font-extrabold text-lg shadow-xl border-2 transition-all ${
                    isMastered
                      ? 'bg-amber-400 text-slate-950 border-amber-200 ring-4 ring-amber-400/30'
                      : unlocked
                      ? isNextActive
                        ? 'bg-amber-500 text-slate-950 border-white ring-4 ring-amber-500/50 animate-bounce'
                        : 'bg-slate-900 text-amber-300 border-amber-400/80 ring-2 ring-slate-950'
                      : 'bg-slate-900/90 text-slate-500 border-slate-700'
                  }`}
                >
                  {unlocked ? (
                    isMastered ? (
                      <Check className="w-6 h-6 stroke-[3]" />
                    ) : (
                      <span>{stage.id}</span>
                    )
                  ) : (
                    <Lock className="w-5 h-5 text-slate-500" />
                  )}
                </div>

                {/* Stars Under Pin */}
                {unlocked && (
                  <div className="flex items-center gap-0.5 mt-1 bg-slate-950/80 px-1.5 py-0.5 rounded-full border border-slate-800">
                    {[1, 2, 3].map((starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-2.5 h-2.5 ${
                          starIdx <= starsEarned
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Pin Name Label on Map */}
                <span className="mt-1 px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-[10px] sm:text-xs font-semibold text-slate-200 whitespace-nowrap shadow-md">
                  {stage.locationName}
                </span>
              </button>
            </div>
          );
        })}

        {/* Floating Tooltip When Hovering Waypoint */}
        {hoveredStage && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-30 bg-slate-900/95 backdrop-blur-md border border-amber-500/40 rounded-xl p-4 shadow-2xl animate-fade-in pointer-events-none">
            <div className="flex items-center justify-between text-xs text-amber-400 font-mono mb-1">
              <span>STAGE {hoveredStage.id}</span>
              <span>{progress.stageStars[hoveredStage.id] || 0} / 3 STARS</span>
            </div>
            <h4 className="font-display font-bold text-slate-100 text-base">
              {hoveredStage.name}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {hoveredStage.description}
            </p>
            <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                {isStageUnlocked(hoveredStage) ? 'Available to challenge' : `Requires ${hoveredStage.requiredStars} stars to unlock`}
              </span>
              <span className="text-amber-300 font-semibold">
                {isStageUnlocked(hoveredStage) ? 'Click to Embark →' : 'Locked'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Stage Cards Overview Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
              Expedition Waypoints & Word Pairs
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {totalStars} / 18 Stars Accumulated
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPEDITION_STAGES.map((stage) => {
            const unlocked = isStageUnlocked(stage);
            const starsEarned = progress.stageStars[stage.id] || 0;

            return (
              <div
                key={stage.id}
                className={`rounded-xl border p-5 transition-all ${
                  unlocked
                    ? 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-amber-500/50 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-950/60 border-slate-200 dark:border-slate-900 opacity-60'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-display font-bold text-amber-700 dark:text-amber-400 text-xs">
                      {stage.id}
                    </span>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-200 text-sm">
                      {stage.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3].map((starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-3.5 h-3.5 ${
                          starIdx <= starsEarned
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed">
                  {stage.description}
                </p>

                {/* Homophones Covered unboxed metadata */}
                <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80 mb-3">
                  <span className="text-amber-700 dark:text-amber-400/90 font-mono text-[11px]">HOMOPHONES:</span>
                  <div className="text-slate-700 dark:text-slate-300 mt-0.5 flex flex-wrap gap-x-2">
                    {stage.questions.map((q, idx) => (
                      <span key={q.id}>
                        {q.blankOptions.join('/')}
                        {idx < stage.questions.length - 1 && <span className="text-slate-400 dark:text-slate-600">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  disabled={!unlocked}
                  onClick={() => handleStageClick(stage)}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                    unlocked
                      ? starsEarned > 0
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200'
                        : 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold'
                      : 'bg-slate-200 dark:bg-slate-900 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                  }`}
                >
                  {unlocked ? (
                    starsEarned > 0 ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Replay Leg ({starsEarned}/3 Stars)</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Embark on Leg {stage.id}</span>
                      </>
                    )
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>Unlock with {stage.requiredStars} Stars</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Final Treasure Vault CTA Callout */}
      <div className="bg-amber-50/80 dark:bg-gradient-to-r dark:from-amber-950/40 dark:via-slate-900 dark:to-amber-950/40 border border-amber-300 dark:border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-amber-900 dark:text-amber-200">
              The Lexicographer’s Grand Hoard
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Accumulate at least 10 stars or complete Stage 6 to unlock the full Treasure Vault and Certificate of Eloquence.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            soundFx.click();
            onOpenVault();
          }}
          className="px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors whitespace-nowrap shrink-0 shadow-md cursor-pointer flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Inspect Treasure Vault</span>
        </button>
      </div>

      {/* Active Modal */}
      {activeStage && (
        <StageChallengeModal
          stage={activeStage}
          onClose={() => setActiveStage(null)}
          onCompleteStage={handleStageCompleted}
        />
      )}
    </div>
  );
};
