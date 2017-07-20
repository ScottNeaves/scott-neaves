# How this site works

This site is powered by [simple-website](https://github.com/alexanderteinum/simple-website), an awesome markdown-to-static-site generator written in [go](https://golang.org/) which I discovered while reading about static site generators in the comments of [some Hacker News post](https://news.ycombinator.com/item?id=13005792), created by an [Alexander Teinum](https://alexanderteinum.github.io/index.html).

Update: I am now using a slightly modified fork of "simple-website," which you can find here: [github.com/scottneaves/simple-website](https://github.com/ScottNeaves/simple-website)

The workflow is simple - add a markdown file to `_posts` with filename `YYYY-MM-DD-post-name.md` to add a post, add a markdown file to `_pages` with filename `pagename.md` to add a page, or edit the `header.md` file in `_sections` to change the header text at the top of the homepage. Then, when you're satisfied with your updates, run `simple-website` (an executable provided by Alexander) to convert your markdown files into HTML, which you'll find structured in the following manner:

- /pages
- /posts
- all-posts.html
- index.html


Compress those files into a zipfile and upload them to your favorite static site host (mine is [bitballoon](https://www.bitballoon.com/)), and your updated site has been deployed!



Note: if you haven't used go before (which I hadn't, before creating this site) and you want to use [simple-website](https://github.com/alexanderteinum/simple-website), two things to note:

1. Create a local directory (like `/blog`) as the directory to contain all the `simple-webiste` stuff. When you run `go get github.com/alexanderteinum/simple-website`, do it in this directory. After you've "go-gotten" the simple-website repo, create a directory for your actual blogfiles inside `/blog` which bears the name of your actual blog (a la "`mkdir title-of-website`", as mentioned in Alexander's README)
2. When you go to download Alexander's code using `go get github.com/alexanderteinum/simple-website` as described in the README on the simple-website repo, you may get a  "`cannot download, $GOPATH not set`" error. This can easily be remedied by putting the following in your `~/.bash_profile` file (or wherever you normally set PATH variables) and then restarting your terminal:

> > `export GOPATH=/absolute/path/to/your/blog/directory`
> > `export PATH=$PATH:$GOPATH/bin`
