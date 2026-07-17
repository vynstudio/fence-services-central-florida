"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Fixed top true-line that fills as the page is scrolled.
 * Fence metaphor: the line is drawn as you walk the property.
 */
export function ScrollProgressLine() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      aria-hidden
    >
      <div className="h-full w-full bg-black/5" />
      <motion.div
        className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-brand-accent via-brand-accent-bright to-brand-accent"
        style={{ scaleX }}
      />
    </div>
  );
}

/**
 * Scroll-triggered section reveal:
 * - content fades/rises
 * - a vertical "fence post" draws in on the leading edge (md+)
 * - a brand true-line draws under the section eyebrow/title area
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  /** "up" | "left" | "none" */
  direction = "up",
}) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left" ? { x: 28, y: 0 } : direction === "none" ? { x: 0, y: 0 } : { x: 0, y: 22 };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Section shell with scroll-drawn post + true-line accent.
 * Use around major landing blocks for a fence-line scroll language.
 */
export function ScrollSection({
  id,
  children,
  className = "",
  /** Draw vertical post on left (desktop) */
  post = true,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const postScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineSpring = useSpring(lineScale, { stiffness: 90, damping: 24 });

  return (
    <section
      id={id}
      ref={ref}
      className={`shell-section relative ${className}`}
    >
      {/* Scroll-linked fence post — tablet+ */}
      {post && !reduceMotion && (
        <motion.div
          className="pointer-events-none absolute bottom-[12%] left-[var(--shell-pad-x)] top-[12%] z-0 hidden w-px origin-top bg-gradient-to-b from-brand-accent/0 via-brand-accent/50 to-brand-accent/0 md:block"
          style={{ scaleY: postScale }}
          aria-hidden
        />
      )}
      {/* Scroll-linked horizontal true-line under top padding */}
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute left-[var(--shell-pad-x)] right-[var(--shell-pad-x)] top-[calc(var(--shell-pad-y)*0.55)] z-0 h-px origin-left bg-gradient-to-r from-brand-accent/40 via-brand-accent/25 to-transparent md:left-[calc(var(--shell-pad-x)+0.75rem)]"
          style={{ scaleX: lineSpring }}
          aria-hidden
        />
      )}
      <div className="shell-inner relative z-[1]">{children}</div>
    </section>
  );
}

/**
 * Stagger children as they enter the viewport (cards, chips, FAQ rows).
 */
export function ScrollStagger({
  children,
  className = "",
  stagger = 0.06,
  as: Tag = "div",
}) {
  const reduceMotion = useReducedMotion();
  const items = React.Children.toArray(children);

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={className}>
      {items.map((child, i) => (
        <motion.div
          key={child.key ?? i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE, delay: i * stagger }}
          className="contents"
        >
          {/* contents makes grid/flex parents keep layout; wrap only when needed */}
          {child}
        </motion.div>
      ))}
    </Tag>
  );
}

/**
 * Better for grid items: each child is its own motion element with grid-friendly wrapper.
 */
export function ScrollStaggerGrid({ children, className = "", stagger = 0.07 }) {
  const reduceMotion = useReducedMotion();
  const items = React.Children.toArray(children);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {items.map((child, i) => (
        <motion.div
          key={child.key ?? i}
          className="h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: EASE, delay: Math.min(i * stagger, 0.35) }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Image/panel that parallaxes slightly vs scroll (desktop feel, subtle).
 */
export function ScrollParallaxMedia({ children, className = "" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : ["6%", "-6%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div className="h-full w-full will-change-transform" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
