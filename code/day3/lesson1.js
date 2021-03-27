export default (str) => {
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let num = str.split('');
  let code = [];

  num.forEach((item) => {
    if (map[item]) {
      code.push(map[item]);
    }
  });

  const comb = (arr) => {
    let tmp = [];
    if(arr.length === 0){
      return tmp
    }else if(arr.length === 1 ){
      for (let i = 0; i < arr[0].length; i++) {
        tmp.push(`${arr[0][i]}`)        
      }
      return tmp;
    }else{
      for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr[1].length; j++) {
          tmp.push(`${arr[0][i]}${arr[1][j]}`);
        }
      }
      arr.splice(0, 2, tmp);
      if (arr.length > 1) {
        comb(arr);
      } else {
        return tmp;
      }     
    }    
    return arr[0];
  };

  return comb(code);
};
