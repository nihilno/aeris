import LightRays, { type RaysOrigin } from "./LightRays";

function LightRay({ direction = "top-center" }: { direction?: RaysOrigin }) {
  return (
    <div style={{ width: "100%", height: "600px", position: "absolute" }}>
      <LightRays
        raysOrigin={direction}
        raysColor="#ffffff"
        raysSpeed={0.5}
        lightSpread={2}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.05}
        noiseAmount={0.1}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={2}
        saturation={1}
      />
    </div>
  );
}

export default LightRay;
