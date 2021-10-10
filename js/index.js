import { discoverPalettes } from './discover-palettes';
import { converter, parse, formatHex } from 'culori';
import risocolors from 'riso-colors';

const toHSL = converter('hsl');

const baseColor = {
  h: 200,
  s: 0.75,
  l: 0.5,
};

const { analogous } = discoverPalettes({
  baseColor,
  colors: risocolors.map((c) => toHSL(parse(c.hex))),
  match: {
    mode: 'lch',
  },
});

analogous.colors.forEach((c) => {
  const el = document.createElement('div');
  el.style.backgroundColor = formatHex(c);
  document.querySelector('.palette-1').appendChild(el);
});

console.log(monochromatic);
