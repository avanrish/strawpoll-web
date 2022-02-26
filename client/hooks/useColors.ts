import distinctColors from 'distinct-colors';

export default function useColors(amount: number) {
  const palette = distinctColors({
    count: amount,
    lightMin: 20,
  });

  const colors = palette.map((col: any) => {
    const color = col['_rgb'];
    return rgbToHex(color[0], color[1], color[2]);
  });

  return colors;
}

function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    '#' +
    componentToHex(Math.round(r)) +
    componentToHex(Math.round(g)) +
    componentToHex(Math.round(b))
  );
}
