import { nearest } from 'culori';

function findAnalogous(color, colors, getColorDiff) {
  const baseColor = color;

  const targets = [
    {
      ...baseColor,
      h: baseColor.h + 30,
    },
    {
      ...baseColor,
      h: baseColor.h + 60,
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

export { findAnalogous };
