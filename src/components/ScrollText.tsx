import { Children, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type ScrollTextTag = "h2" | "h3" | "p" | "blockquote" | "span";

interface ScrollTextProps {
  as: ScrollTextTag;
  children: ReactNode;
  className?: string;
}

export function ScrollText({ as: Tag, children, className }: ScrollTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const textRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.05 });
  const text = Children.toArray(children)
    .map((child) =>
      typeof child === "string" || typeof child === "number"
        ? String(child)
        : "",
    )
    .join("");
  let wordIndex = 0;

  return (
    <Tag className={className} aria-label={text}>
      {text.split(/(\s+)/).map((part, index) => {
        if (/^\s+$/.test(part)) return part;

        const delay = Math.min(wordIndex++ * 0.025, 0.3);
        const visible = shouldReduceMotion || isInView;
        return (
          <motion.span
            key={index}
            ref={wordIndex === 1 ? textRef : undefined}
            aria-hidden="true"
            className="scroll-reveal-word"
            initial={false}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              delay: visible && !shouldReduceMotion ? delay : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {part}
          </motion.span>
        );
      })}
    </Tag>
  );
}
