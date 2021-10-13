import { nearest } from 'culori';

function findMonochromatic(color, colors, getColorDiff) {
  const baseColor = color;

  const targets = [
    {
      ...baseColor,
      h: baseColor.h + 0,
    },
    {
      ...baseColor,
      h: baseColor.h + 0,
    },
  ];

  const matches = targets.map((target) => {
    const choice = nearest(colors, getColorDiff)(target)[0];

    colors = colors.filter((c) => JSON.stringify(c) !== JSON.stringify(choice));

    return choice;
  });

  return {
    colors: [color, ...matches],
  };
}

export { findMonochromatic };
