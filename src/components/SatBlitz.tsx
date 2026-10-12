import React, { useState, useEffect } from 'react';
import { Timer, Zap, Trophy, RotateCcw, CheckCircle2, AlertCircle, Play } from 'lucide-react';
import { BLITZ_QUESTIONS } from '../data/homophonesData';
import { BlitzQuestion, PlayerProgress } from '../types/homophones';
import { soundFx } from '../services/soundFx';

interface SatBlitzProps {
  progress: PlayerProgress;
  onUpdateProgress: (newProgress: PlayerProgress) => void;
}

export const SatBlitz: React.FC<SatBlitzProps> = ({
  progress,
  onUpdateProgress,
}) => {
  const [gameState, setGameState] = useState<'IDLE' | 'PLAYING' | 'SUMMARY'>('IDLE');
  const [timeLeft, setTimeLeft] = useState(60);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [questions, setQuestions] = useState<BlitzQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [lastResult, setLastResult] = useState<'correct' | 'wrong' | null>(null);
  const [missedQuestions, setMissedQuestions] = useState<{ question: BlitzQuestion; chosen: string }[]>([]);

  // Shuffle questions on start
  const startGame = () => {
    soundFx.click();
    const shuffled = [...BLITZ_QUESTIONS].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setQuestionIdx(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(60);
    setMissedQuestions([]);
    setLastResult(null);
    setGameState('PLAYING');
  };

  // Timer loop
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, score, streak, maxStreak]);

  const finishGame = () => {
    soundFx.fanfare();
    setGameState('SUMMARY');

    // Update high score & exp
    const newHighScore = Math.max(progress.highScoreBlitz, score);
    onUpdateProgress({
      ...progress,
      highScoreBlitz: newHighScore,
      totalExpPoints: progress.totalExpPoints + score,
    });
  };

  const handleAnswer = (option: string) => {
    if (gameState !== 'PLAYING' || questions.length === 0) return;

    const currentQ = questions[questionIdx];
    const isCorrect = option === currentQ.correct;

    if (isCorrect) {
      soundFx.correct();
      setLastResult('correct');
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak((prev) => Math.max(prev, newStreak));

      // Streak multiplier: 1-2 streak = 10pts, 3-4 = 15pts, 5+ = 20pts
      const multiplier = newStreak >= 5 ? 2.0 : newStreak >= 3 ? 1.5 : 1.0;
      const pts = Math.round(10 * multiplier);
      setScore((prev) => prev + pts);
    } else {
      soundFx.incorrect();
      setLastResult('wrong');
      setStreak(0);
      setMissedQuestions((prev) => [...prev, { question: currentQ, chosen: option }]);
    }

    // Move to next question or loop
    if (questionIdx + 1 < questions.length) {
      setQuestionIdx((prev) => prev + 1);
    } else {
      // reshuffle and continue until time runs out
      setQuestions([...BLITZ_QUESTIONS].sort(() => Math.random() - 0.5));
      setQuestionIdx(0);
    }
  };

  const currentQ = questions[questionIdx];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Intro Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-mono mb-2">
              <span className="font-bold">HOMOPHONE EXPEDITION</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">NANNESTAD HIGH SCHOOL - BARBARA ANNA ZIELONKA</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-400">60-SECOND DRILL</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight" style={{ textWrap: 'balance' }}>
              Speed Blitz Duel: High-Speed Homophones
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Race the clock! Build your accuracy streak to activate scoring multipliers.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl shrink-0">
            <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Personal Best</div>
              <div className="font-mono text-lg font-bold text-amber-700 dark:text-amber-300">
                {progress.highScoreBlitz} PTS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Game Interface */}
      {gameState === 'IDLE' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center shadow-xl space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Zap className="w-10 h-10 animate-pulse" />
          </div>

          <div className="max-w-md mx-auto">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Are You Ready to Test Your Reflexes?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              You will have 60 seconds to solve as many tricky homophone dilemmas as you can. Maintain an unbroken streak to double your points.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-mono py-2">
            <span>60s CountDown</span>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            <span>Up to 2.0x Combo Multipliers</span>
            <span className="text-slate-400 dark:text-slate-600">·</span>
            <span>Over 25+ High School Pairs</span>
          </div>

          <button
            onClick={startGame}
            className="py-3.5 px-8 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold rounded-xl transition-all shadow-lg cursor-pointer inline-flex items-center gap-2 text-base"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            <span>Launch Speed Blitz</span>
          </button>
        </div>
      )}

      {gameState === 'PLAYING' && currentQ && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Top HUD Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            {/* Timer with color escalation */}
            <div className="flex items-center gap-2">
              <Timer className={`w-5 h-5 ${timeLeft <= 10 ? 'text-rose-500 animate-bounce' : 'text-amber-600 dark:text-amber-400'}`} />
              <span className={`font-mono text-2xl font-black ${timeLeft <= 10 ? 'text-rose-500' : 'text-slate-900 dark:text-slate-100'}`}>
                {timeLeft}s
              </span>
            </div>

            {/* Streak & Multiplier */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">STREAK</div>
                <div className="font-mono text-base font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1 justify-end">
                  <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{streak}x</span>
                </div>
              </div>

              {/* Score */}
              <div className="text-right pl-3 border-l border-slate-200 dark:border-slate-800">
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">SCORE</div>
                <div className="font-mono text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {score}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Timer Line */}
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 10 ? 'bg-rose-500' : 'bg-amber-400'
              }`}
              style={{ width: `${(timeLeft / 60) * 100}%` }}
            />
          </div>

          {/* Question Pair Category */}
          <div className="text-center">
            <span className="text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold">
              {currentQ.pairName}
            </span>
          </div>

          {/* The Sentence */}
          <div className="p-6 bg-slate-50 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
              {currentQ.sentence}
            </p>
          </div>

          {/* Options Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {currentQ.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="py-4 px-6 bg-slate-100 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-slate-750 active:bg-amber-400 active:text-slate-950 border border-slate-200 dark:border-slate-700 hover:border-amber-400 rounded-xl text-lg font-bold text-slate-900 dark:text-slate-100 transition-all cursor-pointer shadow-sm text-center"
              >
                {option}
              </button>
            ))}
          </div>

          {/* Feedback Flash Indicator */}
          {lastResult && (
            <div className="text-center text-xs font-mono">
              {lastResult === 'correct' ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ STREAK MAINTAINED! +POINTS</span>
              ) : (
                <span className="text-rose-600 dark:text-rose-400 font-bold">✗ STREAK RESET</span>
              )}
            </div>
          )}
        </div>
      )}

      {gameState === 'SUMMARY' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100">
              Round Complete!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Outstanding linguistic reflexes under time pressure.
            </p>
          </div>

          {/* Stats Breakdown */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">Final Score</div>
              <div className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                {score}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">Max Streak</div>
              <div className="font-mono text-2xl font-bold text-amber-700 dark:text-amber-300 mt-1">
                {maxStreak}x
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">Best Record</div>
              <div className="font-mono text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">
                {progress.highScoreBlitz}
              </div>
            </div>
          </div>

          {/* Missed Questions Review */}
          {missedQuestions.length > 0 && (
            <div className="text-left max-w-lg mx-auto bg-slate-50 dark:bg-slate-950/70 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Review Missed Words ({missedQuestions.length}):</span>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {missedQuestions.map((item, idx) => (
                  <div key={idx} className="text-xs border-b border-slate-200 dark:border-slate-800/80 pb-1.5">
                    <p className="text-slate-800 dark:text-slate-300">{item.question.sentence}</p>
                    <div className="mt-0.5 text-slate-500 dark:text-slate-400 flex items-center gap-2 font-mono">
                      <span className="text-rose-600 dark:text-rose-400">Picked: {item.chosen}</span>
                      <span>·</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Correct: {item.question.correct}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={startGame}
              className="py-3 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Duel Again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
