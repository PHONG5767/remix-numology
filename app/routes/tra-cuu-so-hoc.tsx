import { redirect } from '@remix-run/node'
export function loader() {
  return redirect("/", 301)
}
export default () => null