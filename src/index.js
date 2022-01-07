module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0)
  return false;
  
  let isDiffBracketOpen = (ch) => {
    for(let s of bracketsConfig){
      if(s[0] === ch)
        return true;
    }
    return false;
  }

  let getOpenByClosed = (closed) => {
    for(let s of bracketsConfig){
      if(s[1] === closed)
        return s[0];
    }
  }

  let isSameBrackets = (b) => {
    for(let s of bracketsConfig){
      if(s[0] === b && s[0] === s[1])
        return true;
    }
  }

    const open = [];
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];

      if(isSameBrackets(ch)) {
        if(open.indexOf(ch) > -1){ //bad idia BigO n^2
          open.pop();
        }
        else{
          open.push(ch);
        }
        continue;
      }

      if (isDiffBracketOpen(ch)) { //bad idia BigO n^2
        open.push(ch);
      } else {
        if (getOpenByClosed(ch) !== open.pop()) //bad idia BigO n^2
          return false;
      }
    }

  
  return open.length === 0;
}
