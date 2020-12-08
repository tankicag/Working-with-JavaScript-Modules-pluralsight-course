import getSessions, * as sessionRepository from "./sessionRepository.js";
// import getSessions, { sessionTemplate } from "./sessionRepository.js";
// import getSessions from "./sessionRepository.js";
// import sessionTemplate from "./template.js";
// import {sessionTemplate, errorMessage} from "./template.js";
// import * as template from "./template.js";

function render() {
  var list = document.querySelector("#sessions");
  if (!list) return;
  list.innerHTML = sessionRepository.sessionTemplate(data.listItems);
}

var data = {
  listItems: [],
};

getSessions().then((sessions) => {
  console.log("promises!");
  data.listItems = sessions;
  render();
});
