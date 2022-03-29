const selectionSort = (originalList) => {
  const list = [...originalList]
  for (let i = 0; i < list.length; i++) {
    let min = i
    for (let j = i + 1; j < list.length; j++) {
      if (list[min] > list[j]) {
        min = j
      }
    }
    if (min !== i) {
      // a new minimum is found. Swap that with the current element
      [list[i], list[min]] = [list[min], list[i]]
    }
  }
  return list
}

const listOfNumbers = [300, 20, 65, 30, 20]
console.log(selectionSort(listOfNumbers))
