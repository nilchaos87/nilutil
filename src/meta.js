export default function meta(name, content) {
  const meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  return meta;
}
