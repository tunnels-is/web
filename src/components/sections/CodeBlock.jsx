import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// ---------------------------------------------------------------------------
// Syntax coloring helpers
// ---------------------------------------------------------------------------

/**
 * Tokenise a single line of code into an array of { text, color? } spans.
 * The coloring is intentionally lightweight (regex-based, no AST).
 *
 *  Priority order (first match wins per-line):
 *   1. Comment lines  → text-dark-text-muted  (#94a3b8 at reduced opacity)
 *   2. Strings        → green  (#10b981)
 *   3. Keys           → blue   (#3b82f6)
 *   4. Keywords       → teal   (#06b6d4)
 *   5. Plain text     → text-primary (#e2e8f0)
 */
function tokenizeLine(line) {
  const trimmed = line.trimStart();

  // 1. Full-line comments
  if (trimmed.startsWith('#') || trimmed.startsWith('//')) {
    return [{ text: line, color: '#94a3b8', opacity: 0.6 }];
  }

  const tokens = [];
  let remaining = line;

  // Regex: key=  or  key:  (capture leading whitespace + key separately)
  const keyMatch = remaining.match(/^(\s*)([A-Za-z_][\w.-]*)(\s*[=:]\s*)/);

  if (keyMatch) {
    const [full, leading, key, separator] = keyMatch;
    if (leading) tokens.push({ text: leading });
    tokens.push({ text: key, color: '#3b82f6' });
    tokens.push({ text: separator });
    remaining = remaining.slice(full.length);
  }

  // Now tokenise the value portion (or the entire line if no key matched)
  const valueTokens = tokenizeValue(remaining);
  tokens.push(...valueTokens);

  return tokens;
}

/**
 * Break a value string into coloured tokens (strings, keywords, plain).
 */
function tokenizeValue(text) {
  if (!text) return [];

  const tokens = [];
  let i = 0;

  while (i < text.length) {
    // Quoted string (single or double)
    if (text[i] === '"' || text[i] === "'") {
      const quote = text[i];
      let j = i + 1;
      while (j < text.length && text[j] !== quote) {
        if (text[j] === '\\') j++; // skip escaped char
        j++;
      }
      j++; // include closing quote
      tokens.push({ text: text.slice(i, j), color: '#10b981' });
      i = j;
      continue;
    }

    // Keyword / number: match a word-like token
    const wordMatch = text.slice(i).match(/^(true|false|null|undefined|-?\d+(\.\d+)?)/);
    if (wordMatch) {
      tokens.push({ text: wordMatch[0], color: '#06b6d4' });
      i += wordMatch[0].length;
      continue;
    }

    // Inline comment (# or //) — rest of line is comment
    const commentMatch = text.slice(i).match(/^(#|\/\/).*/);
    if (commentMatch) {
      tokens.push({ text: commentMatch[0], color: '#94a3b8', opacity: 0.6 });
      i += commentMatch[0].length;
      continue;
    }

    // Plain character — accumulate into a plain token
    let j = i + 1;
    while (j < text.length) {
      const next = text[j];
      if (
        next === '"' ||
        next === "'" ||
        // start of a keyword boundary
        text.slice(j).match(/^(true|false|null|undefined|-?\d)/) ||
        text.slice(j).match(/^(#|\/\/)/)
      ) {
        break;
      }
      j++;
    }
    tokens.push({ text: text.slice(i, j) });
    i = j;
  }

  return tokens;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function WindowDots() {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="rounded-full"
        style={{ width: 6, height: 6, background: '#ff5f57', opacity: 0.5 }}
      />
      <div
        className="rounded-full"
        style={{ width: 6, height: 6, background: '#febc2e', opacity: 0.5 }}
      />
      <div
        className="rounded-full"
        style={{ width: 6, height: 6, background: '#28c840', opacity: 0.5 }}
      />
    </div>
  );
}

function CodeLine({ lineNumber, rawLine, isHighlighted, showLineNumbers }) {
  const tokens = tokenizeLine(rawLine);

  return (
    <div
      className="flex min-w-0"
      style={
        isHighlighted
          ? { background: 'rgba(59, 130, 246, 0.06)', borderLeft: '2px solid rgba(59, 130, 246, 0.35)' }
          : { borderLeft: '2px solid transparent' }
      }
    >
      {showLineNumbers && (
        <span
          className="select-none shrink-0 pr-4 text-right font-mono text-[12px] leading-6"
          style={{ color: '#94a3b8', opacity: 0.4, minWidth: '2.8rem' }}
        >
          {lineNumber}
        </span>
      )}
      <span className="font-mono text-[13px] leading-6 whitespace-pre min-w-0">
        {tokens.map((token, i) => (
          <span
            key={i}
            style={{
              color: token.color ?? '#e2e8f0',
              opacity: token.opacity ?? 1,
            }}
          >
            {token.text}
          </span>
        ))}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const CodeBlock = ({
  title,
  language,
  code = '',
  highlights = [],
  showLineNumbers = true,
  description,
  maxHeight,
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const lines = code.split('\n');
  // Trim a single leading blank line that often comes from template literals
  const trimmedLines =
    lines.length > 0 && lines[0].trim() === '' ? lines.slice(1) : lines;

  const highlightSet = new Set(highlights);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border overflow-hidden"
      style={{
        background: '#06090f',
        borderColor: '#1e293b',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      }}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Title bar                                                           */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: '#0c1019', borderColor: '#1e293b' }}
      >
        <div className="flex items-center gap-3">
          <WindowDots />
          <span
            className="font-mono text-xs tracking-wide"
            style={{ color: '#94a3b8' }}
          >
            {title ?? 'Code'}
          </span>
        </div>

        {language && (
          <span
            className="text-xs font-mono font-semibold tracking-widest px-2 py-0.5 rounded"
            style={{
              color: '#3b82f6',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            {language}
          </span>
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Code area                                                           */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="overflow-x-auto"
        style={{
          background: '#0a0e17',
          overflowY: maxHeight ? 'auto' : undefined,
          maxHeight: maxHeight ?? undefined,
        }}
      >
        <div className="py-3 pr-4">
          {trimmedLines.map((rawLine, idx) => {
            const lineNumber = idx + 1;
            return (
              <CodeLine
                key={lineNumber}
                lineNumber={lineNumber}
                rawLine={rawLine}
                isHighlighted={highlightSet.has(lineNumber)}
                showLineNumbers={showLineNumbers}
              />
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Optional description                                                */}
      {/* ------------------------------------------------------------------ */}
      {description && (
        <div
          className="px-4 py-2.5 border-t text-sm leading-relaxed"
          style={{ borderColor: '#1e293b', color: '#94a3b8', background: '#0c1019' }}
        >
          {description}
        </div>
      )}
    </motion.div>
  );
};

export default CodeBlock;
