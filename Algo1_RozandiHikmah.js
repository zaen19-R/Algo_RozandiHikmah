const Number = [
    [7,0,11,15],
    [3,5,8,6],
    [12,15,89,99],
    [10000,10001,99,1]
  ]

Number.forEach(function(row){
  let maxnumber = Math.max(...row)
  console.log(maxnumber)
})