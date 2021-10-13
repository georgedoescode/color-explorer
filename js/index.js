import { discoverPalettes } from './discover-palettes';
import { converter, parse, formatHex } from 'culori';
import risocolors from 'riso-colors';
import pantonecolors from '../panetone';

const toHSL = converter('hsl');

const baseColor = {
  h: 30,
  s: 1,
  l: 0.65,
};

const palettes = discoverPalettes({
  baseColor,
  colors: [...pantonecolors].map((c) => toHSL(parse(c.hex))),
  match: {
    mode: 'lch',
  },
});

Object.keys(palettes).forEach((p) => {
  const wrapper = document.createElement('div');
  wrapper.classList = 'palette';

  const title = document.createElement('p');
  title.innerHTML = p;

  wrapper.appendChild(title);

  palettes[p].colors.forEach((c) => {
    const el = document.createElement('div');
    el.style.backgroundColor = formatHex(c);
    wrapper.appendChild(el);
  });

  document.body.appendChild(wrapper);
});
