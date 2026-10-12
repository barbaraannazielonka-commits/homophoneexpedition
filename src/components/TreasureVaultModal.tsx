import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Trophy, Sparkles, Star, Award, BookCheck, Zap, RotateCcw } from 'lucide-react';
import { PlayerProgress } from '../types/homophones';
import { soundFx } from '../services/soundFx';

// Direct ESM import so Vite bundles and fingerprints asset for production/Cloudflare
import compassRelicAsset from '../assets/images/compass_astrolabe_relic_1791783726090.jpg';

const COMPASS_IMAGE = compassRelicAsset || '/compass_relic.jpg';

interface TreasureVaultModalProps {
  progress: PlayerProgress;
  onClose: () => void;
  onResetProgress: () => void;
}

export const TreasureVaultModal: React.FC<TreasureVaultModalProps> = ({
  progress,
  onClose,
  onResetProgress,
}) => {
  const totalStars = Object.values(progress.stageStars).reduce((sum, s) => sum + s, 0);
  const isVaultUnlocked = totalStars >= 10;

  useEffect(() => {
    if (isVaultUnlocked) {
      soundFx.chestOpen();
      // Fire confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#fbbf24', '#10b981', '#38bdf8'],
        });
      } catch {
        // Ignore confetti if not supported
      }
    }
  }, [isVaultUnlocked]);

  const badges = [
    {
      id: 'b-stars',
      title: 'Island Navigator',
      desc: 'Earned at least 6 stars on the Expedition Map',
      achieved: totalStars >= 6,
      icon: Star,
    },
    {
      id: 'b-proof',
      title: 'Editor Laureate',
      desc: 'Proofread at least 1 manuscript completely',
      achieved: progress.proofreadCompleted.length >= 1,
      icon: BookCheck,
    },
    {
      id: 'b-blitz',
      title: 'Lightning Lexicographer',
      desc: 'Scored 50+ points in Speed Blitz Duel',
      achieved: progress.highScoreBlitz >= 50,
      icon: Zap,
    },
    {
      id: 'b-master',
      title: 'Grand Cartographer',
      desc: 'Unlocked the Legendary Vault with 10+ stars',
      achieved: totalStars >= 10,
      icon: Trophy,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-amber-400/50 dark:border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.click();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close vault dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vault Hero */}
        <div className="text-center space-y-3">
          <div className="relative inline-block mx-auto">
            <img
              src={COMPASS_IMAGE}
              alt="Golden Astrolabe Navigational Compass"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/compass_relic.jpg')) {
                  target.src = '/compass_relic.jpg';
                }
              }}
              className="w-24 h-24 object-cover rounded-2xl border-2 border-amber-400 shadow-xl mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-amber-400 text-slate-950 shadow-md">
              <Trophy className="w-4 h-4" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400">
              <span className="font-bold">HOMOPHONE EXPEDITION</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">NANNESTAD HIGH SCHOOL - BARBARA ANNA ZIELONKA</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-amber-900 dark:text-amber-200 mt-1">
              {isVaultUnlocked ? 'The Lexicographer’s Grand Hoard' : 'The Vault of Eloquence (Locked)'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md mx-auto">
              {isVaultUnlocked
                ? 'Conferred upon the scholar who successfully mastered high school homophones, conquered linguistic traps, and charted the entire archipelago.'
                : `Accumulate at least 10 Expedition Stars to unlock the final treasure chest and diploma. Current: ${totalStars} / 10 stars.`}
            </p>
          </div>
        </div>

        {/* Progress Metrics Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Stars Earned</div>
            <div className="font-mono text-xl font-bold text-amber-600 dark:text-amber-400 mt-0.5">
              {totalStars} / 18
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Manuscripts Vetted</div>
            <div className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {progress.proofreadCompleted.length} / 3
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Blitz Best</div>
            <div className="font-mono text-xl font-bold text-sky-600 dark:text-sky-400 mt-0.5">
              {progress.highScoreBlitz} PTS
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Total EXP</div>
            <div className="font-mono text-xl font-bold text-amber-700 dark:text-amber-300 mt-0.5">
              {progress.totalExpPoints}
            </div>
          </div>
        </div>

        {/* Unlocked Expedition Badges */}
        <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-5">
          <h3 className="font-display text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Scholarly Expedition Badges</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {badges.map((badge) => {
              const IconComp = badge.icon;
              return (
                <div
                  key={badge.id}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 transition-colors ${
                    badge.achieved
                      ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-500/40 text-slate-900 dark:text-slate-200'
                      : 'bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-850 opacity-50 text-slate-400'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      badge.achieved
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                      <span>{badge.title}</span>
                      {badge.achieved && (
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">UNLOCKED</span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificate Inscription if Unlocked */}
        {isVaultUnlocked && (
          <div className="mt-6 p-4 rounded-xl bg-amber-50/80 dark:bg-gradient-to-r dark:from-amber-500/10 dark:via-amber-400/10 dark:to-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-center">
            <p className="font-display font-bold text-amber-900 dark:text-amber-300 text-sm">
              &quot;Distinction in Literary & Contextual Discernment&quot;
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
              You have mastered discrete differences, complemented your syntax, and defended the highest principles of language!
            </p>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => {
              if (window.confirm('Reset your progress and restart the expedition from scratch?')) {
                onResetProgress();
                onClose();
              }
            }}
            className="text-xs text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1.5 cursor-pointer py-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Expedition Journey</span>
          </button>

          <button
            onClick={() => {
              soundFx.click();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-md"
          >
            Return to Expedition
          </button>
        </div>
      </div>
    </div>
  );
};
