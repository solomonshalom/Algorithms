const list = [1, 2, 3, 4, 5, 6]
const half = Math.ceil(list.length / 2);    

const firstHalf = list.splice(0, half)
const secondHalf = list.splice(-half)
