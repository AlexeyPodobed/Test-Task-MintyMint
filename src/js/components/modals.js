function toggleModal(event) {
	const target = event.target;
	const modalId = target.getAttribute('data-modal');

	if (modalId) {
		const modal = document.querySelector(`[data-modal-id="${modalId}"]`);

		if (modal) {
			const overlay = document.querySelector('.js-modal-overlay');

			modal.classList.toggle('active');
			overlay.classList.toggle('active');

			overlay.addEventListener('click', () => {
				modal.classList.remove('active');
				overlay.classList.remove('active');
			});
		}
	}
}

const modalButtons = document.querySelectorAll('.js-modal-button');

export function modalsInit() {
	modalButtons.forEach((button) => {
		button.addEventListener('click', toggleModal);
	});
}
