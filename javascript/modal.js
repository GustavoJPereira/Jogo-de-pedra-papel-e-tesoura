const modal = document.querySelector('.container-modal')
const rules = document.querySelector('.rules');

rules.addEventListener('click', () => {
    modal.style.display = 'flex';
});

function fechar() {

    modal.style.display = 'none';
}
