import { differenceEuclidean } from 'culori';

function createColorDiff(mode, hue, intensity, lightness) {
  switch (mode) {
    case 'lch':
      return differenceEuclidean('lch', [lightness, intensity, hue, 0]);
    case 'hsl':
      return differenceEuclidean('hsl', [hue, intensity, lightness, 0]);
  }
}

export { createColorDiff };
