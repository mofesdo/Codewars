function potatoes(p0, w0, p1) {
  const dryMatter = w0 * (100 - p0) / 100;
  return Math.trunc(dryMatter * 100 / (100 - p1));
}
​