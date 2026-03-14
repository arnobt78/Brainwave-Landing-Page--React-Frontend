import { companyLogos } from "../constants";

export interface CompanyLogosProps {
  className?: string;
}

/**
 * Row of company/partner logos with a short tagline. Data from constants.companyLogos. Shown in Hero on desktop.
 */
const CompanyLogos = ({ className }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
