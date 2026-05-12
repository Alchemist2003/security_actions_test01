export default function App() {
  const html = "<img src=x onerror=alert(1)>";

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}
export default function App() {
  const params = new URLSearchParams(window.location.search);
  const html = params.get("html");

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}