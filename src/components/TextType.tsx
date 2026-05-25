import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

interface TextTypeProps {
  text: string | string[];
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  highlightWords?: string[];
  highlightClassName?: string;
}

const TextType = ({
  text,
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  highlightWords = [],
  highlightClassName = '',
}: TextTypeProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = useCallback(() => {
    if (textColors.length === 0) return;
    return textColors[currentTextIndex % textColors.length];
  }, [textColors, currentTextIndex]);

  const getHighlightRanges = useCallback((fullText: string) => {
    const ranges: { start: number; end: number }[] = [];
    highlightWords.forEach(word => {
      let index = 0;
      const lowerText = fullText.toLowerCase();
      const lowerWord = word.toLowerCase();
      while ((index = lowerText.indexOf(lowerWord, index)) !== -1) {
        ranges.push({ start: index, end: index + word.length });
        index += word.length;
      }
    });
    return ranges.sort((a, b) => a.start - b.start);
  }, [highlightWords]);

  const renderTextWithHighlights = useCallback((displayedText: string, fullText: string) => {
    if (highlightWords.length === 0) {
      return <span style={{ color: getCurrentTextColor() || 'inherit' }}>{displayedText}</span>;
    }

    const ranges = getHighlightRanges(fullText);
    const result: React.ReactElement[] = [];
    let lastIndex = 0;

    for (let i = 0; i < displayedText.length; i++) {
      const inHighlight = ranges.some(r => i >= r.start && i < r.end);
      const prevInHighlight = i > 0 ? ranges.some(r => (i - 1) >= r.start && (i - 1) < r.end) : !inHighlight;

      if (inHighlight !== prevInHighlight || i === 0) {
        if (i > lastIndex) {
          const wasHighlight = ranges.some(r => lastIndex >= r.start && lastIndex < r.end);
          result.push(
            <span
              key={`${lastIndex}-${i}`}
              className={wasHighlight ? highlightClassName : ''}
              style={{ color: !wasHighlight ? (getCurrentTextColor() || 'inherit') : undefined }}
            >
              {displayedText.slice(lastIndex, i)}
            </span>
          );
        }
        lastIndex = i;
      }
    }

    // Push remaining text
    if (lastIndex < displayedText.length) {
      const isHighlight = ranges.some(r => lastIndex >= r.start && lastIndex < r.end);
      result.push(
        <span
          key={`${lastIndex}-end`}
          className={isHighlight ? highlightClassName : ''}
          style={{ color: !isHighlight ? (getCurrentTextColor() || 'inherit') : undefined }}
        >
          {displayedText.slice(lastIndex)}
        </span>
      );
    }

    return <>{result}</>;
  }, [highlightWords, highlightClassName, getCurrentTextColor, getHighlightRanges]);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }
          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }
          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length >= 1) {
          if (!loop && currentTextIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    getRandomSpeed
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return (
    <div
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${className}`}
    >
      {renderTextWithHighlights(displayedText, textArray[currentTextIndex])}
      {showCursor && (
        <span
          ref={cursorRef}
          className={`ml-1 inline-block ${cursorClassName} ${shouldHideCursor ? 'hidden' : ''}`}
        >
          {cursorCharacter}
        </span>
      )}
    </div>
  );
};

export default TextType;
