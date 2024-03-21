import { type ReactNode } from "react";

type HintBoxProps = {
  children: ReactNode;
  mode: "hint";
};

type WarningBoxProps = {
  children: ReactNode;
  mode: "warning";
  severinity: "low" | "medium" | "high";
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  if (mode === "hint") {
    return <aside className="infobox infobox-hint">{children}</aside>;
  }

  const { severinity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severinity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
