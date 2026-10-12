export type GameMode = 'EXPEDITION' | 'PROOFREAD' | 'BLITZ' | 'MANUAL';

export interface HomophoneEntry {
  id: string;
  word: string;
  partOfSpeech: string;
  definition: string;
  etymology: string;
  mnemonic: string;
  exampleSentence: string;
}

export interface HomophonePair {
  id: string;
  groupName: string;
  category: 'CORE_ESSENTIAL' | 'LITERARY' | 'ACADEMIC' | 'FORMAL_STYLE';
  phonetic: string;
  words: HomophoneEntry[];
  summaryNote: string;
}

export interface QuestionClue {
  type: 'riddle' | 'etymology' | 'mnemonic';
  text: string;
}

export interface StageQuestion {
  id: string;
  title: string;
  scenario: string; // Background narrative / context
  sentenceWithBlank: string; // e.g. "The student council president was praised for her _____ approach to resolving the sensitive dispute."
  blankOptions: string[]; // ['discrete', 'discreet']
  correctAnswer: string;
  explanation: string;
  homophonePairId: string;
  clues: QuestionClue[];
}

export interface ExpeditionStage {
  id: number;
  slug: string;
  name: string;
  locationName: string;
  description: string;
  xPercent: number; // For map positioning
  yPercent: number;
  requiredStars: number;
  questions: StageQuestion[];
}

export interface ProofreadingError {
  id: string;
  wrongWord: string;
  correctWord: string;
  explanation: string;
  options: string[];
}

export interface ProofreadingArticle {
  id: string;
  genre: string;
  title: string;
  context: string;
  paragraphs: {
    id: string;
    text: string; // Contains placeholders or words
    errors: ProofreadingError[];
  }[];
}

export interface BlitzQuestion {
  id: string;
  sentence: string;
  options: string[];
  correct: string;
  pairName: string;
}

export interface PlayerProgress {
  unlockedStage: number;
  stageStars: Record<number, number>; // stageId -> stars (1-3)
  highScoreBlitz: number;
  proofreadCompleted: string[];
  masteredWords: string[];
  totalExpPoints: number;
}
