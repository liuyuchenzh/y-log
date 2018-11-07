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
const loopLog = (...input: any[]) => {
  for (let i = 0; i < input.length; i++) {
    log.log(input[i].toString());
  }
};

// compatible with console.log
if (!window.console) {
  // @ts-ignore
  window.console = {
    log: loopLog
  };
} else {
  const standardLog = window.console.log;
  window.console.log = (...input: any[]) => {
    standardLog(...input);
    loopLog(...input);
  };
}

export default log;
