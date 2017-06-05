export default function favicon(url) {
  const link = document.createElement('link');
  link.href = url;
  link.rel = 'icon';
  return link;
}
