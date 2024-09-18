function display(message) {
  message = document.write(message);
}

function output1(message) {
  window.outputTag.innerHTML = message + "<br>";
}

function output2(message) {
  window.outputTag.innerHTML = window.outputTag.innerHTML + message + "<br>";
}

function ask(message) {
  message = "Enter a grocery item:";
  var userText = prompt(message);
  var userNumber = Number(userText);
  var isNotNumber = isNaN(userNumber);
  if (isNotNumber) {
    return userText;
  } else {
    return message;
  }
}

// function createColumn(colContentString) {
//      colContentString = "My Content";
//       const columnString = `<div class="col">${colContentString}</div>`;
//       return columnString;
// }

// function createRow(columnString) {
//       const rowString = `<div class="col">${rowContentString}</div>`;
//       return rowString;
// }

function createColumn(contentString) {
  const columnString = `<div class="col">${contentString}</div>`;
  return columnString;
}

function createColumns(contentsArray) {
  let columnString ="";
  for (let index=0; index <contentsArray.length; index++) {
    const content = contentsArray[index];
    columnString += createColumn(content);
  }

}

function createRow(columnString) {
  const rowString = `<div class="row">
      ${columnString}</div>`;
  return rowString;
}

function createContainer(rowString) {
  const container = `<div class="container">
    ${rowString}
  </div>`;
  return container;
}
