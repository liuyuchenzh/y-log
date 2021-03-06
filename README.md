# yLog

This is a simplified version of [`min-log`](https://github.com/chunpu/min-log) with `log.setOutputer('browser_html')` setup (But slightly different)

Targeting ancient IE (6+) and desktop webview.

![screenShot](./test/screenshot.png)

## Installation

```bash
npm i -D y-console
# or
yarn add -D y-console
```

## Usage

```js
import log from "y-console";
log.log("This works");
// or
import "y-console";
console.log("This also works");
```

> If no bundling tool (`webpack`, `parcel` etc) is available for your workflow, just include [this](./dist/index.umd.js) to the your html file, and use `console.log` as usual.

## API

### `log`

Interface

```ts
log.log = (input: string, safeMode: boolean = false) => void
```

Usage

```js
log.log("string");
log.log("string", true);
```

If set `safeMode` to `true`, then we will make sure the container (`<div />`) of the log exists, or one will be created.

### `id`

The id property of the log container

```html
<div id="id"></div>
```
