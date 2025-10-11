export function Rhombus({ background }: { background: string }) {
  return (
    <div className="absolute bottom-[calc(100%-2rem-10px)] right-[calc(50%-2rem)]">
      <div className={`h-16 w-16 bg-[${background}] rotate-45`}></div>
    </div>
  );
}
