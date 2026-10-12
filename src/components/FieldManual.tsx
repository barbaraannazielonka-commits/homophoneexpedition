import React, { useState } from 'react';
import { Search, Volume2, BookOpen, Lightbulb, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { HOMOPHONE_PAIRS } from '../data/homophonesData';
import { HomophonePair, PlayerProgress } from '../types/homophones';
import { soundFx } from '../services/soundFx';

interface FieldManualProps {
  progress: PlayerProgress;
  onUpdateProgress: (newProgress: PlayerProgress) => void;
}

export const FieldManual: React.FC<FieldManualProps> = ({
  progress,
  onUpdateProgress,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [masteredIds, setMasteredIds] = useState<string[]>(progress.masteredWords || []);

  const categories = [
    { id: 'ALL', label: 'All Homophones' },
    { id: 'CORE_ESSENTIAL', label: 'Core Essentials' },
    { id: 'ACADEMIC', label: 'Academic & Science' },
    { id: 'LITERARY', label: 'Literary & Rhetoric' },
    { id: 'FORMAL_STYLE', label: 'Formal Style' },
  ];

  const filteredPairs = HOMOPHONE_PAIRS.filter((pair) => {
    const matchesCategory = activeCategory === 'ALL' || pair.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();

    if (!query) return matchesCategory;

    const matchesName = pair.groupName.toLowerCase().includes(query);
    const matchesWords = pair.words.some(
      (w) =>
        w.word.toLowerCase().includes(query) ||
        w.definition.toLowerCase().includes(query) ||
        w.mnemonic.toLowerCase().includes(query)
    );

    return matchesCategory && (matchesName || matchesWords);
  });

  const toggleMastered = (pairId: string) => {
    soundFx.click();
    let updated: string[];
    if (masteredIds.includes(pairId)) {
      updated = masteredIds.filter((id) => id !== pairId);
    } else {
      updated = [...masteredIds, pairId];
      soundFx.correct();
    }
    setMasteredIds(updated);
    onUpdateProgress({
      ...progress,
      masteredWords: updated,
    });
  };

  const handlePronounce = (pair: HomophonePair) => {
    soundFx.click();
    soundFx.speakWord(pair.words[0].word);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Intro Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-mono mb-2">
              <span className="font-bold">HOMOPHONE EXPEDITION</span>
              <span aria-hidden="true" className="text-amber-500">·</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">NANNESTAD HIGH SCHOOL - BARBARA ANNA ZIELONKA</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-400">FIELD REFERENCE</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight" style={{ textWrap: 'balance' }}>
              The Lexicographer’s Field Manual
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Explore the linguistic anatomy of high school’s most confusing homophone sets. Review Latin roots, battle-tested mnemonic devices, and academic usage examples.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shrink-0">
            <BookOpen className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Mastered Codex Pairs</div>
              <div className="font-mono text-xl font-bold text-amber-700 dark:text-amber-300">
                {masteredIds.length} / {HOMOPHONE_PAIRS.length}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {Math.round((masteredIds.length / HOMOPHONE_PAIRS.length) * 100)}% Complete
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search homophone, root, or mnemonic..."
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-amber-400 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.click();
                setActiveCategory(cat.id);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Homophone Pairs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPairs.map((pair) => {
          const isMastered = masteredIds.includes(pair.id);

          return (
            <div
              key={pair.id}
              className={`rounded-2xl border transition-all p-6 bg-white dark:bg-slate-900/90 shadow-sm ${
                isMastered ? 'border-amber-500/50 ring-1 ring-amber-400/20' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-mono mb-0.5">
                    <span>{pair.category.replace('_', ' ')}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pair.phonetic}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
                    {pair.groupName}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handlePronounce(pair)}
                    title={`Pronounce ${pair.words[0].word}`}
                    className="p-2 text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleMastered(pair.id)}
                    title={isMastered ? 'Mark as studying' : 'Mark as mastered'}
                    className={`p-2 rounded-lg border transition-colors cursor-pointer flex items-center gap-1 text-xs font-medium ${
                      isMastered
                        ? 'bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="hidden sm:inline">
                      {isMastered ? 'Mastered' : 'Mark'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Summary One-Liner */}
              <p className="text-xs text-amber-900 dark:text-amber-300/90 mt-3 italic bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20 p-2.5 rounded-lg">
                &quot;{pair.summaryNote}&quot;
              </p>

              {/* Side-by-side Word Profiles */}
              <div className="mt-4 space-y-4">
                {pair.words.map((wordObj) => (
                  <div
                    key={wordObj.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-base font-bold text-slate-900 dark:text-slate-100">
                        {wordObj.word}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {wordObj.partOfSpeech}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {wordObj.definition}
                    </p>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="font-semibold">Origin: </span>
                      {wordObj.etymology}
                    </div>

                    {/* Mnemonic Device */}
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-850 flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300/90">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-amber-700 dark:text-amber-400">Mnemonic: </strong>
                        {wordObj.mnemonic}
                      </span>
                    </div>

                    {/* Example Sentence */}
                    <div className="pt-1 text-xs text-slate-600 dark:text-slate-400 italic">
                      &quot;{wordObj.exampleSentence}&quot;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredPairs.length === 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400">
          <BookOpen className="w-12 h-12 mx-auto text-slate-400 dark:text-slate-600 mb-3" />
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-200">
            No Homophone Pairs Found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Try adjusting your search keywords or choosing a different category.
          </p>
        </div>
      )}
    </div>
  );
};
