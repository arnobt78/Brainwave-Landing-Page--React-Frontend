import { motion } from "framer-motion";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { fadeInDown, fadeInUp } from "../lib/motion";

/**
 * Pricing section: decorative sphere/stars, heading, and pricing cards.
 * Sphere and stars are decorative (hidden on mobile). PricingList renders tiers from constants; LeftLine/RightLine are decorative.
 */
const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <motion.div
          className="hidden relative justify-center mb-[6.5rem] lg:flex"
          initial={fadeInDown.initial}
          whileInView={fadeInDown.whileInView}
          viewport={fadeInDown.viewport}
          transition={fadeInDown.transition}
        >
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </motion.div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <motion.div
          className="relative"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <PricingList />
          <LeftLine />
          <RightLine />
        </motion.div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
