
// You should implement your task here.

module.exports = function towelSort (matrix=null) {
  if(matrix===null){
    return []
  }
  let result = [];
  for (let index = 0; index < matrix.length; index++) {
    if(index%2 ===1){
      result = result.concat(matrix[index].reverse())
    }else{
      result = result.concat(matrix[index])
    }
    
  }
  return result;
  
}
