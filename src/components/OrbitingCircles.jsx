import React from 'react';

// Structure adapted from Magic UI's MIT-licensed Orbiting Circles component.
export default function OrbitingCircles({
  children,
  radius = 160,
  radiusForChild,
  reverse = false,
  duration = 20,
  showPath = true,
  className = '',
}) {
  const items = React.Children.toArray(children);

  return (
    <>
      {showPath && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-white/8"
          style={{
            width: Number(radius) * 2,
            height: Number(radius) * 2,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {items.map((child, index) => {
        const angle = (360 / Math.max(1, items.length)) * index;
        const itemRadius = typeof radiusForChild === 'function'
          ? radiusForChild(child, index)
          : radius;

        return (
          <div
            key={child.key ?? index}
            style={{
              '--orbit-duration': `${duration}s`,
              '--orbit-radius': `${itemRadius}px`,
              '--orbit-angle': `${angle}deg`,
              animationDirection: reverse ? 'reverse' : 'normal',
            }}
            className={`role-orbit-item absolute left-1/2 top-1/2 flex items-center justify-center ${className}`}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
