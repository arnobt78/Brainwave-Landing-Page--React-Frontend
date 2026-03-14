import type { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

export interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  px?: string;
  white?: boolean;
}

/**
 * Reusable Button: renders either a link (<a>) or a button based on `href`.
 * ButtonSvg(white) draws the gradient border; white=true uses solid fill for light backgrounds (e.g. on dark cards).
 */
const Button = ({
  className,
  href,
  onClick,
  children,
  px = "px-7",
  white = false,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px} ${white ? "text-n-8" : "text-n-1"} ${className ?? ""}`;
  const spanClasses = "relative z-10";

  /* When href is set we render an <a> for navigation; otherwise a <button> for actions (e.g. menu toggle). */
  const renderButton = () => (
    <button type="button" className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
