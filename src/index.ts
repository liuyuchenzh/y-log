import { init, printOut } from "./util/pre";
const cache = {
  init: false
};
const log = {
  log: (input: string, safeMode: boolean = false): void => {
    if (!cache.init) {
      init();
      cache.init = true;
    }
    printOut(input, safeMode);
  }
};

// print multi input
function loopLog(...input: any[]) {
  for (let i = 0; i < input.length; i++) {
    log.log(input[i].toString());
  }
}

// compatible with console.log
if (!window.console) {
  // @ts-ignore
  window.console = {
    log: loopLog
  };
} else {
  const standardLog = window.console.log;
  window.console.log = function(...input: any[]) {
    standardLog.call(window.console, ...input);
    loopLog(...input);
  };
}

export default log;
