import {
  findAnalogous,
  findTriadic,
  findComplementary,
  findSplitComplementary,
  findTetradic,
  findMonochromatic,
} from './palette-match';
import { createColorDiff } from './create-color-diff';
import { converter } from 'culori';
import deepmerge from 'deepmerge';

const toLCH = converter('lch');

const defaults = {
  baseColor: {
    h: 0,
    s: 0.5,
    l: 0.5,
  },
  match: {
    mode: 'lch',
    weights: {
      hue: 1,
      intensity: 1,
      lightness: 1,
    },
  },
  colors: [],
};

function discoverPalettes(opts) {
  opts = deepmerge(defaults, opts);

  opts.baseColor = { ...opts.baseColor, mode: 'hsl' };
  opts.colors = opts.colors.map((c) => ({ ...c, mode: 'hsl' }));

  if (opts.match.mode === 'lch') {
    opts.baseColor = toLCH(opts.baseColor);
    opts.colors = opts.colors.map((c) => toLCH({ ...c, mode: 'hsl' }));
  }

  const getColorDiff = createColorDiff(
    opts.match.mode,
    opts.match.weights.hue,
    opts.match.weights.intensity,
    opts.match.weights.lightness
  );

  const findOpts = [opts.baseColor, opts.colors, getColorDiff];

  const analogous = findAnalogous(...findOpts);
  const triadic = findTriadic(...findOpts);
  const complementary = findComplementary(...findOpts);
  const splitComplementary = findSplitComplementary(...findOpts);
  const tetradic = findTetradic(...findOpts);
  const monochromatic = findMonochromatic(...findOpts);

  return {
    analogous,
    triadic,
    complementary,
    splitComplementary,
    tetradic,
    monochromatic,
  };
}

export { discoverPalettes };
