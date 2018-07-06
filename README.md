
## Potential issue with Svelte {#each} index

**Steps to reproduce**

Run `yarn install && node app.js`

Open a browser and head to http://localhost:8080

Result: index within `{#each}` is undefined when used within an element attribute.

### Works on REPL with same Svelte version
https://svelte.technology/repl?version=2.9.1&gist=f9dddf6f11b3ab005a214d24059a6826
