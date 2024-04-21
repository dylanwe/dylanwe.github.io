# Portfolio

After reading the book "Show your work" I got motivated to rebuild my portfolio to improve the place where I show my work.
I had a few requirements for my portfolio:
- Write content in Markdown
- Code blocks, to present code snippets
- React, to improve my web framework skills
- Meta tag customization, to make pages look more presentable when shared.

Having Markdown is great because I write my notes in [Obsidian](https://obsidian.md/) so it's easy to convert notes to project pages.
Docusaurus with TypeScript allows me to write a quick static website whilst having good SEO and fast loading times.
In my last portfolio I used Gatsby but the developer experience wasn't really good, I like this stack way more. 

## The design
The designed is inspired by a couple of other websites:
1. [Revolut](https://www.revolut.com/) the icons zooming on scroll
2. [Vite](https://vitejs.dev/) the feature blocks
3. [Olivier Ifrah](https://www.olivierifrah.com/) the project previews 

Using Tailwind is great because it allows me to quickly write styling for all my components and end up with a cohesive look.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
