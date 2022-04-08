const modal = document.querySelector('.modal')
const rules = document.querySelector('.rules');

console.log(rules)
rules.addEventListener("click", () => {
 modal.style.display ='flex'
})

function fechar() {

    modal.style.display = 'none';
}