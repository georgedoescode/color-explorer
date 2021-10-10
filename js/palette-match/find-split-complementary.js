import { nearest } from 'culori';

function findSplitComplementary(color, colors, getColorDiff) {
  const baseColor = color;

  const targets = [
    {
      ...baseColor,
      h: baseColor.h + 150,
    },
    {
      ...baseColor,
      h: baseColor.h + 210,
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

export { findSplitComplementary };
