import * as Popper from 'https://cdn.jsdelivr.net/npm/@popperjs/core@^2/dist/esm/index.js'
const emojiButton = document.querySelector('.emojiBtn i')
const tooltip = document.querySelector('.tooltip')
Popper.createPopper(emojiButton, tooltip,{
  placement:"top",
});

emojiButton.onclick = () => {
  tooltip.classList.add('shown');
}

import insertText from 'https://cdn.jsdelivr.net/npm/insert-text-at-cursor@0.3.0/index.js'

document.querySelector('emoji-picker').addEventListener('emoji-click', e => {
  insertText(document.querySelector('#inputMessage'), e.detail.unicode)
  
})

window.onclick = function(event) {
	
if (event.target !== emojiButton) {
  tooltip.classList.remove("shown");
}
}
