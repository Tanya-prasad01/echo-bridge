import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import "./GlobeVisual.css";

const GlobeVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(620);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;

      setSize(Math.min(width, 620));
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div
      className="globe-wrapper"
      ref={containerRef}
    >
      <div className="globe-glow" />

      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

        showAtmosphere
        atmosphereColor="#7c3aed"
        atmosphereAltitude={0.18}

        backgroundColor="rgba(0,0,0,0)"

        enablePointerInteraction

        width={size}
        height={size}

        labelsData={[]}

        ringsData={[
          {
            lat: 20,
            lng: 20,
            maxR: 3.2,
            propagationSpeed: 0.8,
            repeatPeriod: 1800,
          },
        ]}

        ringColor={() => "#9b5cff"}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
      />

      <div className="language-tag tag-english">
        <strong>Hello!</strong>
        <span>English</span>
      </div>

      <div className="language-tag tag-spanish">
        <strong>Hola!</strong>
        <span>Spanish</span>
      </div>

      <div className="language-tag tag-hindi">
        <strong>नमस्ते!</strong>
        <span>Hindi</span>
      </div>

      <div className="language-tag tag-french">
        <strong>Bonjour!</strong>
        <span>French</span>
      </div>
    </div>
  );
};

export default GlobeVisual;