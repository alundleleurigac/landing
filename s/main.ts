import { LandingPage } from "./components/landingpage/component"
import { register_to_dom, html, render } from "@benev/slate"

// register ONLY landing page component
register_to_dom({ LandingPage })

const app = document.getElementById("app")

if (app) {
	render(html`<landing-page></landing-page>`, app)
}
