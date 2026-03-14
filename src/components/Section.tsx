import type { ReactNode } from "react";
import { motion } from "framer-motion";
import SectionSvg from "../assets/svg/SectionSvg";
import { fadeIn } from "../lib/motion";

export interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: ReactNode;
}

/**
 * Section: page section wrapper with optional decorative crosses and side lines.
 * id: used for hash links (e.g. #features). customPaddings: skip default vertical padding (e.g. Hero).
 * crosses: show horizontal line and PlusSvg decorations. Side lines are always present on md+.
 */
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: SectionProps) => {
  return (
    <motion.div
      id={id}
      className={`
      relative 
      ${
        customPaddings
          ? ""
          : `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className ?? ""}`}
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      viewport={fadeIn.viewport}
      transition={fadeIn.transition}
    >
      {children}

      {/* Decorative vertical lines on left and right (hidden on small screens). */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset ?? ""
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </motion.div>
  );
};

export default Section;
