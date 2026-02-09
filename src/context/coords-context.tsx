import { createContext, useContext, useState } from "react";

const coordsContext = createContext<{
  coords: Record<"lat" | "lng", number>;
  setCoords: React.Dispatch<
    React.SetStateAction<Record<"lat" | "lng", number>>
  >;
} | null>(null);

function CoordsProvider({ children }: { children: React.ReactNode }) {
  const [coords, setCoords] = useState({ lat: 50, lng: 25 });

  return (
    <coordsContext.Provider value={{ coords, setCoords }}>
      {children}
    </coordsContext.Provider>
  );
}

function useCoords() {
  const context = useContext(coordsContext);
  if (!context) {
    throw new Error("useCoords must be used within a CoordsProvider");
  }
  return context;
}

//eslint-disable-next-line
export { CoordsProvider, useCoords };
