function sumArray(arr) 
{
    return arr.reduce((acc, curr) => acc + curr, 0);
}
  
function filterPositive(arr) 
{
    return arr.filter(num => num > 0);
}
  
function filterNegative(arr) 
{
    return arr.filter(num => num < 0);
}
  
module.exports = { sumArray, filterPositive, filterNegative };
  
