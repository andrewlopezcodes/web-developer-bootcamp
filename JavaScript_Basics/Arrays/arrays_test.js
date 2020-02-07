let x = [1,2,3,4];
function reducer(accumulator, currentValue){
  return accumulator + currentValue
}
// x.reduce(reducer);

const sumArray = (z)=> (z.reduce(reducer));
sumArray(x);

// ---------------------------------------------

function isUniform(a){
  let t = [];
  a.forEach(function(exs){
    if(exs !== a[0]){
      t.push(exs);
    }
  });
   if(t.length !== 0){
      return "false";
    } else {
      return "true";
    }
  };
  
  isUniform([1,1,1,1,1,{},1]);

  // -----------------------------------

  function max(b){
    let higherValue;
    b.forEach(function(exes){
      higherValue = exes;
    });
    for(let i =0; i< b.length; i++){
      if(b[i] > higherValue){
        higherValue = b[i]
      }
    }
    return higherValue;
  }
  
  max([-5, -4, -22]);