export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
        <link 
          href={process.env.NODE_ENV === 'development' ? '/admin/config.local.yml' : '/admin/config.yml'} 
          type="text/yaml" 
          rel="cms-config-url" 
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
} 
