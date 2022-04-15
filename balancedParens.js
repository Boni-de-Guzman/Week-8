let text = "Will i become (good) or (bad programmer someday?"


function balancedParens(str) {
  let openPar = 0
  let closedPar = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openPar += 1
    } else if (str[i] === ")") {
      closedPar += 1
    }
  }
  return openPar === closedPar
}

console.log(balancedParens(text));
