function zip (arr1, arr2) {
  const arr3 = []
  for (const i in arr1) {
    arr3.push(arr1[i], arr2[i])
  }
  return arr3
}

function reverser (strings, ...values) {
  values = values.map(value =>
    value
      .split('')
      .reverse()
      .join('')
  )
  return zip(strings, [...values, '']).join('')
}

const str = reverser`hey there, bubba reversed is ${'bubba'}`

console.log({ str })
