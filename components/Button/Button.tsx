import css from "./Button.module.css";

interface ButtonProps {
  buttonType: "submit" | "reset" | "button";
  onClick?: () => void;
  isFetching?: boolean;
  children?: React.ReactNode;
  variant?: string;
}

export default function Button({
  buttonType,
  onClick,
  isFetching = false,
  children,
  variant,
}: ButtonProps) {
  const variantClass = variant ? css[variant] : "";

  return (
    <button
      type={`${buttonType}`}
      onClick={onClick}
      className={`${css.button} ${variantClass}`}
      disabled={isFetching}
    >
      {isFetching ? "Loading..." : (children ?? "Load more")}
    </button>
  );
}
