"use client";

import { useEffect, useState } from "react";

interface HyperTextProps {
  text: string;
  className?: string;
  duration?: number;
  href?: string;
  target?: string;
  rel?: string;
}

const HyperText = ({
  text,
  className = "",
  duration = 50,
  href,
  target,
  rel
}: HyperTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  const scramble = () => {
    let iteration = 0;
    setIsAnimating(true);

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }

      iteration += 1 / 3;
    }, duration);
  };

  useEffect(() => {
    // Animate on mount
    scramble();
  }, []);

  const content = (
    <span
      className={className}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export default HyperText;
