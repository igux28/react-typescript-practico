import { LayoutIntermedio } from "./LayoutIntermedio";

type SidebarProps = {
  mensaje: string;
  onAccion: () => void;
};

export function Sidebar({ mensaje, onAccion }: SidebarProps) {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Sidebar — también reenvía props (más prop drilling 😈)
      </p>

      <LayoutIntermedio mensaje={mensaje} onAccion={onAccion} />
    </div>
  );
}
