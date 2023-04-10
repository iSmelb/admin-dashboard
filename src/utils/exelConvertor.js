export const s2ab = (s) => {
  const buf = new ArrayBuffer(s.length); // convert s to arrayBuffer
  const view = new Uint8Array(buf); // create uint8array as viewer
  // eslint-disable-next-line no-bitwise, no-plusplus
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; // convert to octet
  return buf;
};