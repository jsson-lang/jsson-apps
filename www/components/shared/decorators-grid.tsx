export default function DecoratorsGrid() {
  return (
    <>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">
        +
      </div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">
        +
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">
        +
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 text-muted-foreground/30 font-light text-xl pointer-events-none">
        +
      </div>
    </>
  );
}
