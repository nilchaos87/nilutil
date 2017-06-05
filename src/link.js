export default function link(href, rel) {
  const link = document.createElement('link');
  link.href = href;
  link.rel = rel;
  return link;
}
