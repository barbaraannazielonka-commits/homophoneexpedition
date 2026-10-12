import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, FileText, Search, Check, HelpCircle } from 'lucide-react';
import { PROOFREADING_ARTICLES } from '../data/homophonesData';
import { ProofreadingArticle, ProofreadingError, PlayerProgress } from '../types/homophones';
import { soundFx } from '../services/soundFx';

interface EditorsGauntletProps {
  progress: PlayerProgress;
  onUpdateProgress: (newProgress: PlayerProgress) => void;
}

export const EditorsGauntlet: React.FC<EditorsGauntletProps> = ({
  progress,
  onUpdateProgress,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(PROOFREADING_ARTICLES[0].id);
  const [fixedErrorIds, setFixedErrorIds] = useState<Record<string, string>>({}); // errorId -> selectedCorrectWord
  const [activeError, setActiveError] = useState<ProofreadingError | null>(null);
  const [showSentenceHints, setShowSentenceHints] = useState(false);

  const article: ProofreadingArticle =
    PROOFREADING_ARTICLES.find((a) => a.id === selectedArticleId) || PROOFREADING_ARTICLES[0];

  const totalErrorsInArticle = article.paragraphs.flatMap((p) => p.errors).length;
  const currentFixedInArticle = article.paragraphs
    .flatMap((p) => p.errors)
    .filter((err) => fixedErrorIds[err.id] === err.correctWord).length;

  const handleSelectArticle = (id: string) => {
    soundFx.click();
    setSelectedArticleId(id);
    setActiveError(null);
  };

  const handleFixWord = (error: ProofreadingError, option: string) => {
    if (option === error.correctWord) {
      soundFx.correct();
      const updated = {
        ...fixedErrorIds,
        [error.id]: option,
      };
      setFixedErrorIds(updated);

      // Check if all errors in article fixed
      const allErrors = article.paragraphs.flatMap((p) => p.errors);
      const isArticleFullyCorrected = allErrors.every(
        (err) => err.id === error.id || updated[err.id] === err.correctWord
      );

      if (isArticleFullyCorrected && !progress.proofreadCompleted.includes(article.id)) {
        soundFx.fanfare();
        onUpdateProgress({
          ...progress,
          proofreadCompleted: [...progress.proofreadCompleted, article.id],
          totalExpPoints: progress.totalExpPoints + 250,
        });
      } else {
        onUpdateProgress({
          ...progress,
          totalExpPoints: progress.totalExpPoints + 50,
        });
      }
    } else {
      soundFx.incorrect();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Intro Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-mono mb-2">
              <span className="font-bold">HOMOPHONE EXPEDITION</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">NANNESTAD HIGH SCHOOL - BARBARA ANNA ZIELONKA</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-400">PROOFREADING DESK</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight" style={{ textWrap: 'balance' }}>
              The Editor’s Desk: Catch the Homophone Impostors
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Carefully examine these authentic high school editorial drafts, laboratory abstracts, and admissions essays. Clever homophone blunders have crept into the manuscripts. Tap suspect words to diagnose and swap in the proper homophone.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shrink-0">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Corrections Found</div>
              <div className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>
                  {currentFixedInArticle} / {totalErrorsInArticle}
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {currentFixedInArticle === totalErrorsInArticle
                  ? 'Article fully verified!'
                  : 'More impostors remain'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        {PROOFREADING_ARTICLES.map((art) => {
          const isDone = progress.proofreadCompleted.includes(art.id);
          const isSelected = art.id === selectedArticleId;

          return (
            <button
              key={art.id}
              onClick={() => handleSelectArticle(art.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{art.genre}</span>
              {isDone && <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500 stroke-[3]" />}
            </button>
          );
        })}

        <button
          onClick={() => {
            soundFx.click();
            setShowSentenceHints(!showSentenceHints);
          }}
          className={`ml-auto px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
            showSentenceHints
              ? 'bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showSentenceHints ? 'Sentence Hints On' : 'Show Sentence Hints'}</span>
        </button>
      </div>

      {/* Manuscript Content & Active Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* The Article Document */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
            <span className="text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold">
              {article.genre}
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              {article.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 italic">
              {article.context}
            </p>
          </div>

          <div className="space-y-6 text-slate-800 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {article.paragraphs.map((p) => {
              const hasErrors = p.errors.length > 0;
              return (
                <div
                  key={p.id}
                  className={`relative p-3 rounded-xl transition-colors ${
                    showSentenceHints && hasErrors
                      ? 'bg-amber-50/70 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-500/30'
                      : ''
                  }`}
                >
                  <p>
                    {renderParagraphText(p.text, p.errors, fixedErrorIds, (err) => {
                      soundFx.click();
                      setActiveError(err);
                    })}
                  </p>
                </div>
              );
            })}
          </div>

          {currentFixedInArticle === totalErrorsInArticle && (
            <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 rounded-xl text-emerald-900 dark:text-emerald-200 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold">Editorial Clearance Granted!</p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300/80">
                  All homophone mistakes in this manuscript have been spotted and corrected.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar / Correction Diagnostic Panel */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-200 mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Diagnostic Inspector</span>
            </h3>

            {activeError ? (
              <div className="space-y-4 animate-fade-in">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Suspect Word Detected:</div>
                  <div className="font-mono text-lg font-bold text-rose-600 dark:text-rose-400">
                    &quot;{activeError.wrongWord}&quot;
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                    SELECT THE PROPER CORRECTION:
                  </div>
                  <div className="space-y-2">
                    {activeError.options.map((option) => {
                      const isFixed = fixedErrorIds[activeError.id] === option;
                      return (
                        <button
                          key={option}
                          onClick={() => handleFixWord(activeError, option)}
                          className={`w-full p-3 rounded-xl border text-left font-mono font-semibold text-sm transition-all cursor-pointer flex items-center justify-between ${
                            isFixed
                              ? 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-800 dark:text-emerald-300'
                              : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 hover:border-amber-500 dark:hover:bg-slate-750 dark:hover:border-amber-400'
                          }`}
                        >
                          <span>{option}</span>
                          {isFixed && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {fixedErrorIds[activeError.id] === activeError.correctWord && (
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/30 rounded-xl text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                    <p className="font-bold mb-1">Editor’s Note:</p>
                    <p>{activeError.explanation}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-sm text-slate-500 dark:text-slate-400 py-6 text-center">
                <p>Click any highlighted or suspect word in the manuscript to open its diagnostic options.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper to render paragraph with clickable suspect words
function renderParagraphText(
  text: string,
  errors: ProofreadingError[],
  fixedIds: Record<string, string>,
  onErrorClick: (err: ProofreadingError) => void
) {
  if (errors.length === 0) {
    return text;
  }

  // Split and substitute
  const words = text.split(' ');
  return words.map((rawWord, idx) => {
    const cleanWord = rawWord.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
    const punctuation = rawWord.slice(cleanWord.length);

    // Check if this matches any error
    const matchingError = errors.find((e) => e.wrongWord.toLowerCase() === cleanWord.toLowerCase());

    if (matchingError) {
      const isFixed = fixedIds[matchingError.id] === matchingError.correctWord;
      const displayWord = isFixed ? matchingError.correctWord : cleanWord;

      return (
        <React.Fragment key={idx}>
          <button
            onClick={() => onErrorClick(matchingError)}
            className={`font-semibold px-1 rounded transition-all cursor-pointer underline decoration-dotted underline-offset-4 ${
              isFixed
                ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30'
                : 'text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20'
            }`}
          >
            {displayWord}
          </button>
          <span>{punctuation} </span>
        </React.Fragment>
      );
    }

    return rawWord + ' ';
  });
}
