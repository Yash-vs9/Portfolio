// Tiny mutable singleton shared between DOM listeners and the R3F frame loop.
// Avoids re-renders — the 3D loop reads these each frame.
export const view = {
  // target pointer (normalized -1..1), updated on mousemove
  tmx: 0,
  tmy: 0,
  // smoothed pointer, lerped inside useFrame
  mx: 0,
  my: 0,
  // overall scroll progress 0..1 across the document
  scroll: 0,
};
