---
title: Introduction
---

Document for Open Source
## Facebook Platform: Docusaurus
- [Create React App](https://create-react-app.dev)
- [React Native](https://reactnative.dev/docs/0.61/getting-started)
## Other
- [ReadMe.io](https://docs.readme.com/docs)

## Features {#features}
Docusaurus is built with high attention to the developer and contributor experience.

- ⚛️ **Built with 💚 and React**
    - Extend and customize with React
    - Gain full control of your site's browsing experience by providing your own React components
- **Pluggable**
    - Bootstrap your site with a basic template, then use advanced features and plugins
    - Open source your plugins to share with the community
- ✂️ **Developer experience**
    - Start writing your docs right now
    - Universal configuration entry point to make it more maintainable by contributors
    - Hot reloading with lightning fast incremental build on changes
    - Route-based code and data splitting
    - Publish to GitHub Pages, Netlify, Vercel and other deployment services with ease

Our shared goal — to help your users find what they need fast, and understand your products better. We share with you our best practices helping you build your doc site right and well.

- 🎯 **SEO friendly**
    - HTML files are statically generated for every possible path
    - page-specific SEO to help your users land on your official docs directly relating their problems at hand
- 📝 **Powered by MDX**
    - Write interactive components via JSX and React embedded in markdown
    - Share your code in live editors to get your users love your products on the spot
- 🔍 **Search** - Your full site is searchable
- 💾 **Document Versioning** - Helps you keep documentation in sync with project releases.
- 🌍 **i18n** - Translate your site in multiple locales

Docusaurus 2 is born to be compassionately accessible to all your users, and lightning fast.

- ⚡️ **Lightning fast** - Docusaurus 2 follows the [PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) that makes sure your content loads blazing fast
- 🦖 **Accessible** - Attention to accessibility, making your site equally accessible to all users

## Comparison with other tools {#comparison-with-other-tools}

Across all static site generators, Docusaurus has a unique focus on documentation sites and has many out-of-the-box features.

We've also studied other main static site generators and would like to share our insights on the comparison, hopefully to help you navigate through the prismatic choices out there.

### Gatsby {#gatsby}

[Gatsby](https://www.gatsbyjs.com/) is packed with a lot of features, has a rich ecosystem of plugins and is capable of doing everything that Docusaurus does. Naturally, that comes at a cost of a higher learning curve. Gatsby does many things well and is suitable for building many types of websites. On the other hand, Docusaurus tries to do one thing super well - be the best tool for writing and publishing content.

GraphQL is also pretty core to Gatsby, although you don't necessarily need GraphQL to build a Gatsby site. In most cases when building static websites, you won't need the flexibility that GraphQL provides.

Many aspects of Docusaurus 2 were inspired by the best things about Gatsby and it's a great alternative.

[Docz](https://github.com/pedronauck/docz) is a Gatsby theme to build documentation website. It is currently less featured than Docusaurus.

### Next.js {#nextjs}

[Next.js](https://nextjs.org/) is another very popular hybrid React framework. It can help you build a good documentation website, but it is not opinionated toward the documentation use-case, and it will require a lot more work to implement what Docusaurus provides out-of-the-box.

[Nextra](https://github.com/shuding/nextra) is an opinionated static-site-generator built on top of Next.js. It is currently less featured than Docusaurus.

### VuePress {#vuepress}

[VuePress](https://vuepress.vuejs.org/) has many similarities with Docusaurus - both focus heavily on content-centric website and provides tailored documentation features out of the box. However, VuePress is powered by Vue, while Docusaurus is powered by React. If you want a Vue-based solution, VuePress would be a decent choice.

### MkDocs {#mkdocs}

[MkDocs](https://www.mkdocs.org/) is a popular Python static-site-generator with value proposition similar to Docusaurus.

It is a good option if you don't need a single-page application, and don't plan to leverage React.

[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) is a beautiful theme.

### Docsify {#docsify}

[Docsify](https://docsify.js.org/) makes it easy to create a documentation website, but is not a static-site generator and is not SEO friendly.

### GitBook {#gitbook}

[GitBook](https://www.gitbook.com/) has very clean design and has been used by many open source projects. With its focus shifting towards a commercial product rather than an open-source tool, many of its requirements no longer fit the needs as an open source project's documentation site. As a result, many have turned to other products. You may read about Redux's switch to Docusaurus [here](https://github.com/reduxjs/redux/issues/3161).

Currently, GitBook is only free for open-source and non-profit teams. Docusaurus is free for everyone.

### Jekyll {#jekyll}

[Jekyll](https://github.com/jekyll/jekyll) is one of the most mature static site generators around and has been a great tool to use — in fact, before Docusaurus, most of Facebook's Open Source websites are/were built on Jekyll! It is extremely simple to get started. We want to bring a similar developer experience as building a static site with Jekyll.

In comparison with statically generated HTML and interactivity added using `<script />` tags, Docusaurus sites are React apps. Using modern JavaScript ecosystem tooling, we hope to set new standards on doc sites performance, asset build pipeline and optimizations, and ease to setup.

## Staying informed {#staying-informed}

- [GitHub](https://github.com/facebook/docusaurus)
- [Twitter](https://twitter.com/docusaurus)
- [Blog](/blog)
- [Discord](https://discord.gg/Je6Ash6)

## Something missing? {#something-missing}

If you find issues with the documentation or have suggestions on how to improve the documentation or the project in general, please [file an issue](https://github.com/facebook/docusaurus) for us, or send a tweet mentioning the [@docusaurus](https://twitter.com/docusaurus) Twitter account.

For new feature requests, you can create a post on our [Canny board](/feedback), which is a handy tool for roadmapping and allows for sorting by upvotes, which gives the core team a better indicator of what features are in high demand, as compared to GitHub issues which are harder to triage. Refrain from making a Pull Request for new features (especially large ones) as someone might already be working on it or will be part of our roadmap. Talk to us first!