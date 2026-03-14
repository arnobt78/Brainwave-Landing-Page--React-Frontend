/**
 * Framer Motion variants for scroll-triggered animations.
 * Use with motion.div: initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={fadeInUp.transition}
 * viewport.once: true = animate only when entering view (no repeat). margin: "-48px" = trigger slightly before element is fully visible.
 */

/** Element fades in and moves up (y: 24 -> 0). Good for headings and content blocks. */
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

/** Element fades in and moves down. Used e.g. for pricing section decorative assets. */
export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

/** Fades in from the left (x: -32 -> 0). Used for left column in Collaboration. */
export const fadeInLeft = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

/** Fades in from the right. Used for right column (e.g. app wheel in Collaboration). */
export const fadeInRight = {
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

/** Simple fade-in with no movement. */
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

/** Parent: use with variants={staggerContainer} initial="initial" whileInView="whileInView". Children animate with staggerChildren delay. */
export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  viewport: { once: true, margin: "-48px" },
};

/** Child of staggerContainer: each child fades in and moves up with a slight delay from the previous. */
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};
