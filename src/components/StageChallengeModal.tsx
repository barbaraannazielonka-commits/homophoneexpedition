import React, { useState } from 'react';
import { X, Volume2, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, Star, BookOpen, Compass } from 'lucide-react';
import { ExpeditionStage, StageQuestion } from '../types/homophones';
import { soundFx } from '../services/soundFx';

interface StageChallengeModalProps {
  stage: ExpeditionStage;
  onClose: () => void;
  onCompleteStage: (stageId: number, starsEarned: number, expEarned: number) => void;
}

export const StageChallengeModal: React.FC<StageChallengeModalProps> = ({
  stage,
  onClose,
  onCompleteStage,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [revealedClues, setRevealedClues] = useState<Record<number, boolean>>({});
  const [scoreCount, setScoreCount] = useState(0);
  const [stageFinished, setStageFinished] = useState(false);

  const question: StageQuestion = stage.questions[currentIdx];

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    soundFx.click();
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) {
      soundFx.correct();
      setScoreCount((prev) => prev + 1);
    } else {
      soundFx.incorrect();
    }
  };

  const handleNextQuestion = () => {
    soundFx.click();
    if (currentIdx + 1 < stage.questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setRevealedClues({});
    } else {
      // Stage finished
      const total = stage.questions.length;
      const finalScore = scoreCount + (selectedAnswer === question.correctAnswer ? 0 : 0);
      let stars = 1;
      if (finalScore === total) stars = 3;
      else if (finalScore >= total - 1) stars = 2;

      const exp = finalScore * 100 + (stars === 3 ? 150 : 50);
      soundFx.fanfare();
      setStageFinished(true);
      onCompleteStage(stage.id, stars, exp);
    }
  };

  const toggleClue = (clueIdx: number) => {
    soundFx.click();
    setRevealedClues((prev) => ({
      ...prev,
      [clueIdx]: !prev[clueIdx],
    }));
  };

  // Render stage finished summary
  if (stageFinished) {
    const total = stage.questions.length;
    let stars = 1;
    if (scoreCount === total) stars = 3;
    else if (scoreCount >= total - 1) stars = 2;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
        <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-amber-400/40 dark:border-amber-500/30 rounded-2xl p-8 shadow-2xl text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>

          <h2 className="font-display text-2xl font-bold text-amber-800 dark:text-amber-200 mb-2">
            Expedition Leg Completed!
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            You successfully navigated the linguistic waters of {stage.name}.
          </p>

          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((starNum) => (
              <Star
                key={starNum}
                className={`w-9 h-9 ${
                  starNum <= stars
                    ? 'text-amber-400 fill-amber-400 scale-110 transition-transform'
                    : 'text-slate-300 dark:text-slate-700'
                }`}
              />
            ))}
          </div>

          <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 mb-6 text-sm">
            <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 py-1">
              <span>Accuracy</span>
              <span className="font-mono text-amber-700 dark:text-amber-300 font-bold">
                {scoreCount} / {total} Correct
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 py-1">
              <span>Expedition Stars</span>
              <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">+{stars} Stars</span>
            </div>
            <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 py-1">
              <span>Experience Points</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                +{scoreCount * 100 + (stars === 3 ? 150 : 50)} EXP
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.click();
              onClose();
            }}
            className="w-full py-3 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer shadow-lg"
          >
            Continue Expedition Trail
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400/90 font-mono">
              <span>STAGE {stage.id}</span>
              <span aria-hidden="true">·</span>
              <span>QUESTION {currentIdx + 1} OF {stage.questions.length}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              {stage.name}
            </h3>
          </div>
          <button
            onClick={() => {
              soundFx.click();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close stage dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Scenario Box */}
        <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-200 mb-1">{question.title}</p>
              <p className="text-slate-600 dark:text-slate-300">{question.scenario}</p>
            </div>
          </div>
        </div>

        {/* The Sentence with Blank */}
        <div className="mt-6 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
            Complete the Sentence
          </p>
          <div className="text-base sm:text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
            {question.sentenceWithBlank.split('_____').map((part, index, arr) => (
              <React.Fragment key={index}>
                <span>{part}</span>
                {index < arr.length - 1 && (
                  <span
                    className={`inline-block mx-1.5 px-3 py-0.5 rounded-md font-mono text-sm sm:text-base border transition-all ${
                      selectedAnswer
                        ? isAnswerSubmitted
                          ? selectedAnswer === question.correctAnswer
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-500 font-bold dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-800 border-rose-500 line-through dark:bg-rose-950 dark:text-rose-300'
                          : 'bg-amber-200/60 text-amber-900 border-amber-400 font-bold dark:bg-amber-400/20 dark:text-amber-300'
                        : 'bg-slate-200 text-amber-700 border-slate-300 dark:bg-slate-800 dark:text-amber-400 dark:border-slate-700 underline decoration-amber-500 decoration-2'
                    }`}
                  >
                    {selectedAnswer || '_____'}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Blank Options */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              CHOOSE THE CORRECT HOMOPHONE:
            </span>
            <div className="flex items-center gap-2">
              {question.blankOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    soundFx.speakWord(opt.split('/')[0].trim());
                  }}
                  className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400/80 hover:text-amber-600 dark:hover:text-amber-300 transition-colors cursor-pointer"
                  title={`Listen to pronunciation of "${opt}"`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Pronounce &quot;{opt}&quot;</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.blankOptions.map((option) => {
              const isSelected = selectedAnswer === option;
              let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 hover:border-slate-300 dark:hover:bg-slate-750 dark:hover:border-slate-600';

              if (isAnswerSubmitted) {
                if (option === question.correctAnswer) {
                  btnStyle = 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-800 dark:text-rose-200';
                } else {
                  btnStyle = 'opacity-40 bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500';
                }
              } else if (isSelected) {
                btnStyle = 'bg-amber-100 dark:bg-amber-500/20 border-amber-500 dark:border-amber-400 text-amber-900 dark:text-amber-200 font-semibold shadow-sm';
              }

              return (
                <button
                  key={option}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(option)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                >
                  <span className="text-base font-semibold">{option}</span>
                  {isAnswerSubmitted && option === question.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {isAnswerSubmitted && isSelected && option !== question.correctAnswer && (
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clues Accordion */}
        <div className="mt-6 border-t border-slate-200 dark:border-slate-800/80 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Expedition Field Clues & Mnemonics
            </span>
          </div>

          <div className="space-y-2">
            {question.clues.map((clue, idx) => {
              const isRevealed = revealedClues[idx];
              return (
                <div key={idx} className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 overflow-hidden text-xs">
                  <button
                    onClick={() => toggleClue(idx)}
                    className="w-full p-2.5 flex items-center justify-between text-left text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-200 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <span className="capitalize font-medium">
                      {clue.type === 'riddle' ? 'Island Riddle' : clue.type === 'etymology' ? 'Etymological Origin' : 'Memory Mnemonic'}
                    </span>
                    <span className="text-amber-600 dark:text-amber-400 font-mono font-semibold">
                      {isRevealed ? 'Hide' : 'Reveal Clue'}
                    </span>
                  </button>
                  {isRevealed && (
                    <div className="p-3 bg-amber-50/50 dark:bg-amber-950/10 border-t border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      &quot;{clue.text}&quot;
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Post-Submit Explanation */}
        {isAnswerSubmitted && (
          <div
            className={`mt-6 p-4 rounded-xl border text-sm leading-relaxed animate-fade-in ${
              selectedAnswer === question.correctAnswer
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/40 text-emerald-800 dark:text-emerald-200'
                : 'bg-rose-50 dark:bg-rose-950/30 border-rose-500/40 text-rose-800 dark:text-rose-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold mb-1">
              {selectedAnswer === question.correctAnswer ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Brilliant deduction! Correct.</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <span>Homophone Trap Triggered!</span>
                </>
              )}
            </div>
            <p className="text-slate-700 dark:text-slate-300 mt-1">{question.explanation}</p>
          </div>
        )}

        {/* Action Controls */}
        <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          {!isAnswerSubmitted ? (
            <button
              disabled={!selectedAnswer}
              onClick={handleSubmitAnswer}
              className={`py-2.5 px-6 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-md ${
                selectedAnswer
                  ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                  : 'bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed'
              }`}
            >
              Confirm Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="py-2.5 px-6 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer shadow-md flex items-center gap-2"
            >
              <span>{currentIdx + 1 < stage.questions.length ? 'Next Challenge' : 'Complete Stage'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
