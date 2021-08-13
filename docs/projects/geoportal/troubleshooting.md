---
title: Troubleshooting
---

## `npm start` doesn’t detect changes

When you save a file while `npm start` is running, the browser should refresh with the updated code.

If this doesn’t happen, try one of the following workarounds:

- Check that your file is imported by your entrypoint. TypeScript will show errors on any of your source files, but webpack only reloads your files if they are directly or indirectly imported by one of your entrypoints.
- If your project is in a Dropbox folder, try moving it out.
- If the watcher doesn’t see a file called `index.js` and you’re referencing it by the folder name, you [need to restart the watcher](https://github.com/facebook/create-react-app/issues/1164) due to a webpack bug.
- Some editors like Vim and IntelliJ have a “safe write” feature that currently breaks the watcher. You will need to disable it. Follow the instructions in [“Adjusting Your Text Editor”](https://webpack.js.org/guides/development/#adjusting-your-text-editor).
- If your project path contains parentheses, try moving the project to a path without them. This is caused by a [webpack watcher bug](https://github.com/webpack/watchpack/issues/42).
- On Linux and macOS, you might need to [tweak system settings](https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers) to allow more watchers.
- If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an `.env` file in your project directory if it doesn’t exist, and add `CHOKIDAR_USEPOLLING=true` to it. This ensures that the next time you run `npm start`, the watcher uses the polling mode, as necessary inside a VM.

If none of these solutions help please leave a comment [in this thread](https://github.com/facebook/create-react-app/issues/659).