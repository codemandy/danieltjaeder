export default function Head() {
  const configHref =
    process.env.NODE_ENV === 'development'
      ? '/admin/config.local.yml'
      : '/admin/config.yml';

  return (
    <>
      <title>Content Manager</title>
      <link rel="cms-config-url" type="text/yaml" href={configHref} />
    </>
  );
} 
