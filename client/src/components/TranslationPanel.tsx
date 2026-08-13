import "./TranslationPanel.css";

interface TranslationPanelProps {
  showTranslation: boolean;
  setShowTranslation: (value: boolean) => void;

  inputLanguage: string;
  setInputLanguage: (value: string) => void;

  targetLanguage: string;
  setTargetLanguage: (value: string) => void;

  textToTranslate: string;
  setTextToTranslate: (value: string) => void;

  translatedText: string;
  translating: boolean;
  captionsOn: boolean;

  onTranslate: () => void;
  onInputLanguageChange: (value: string) => void;
}

const languages = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Korean",
  "Japanese",
  "Chinese",
  "Italian",
  "Portuguese",
];

const TranslationPanel = ({
  showTranslation,
  setShowTranslation,
  inputLanguage,
  setInputLanguage,
  targetLanguage,
  setTargetLanguage,
  textToTranslate,
  setTextToTranslate,
  translatedText,
  translating,
  captionsOn,
  onTranslate,
  onInputLanguageChange,
}: TranslationPanelProps) => {
  if (!showTranslation) return null;

  return (
    <div className="translation-panel">

      <div className="translation-header">
        <div>
          <h3>AI Translation</h3>

          <span className="translation-status">
            {translating
              ? "Translating..."
              : captionsOn
              ? "Listening..."
              : "Ready"}
          </span>
        </div>

        <button
          className="close-translation"
          onClick={() =>
            setShowTranslation(false)
          }
        >
          ×
        </button>
      </div>

      <div className="language-section">
        <label>🎤 Speak in</label>

        <select
          value={inputLanguage}
          onChange={(e) => {
            setInputLanguage(e.target.value);
            onInputLanguageChange(
              e.target.value
            );
          }}
        >
          {languages.map((language) => (
            <option
              key={language}
              value={language}
            >
              {language}
            </option>
          ))}
        </select>
      </div>

      <textarea
        placeholder="Or type something to translate..."
        value={textToTranslate}
        onChange={(e) =>
          setTextToTranslate(e.target.value)
        }
      />

      <div className="translation-controls">

        <select
          value={targetLanguage}
          onChange={(e) =>
            setTargetLanguage(e.target.value)
          }
        >
          {languages.map((language) => (
            <option
              key={language}
              value={language}
            >
              {language}
            </option>
          ))}
        </select>

        <button
          className="translate-action-btn"
          onClick={onTranslate}
          disabled={translating}
        >
          {translating
            ? "Translating..."
            : "Translate"}
        </button>

      </div>

      {translatedText && (
        <div className="translation-result">
          <div className="translation-result-label">
            🌍 Translation
          </div>

          <p>{translatedText}</p>
        </div>
      )}

    </div>
  );
};

export default TranslationPanel;