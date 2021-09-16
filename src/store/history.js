import cloneDeep from "lodash.clonedeep";

let stateHistory = [];

function trackHistory(store) {
  store.subscribeAction({
    after: (action, state) => {
      stateHistory.push(cloneDeep(state));
    },
  });
}

function rewindHistory(store) {
  // discard current state
  stateHistory.pop();

  // load previous state
  const currentHistory = cloneDeep(stateHistory[stateHistory.length - 1]);
  store.replaceState(currentHistory);
}

function clearHistory() {
  stateHistory = [];
}

export { trackHistory, rewindHistory, clearHistory };
