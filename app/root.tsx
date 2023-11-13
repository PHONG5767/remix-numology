import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import DefaultLayout from "./Components/Layout/Default";
import { FormValue } from "./Route";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Xem thần số học pitago</title>
        <meta name="description" content="Báo cáo chi tiết. Chính xác tuyệt đối"></meta>
        <Meta />
        <Links />
      </head>
      <body>
        <DefaultLayout>
          <FormValue>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </FormValue>
        </DefaultLayout>
      </body>
    </html>
  );
}
