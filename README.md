# Allons-y redirect (optional)

This tiny public repo reclaims the `allons-y` name after `scottanium/allons-y` is renamed to `scottanium/language-app`. GitHub Pages does not redirect the old URL.

Open https://scottanium.github.io/allons-y/ and you are sent to https://scottanium.github.io/language-app/. `sw.js` replaces the leftover Allons-y service worker, deletes `allonsy-*` caches, and unregisters itself.

Saved progress is in localStorage on `scottanium.github.io` (origin, not path), so it is already readable at the new URL. This repo does not move data.

Upload `index.html` first, then `sw.js` last. Turn on Pages: branch `main`, folder `/ (root)`.
