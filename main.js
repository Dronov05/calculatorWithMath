const output = document.querySelector('output')

document.querySelectorAll('button').forEach(button => {
   button.addEventListener('click', function () {
      deleteInitialValue()
      calc(this.value)
   })
})

document.addEventListener('keydown', event => {
   deleteInitialValue()
   if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
})

function deleteInitialValue() {
   if (output.textContent === '0') {
      output.textContent = ''
   }
}

function calc(value) {
   if (value.match(/=|Enter/)) {
      try {
         output.textContent = Math.trunc(math.evaluate(output.textContent))
      } catch {
         const currentVal = output.textContent
         const newVal = 'недопустимое выражение'
         output.textContent = newVal
         setTimeout(() => {
            output.textContent = currentVal
         }, 1000)
      }
   } else if (value === 'Clear') {
      output.textContent = '0'

   } else if (value.match(/CE|Backspace/)) {
      output.textContent = output.textContent.substring(0, output.textContent.length - 1)
   } else {
      output.textContent += value
   }
}