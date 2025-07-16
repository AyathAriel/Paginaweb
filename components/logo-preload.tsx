export default function LogoPreload() {
  return (
    <>
      <link rel="preload" as="image" href="/logo.png" />
      <link rel="preload" as="image" href="/logo-64.png" />
      <link rel="preload" as="image" href="/logo-128.png" />
      <link rel="preload" as="image" href="/logo-256.png" />
    </>
  )
}
