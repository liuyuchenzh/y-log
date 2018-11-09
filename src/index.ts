import { init, printOut, UID } from "./util/log";
const cache = {
  init: false
};
const log = {
  id: UID,
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
    try {
      log.log(input[i].toString());
    } catch (e) {
      log.log(`${input[i]}`);
    }
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
