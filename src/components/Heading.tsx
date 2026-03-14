import type { ReactNode } from "react";
import { motion } from "framer-motion";
import TagLine from "./Tagline";
import { fadeInUp } from "../lib/motion";

export interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: ReactNode;
}

/**
 * Section heading with optional tagline (tag) and description (text). tag is rendered via TagLine (with brackets).
 * Used in Benefits, Pricing, Roadmap, Services. Animates with fadeInUp on scroll.
 */
const Heading = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <motion.div
      className={`${className ?? ""} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition}
    >
      {tag != null && (
        <TagLine className="mb-4 md:justify-center">{tag}</TagLine>
      )}
      {title != null && <h2 className="h2">{title}</h2>}
      {text != null && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </motion.div>
  );
};

export default Heading;
