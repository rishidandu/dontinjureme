const container = document.querySelector('.container')

// I'm calling this answer so that Maria can say "await answer"
// Basically, it replaces everything in .container with a question and buttons to choose an answer
const answer = (question, choices) => new Promise(resolve => {
  container.innerHTML = ''

  const questionNode = document.createElement('h1')
  questionNode.className = 'question'
  questionNode.textContent = question
  container.appendChild(questionNode)

  for (let choice of choices) {
    const answerNode = document.createElement('div')
    answerNode.className = 'answer'
    answerNode.textContent = choice
    answerNode.addEventListener('click', () => resolve(choice))
    container.appendChild(answerNode)
  }
})

const suggest = (title, imgURL, linkURL) => {
  container.innerHTML = ''

  const titleNode = document.createElement('h1')
  titleNode.className = 'suggestion'
  titleNode.textContent = title
  container.appendChild(titleNode)
  
  const imgNode = document.createElement('img')
  imgNode.src = imgURL
  const linkNode = document.createElement('a')
  linkNode.href = linkURL
  linkNode.appendChild(imgNode)
  container.appendChild(linkNode)
}

window.answer = answer
window.suggest = suggest