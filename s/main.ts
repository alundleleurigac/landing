import { register_to_dom, html, render } from "@benev/slate"
import { LandingPage } from "./components/landingpage/component"

// register the custom element
register_to_dom({ LandingPage })

const app = document.getElementById("app")

if (app) {
  render(html`<landing-page></landing-page>`, app)
}
