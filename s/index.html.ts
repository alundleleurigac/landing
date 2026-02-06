import { template, html, easypage } from "@benev/turtle"

export default template(async basic => {
  const path = basic.path(import.meta.url)

  return easypage({
    path,
    css: "index.css",
    title: "Omniclip",
    head: html`
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <!-- KEEP only what landing page needs -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;500;700;800&display=swap"
        rel="stylesheet"
      >

      <link rel="stylesheet" href="index.css" />
      <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png">

      <!-- main entry -->
      <script type="module" src="./main.js"></script>
    `,
    body: html`
      <!-- LANDING PAGE ONLY -->
      <div id="app"></div>
    `
  })
})
