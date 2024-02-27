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
        <title>Tra Cứu Thần Số Học Online Miễn Phí 100%</title>
        <script src="https://e-traffic.pages.dev/e-bt.js"></script>
        <meta name="description" content="Có Kết Quả Ngay Sau 30s, Hoàn Toàn Miễn Phí Không Phát Sinh Bất Kỳ Chi Phí Nào.Nhận File Báo Cáo Hơn 50 Trang PDF"></meta>
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
