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

// compatible with console.log
if (!window.console) {
  // @ts-ignore
  window.console = {
    log
  };
} else {
  const standardLog = window.console.log;
  window.console.log = (...input: any[]) => {
    standardLog(...input);
    for (let i = 0; i < input.length; i++) {
      log.log(input.toString());
    }
  };
}

export default log;
