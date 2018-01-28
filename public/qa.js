async function main() {
  const color = await answer('What is your favorite color', ['purple', 'yellow'])
  if (color === 'purple') {
    const typeOfPurple = await answer('What kind of purple', ['dark purple', 'light purple'])
    // ... continue
  }
  else if (answer === 'yellow') {
    const typeOfYellow = await answer('What kind of yellow', ['gold', 'pee'])
    // ... continue
  }
}
main()
