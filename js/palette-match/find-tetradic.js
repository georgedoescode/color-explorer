import { nearest } from 'culori';

function findTetradic(color, colors, getColorDiff) {
  const baseColor = color;

  const targets = [
    {
      ...baseColor,
      h: baseColor.h + 90,
    },
    {
      ...baseColor,
      h: baseColor.h + 180,
    },
    {
      ...baseColor,
      h: baseColor.h + 720,
    },
  ];

  const matches = targets.map((target) => {
    const choice = nearest(colors, getColorDiff)(target)[0];

    colors = colors.filter((c) => c.h !== choice.h);

    return choice;
  });

  return {
    colors: [color, ...matches],
  };
}

export { findTetradic };
