export default function style(text) {
  const style = document.createElement('style');
  style.textContent = text;
  return style;
}
