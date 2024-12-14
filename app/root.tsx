import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "react-router";
import type { LinksFunction } from "react-router";

import styles from "./tailwind.css?url";

const cssBundleHref = "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function ErrorBoundary() {
  const error = useRouteError();
  console.error('Route error:', error);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="app">
          <h1>Error!</h1>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  console.log('Rendering HydrateFallback');
  return (
    <div id="app">
      <p>Loading...</p>
    </div>
  );
}

export default function App() {
  console.log('Rendering App');
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="app">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
