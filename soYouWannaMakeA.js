import React from 'react'

function zip (arr1, arr2) {
  const arr3 = []
  for (const i in arr1) {
    arr3.push(arr1[i], arr2[i])
  }
  return arr3
}

function createStyles (strings, values, props = null) {
  values = values.map(value => {
    if (value.styledId) return `.${value.styledId}`
    // if (typeof value === 'function') return value(props)
    return value
  })
  return zip(strings, [...values, '']).join('')
}

function WellWhoopDeeDoo () {
  return React.createElement('div', {})
}

function createSoYouWannaMakeAComponent (strings, ...values) {
  console.log(strings, values)
  const log = createStyles(strings, values)
  console.log('log: ', log)
  return WellWhoopDeeDoo
}

export default {
  div: (...args) => createSoYouWannaMakeAComponent(args)
}
