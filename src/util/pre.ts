export const UID: string = `log${new Date().getTime()}`;
interface Cache {
  container?: HTMLElement;
}
const cache: Cache = {};
const makeContainer = (): HTMLElement => {
  const div: HTMLElement = document.createElement("div");
  div.id = UID;
  div.style.cssText = `
  z-index: 999;
  padding: 16px;
  height: 300px;
  overflow: auto;
  line-height: 1.4;
  background: rgb(36, 36, 36);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-family: monospace, consolas, "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
  border: none;
  text-align: left;`;

  // @side-effect
  cache.container = div;
  return div;
};
const init = (): void => {
  const container: HTMLElement = cache.container || makeContainer();
  const firstChild: Element = document.body.children[0];
  if (firstChild && typeof firstChild === "object" && firstChild.id === UID) {
    return;
  }
  document.body.insertBefore(container, firstChild);
};

const makePre = (): HTMLPreElement => {
  const pre: HTMLPreElement = document.createElement("pre");
  pre.style.cssText = `
    color: #fff;
    font-size: 14px;
    line-height: 1.4;
    padding: 2px 10px;
  `;
  return pre;
};

const printOut = (input: string, safeMode: boolean = false) => {
  const pre: HTMLPreElement = makePre();
  pre.innerHTML = input;
  if (safeMode) {
    const container = document.getElementById(UID);
    if (!container) {
      init();
    }
  }
  if (cache.container) {
    cache.container.appendChild(pre);
  }
};

export { init, printOut };
