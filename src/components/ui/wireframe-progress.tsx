import { useId, useMemo } from "react";
import { WireframeLetter } from "./wireframe-letter";
import { motion, MotionValue, useTransform } from "motion/react";
import { getStyleData } from "@/utils/wireframe-progress";

type LoaderProps = {
  text: string;
  progress: MotionValue<number>;
  variant?: "light" | "dark";
  animation?: "liquid" | "wipe";
  className?: string;
};

const buildLayers = (
  layout: { char: string; x: number }[],
  variant: "light" | "dark",
) => {
  const faceMask: React.ReactNode[] = [];
  const skeleton: React.ReactNode[] = [];
  const wipeClipPath: React.ReactNode[] = [];

  layout.forEach((item, i) => {
    const props = {
      key: i,
      char: item.char,
      transform: `translate(${item.x}, 0)`,
    };

    faceMask.push(
      <WireframeLetter {...props} key={`faceMask-${i}`} variant="faceMask" />,
    );
    skeleton.push(
      <WireframeLetter {...props} key={`skeleton-${i}`} variant="skeleton" />,
    );
    wipeClipPath.push(
      <WireframeLetter {...props} key={`wipeClip-${i}`} variant={variant} />,
    );
  });

  return { faceMask, wipeClipPath, skeleton };
};

export const WireframeProgress = ({
  text,
  progress,
  variant = "dark",
  animation = "wipe",
  className,
}: LoaderProps) => {
  const uid = useId();
  const {
    liquidGradientId,
    foamGradientId,
    liquidMaskId,
    liquidClipId,
    wipeClipId,
  } = useMemo(
    () => ({
      liquidGradientId: `liquid-gradient-${variant}-${uid}`,
      foamGradientId: `foam-gradient-${variant}-${uid}`,
      liquidMaskId: `liquid-mask-${uid}`,
      liquidClipId: `liquid-clip-${uid}`,
      wipeClipId: `wipe-clip-${uid}`,
    }),
    [variant, uid],
  );

  const { totalWidth, wavePathData, layout, height } = useMemo(
    () => getStyleData(text),
    [text],
  );

  // Fill Y for liquid rising
  const fillY = useTransform(progress, [0, 100], [height, 10]);

  // Wipe width
  const wipeWidth = useTransform(progress, [0, 100], [0, totalWidth]);

  const { faceMask, skeleton, wipeClipPath } = useMemo(
    () => buildLayers(layout, variant),
    [layout, variant],
  );

  return (
    <svg viewBox={`0 0 ${totalWidth} ${height}`} className={className}>
      {/* Base letters */}
      <g opacity={variant === "dark" ? 0.3 : 0.2}>{skeleton}</g>

      <defs>
        {animation === "liquid" && (
          <>
            {/* Water fill gradients */}
            <linearGradient id={liquidGradientId} x1="0" y1="1" x2="0" y2="0">
              {variant === "dark" ? (
                <>
                  <stop offset="0%" stopColor="#050816" />
                  <stop offset="35%" stopColor="#1E3A8A" />
                  <stop offset="70%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="55%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </>
              )}
            </linearGradient>
            {/* Foam over water */}
            <linearGradient id={foamGradientId} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={variant === "dark" ? "#A5F3FC" : "#075985"}
                stopOpacity={variant === "dark" ? 0.35 : 0.28}
              />
              <stop
                offset="100%"
                stopColor={variant === "dark" ? "#22D3EE" : "#075985"}
                stopOpacity={variant === "dark" ? 0.05 : 0.0}
              />
            </linearGradient>
            {/* LETTER MASK (text stencil) */}
            <mask id={liquidMaskId}>
              <rect width="100%" height="100%" fill="black" />
              {faceMask}
            </mask>
            {/* Just keeps the liquid inside svg bounds */}
            <clipPath id={liquidClipId}>
              <rect x="0" y="0" width={totalWidth} height={height} />
            </clipPath>
          </>
        )}

        {animation === "wipe" && (
          <clipPath id={wipeClipId}>
            <motion.rect
              x="0"
              y="-50"
              height="200"
              initial={{ width: 0 }}
              style={{ width: wipeWidth }}
            />
          </clipPath>
        )}
      </defs>

      {/* Filled */}
      {animation === "wipe" && (
        <g clipPath={`url(#${wipeClipId})`}>{wipeClipPath}</g>
      )}

      {animation === "liquid" && (
        <g mask={`url(#${liquidMaskId})`} clipPath={`url(#${liquidClipId})`}>
          {/* Liquid rises */}
          <motion.g style={{ y: fillY }}>
            {/* Water body */}
            <rect
              x={-200}
              y={0}
              width={totalWidth + 400}
              height={height + 300}
              fill={`url(#${liquidGradientId})`}
              opacity={1}
            />
            <rect
              x={-200}
              y={-10}
              width={totalWidth + 400}
              height={18}
              fill={variant === "dark" ? "#22D3EE" : "#0284C7"}
              opacity={variant === "dark" ? 0.08 : 0.06}
            />

            <motion.path
              d={wavePathData}
              fill={`url(#${foamGradientId})`}
              animate={{ x: [0, -80] }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            <motion.path
              d={wavePathData}
              fill={`url(#${foamGradientId})`}
              opacity={variant === "dark" ? 0.35 : 0.22}
              animate={{ x: [0, -160] }}
              transition={{
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </motion.g>
        </g>
      )}
    </svg>
  );
};
