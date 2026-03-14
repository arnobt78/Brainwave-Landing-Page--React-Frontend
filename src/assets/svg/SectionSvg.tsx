import PlusSvg from "./PlusSvg";

export interface SectionSvgProps {
  crossesOffset?: string;
}

/**
 * Decorative cross (plus) icons for Section when crosses=true. crossesOffset is applied as a class (e.g. lg:translate-y-[5.25rem]).
 */
const SectionSvg = ({ crossesOffset }: SectionSvgProps) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset ?? ""
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${
          crossesOffset ?? ""
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;
