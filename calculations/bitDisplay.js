export const bitGroupSum = (bitGroup) => 
  bitGroup.reduce((sum, bit, index, array) => 
    sum + (bit * Math.pow(2, ( array.length - ( index + 1 ) )))
  , 0)