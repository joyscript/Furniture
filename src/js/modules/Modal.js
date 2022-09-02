const scrollBar = window.innerWidth - document.documentElement.offsetWidth;
const header = document.querySelector('.header');

export class Modal {
  constructor(modal, closeBtn) {
    this.modal = document.querySelector(modal);
    this.closeBtn = this.modal.querySelector(closeBtn);
    this.closeTimeout;
    this.modalHandlers();
  }

  openModal() {
    this.modal.classList.add('active');
    document.body.style.cssText = `overflow: hidden; padding-right: ${scrollBar}px`;
    header.style.paddingRight = `${scrollBar}px`;
    if (this.closeTimeout) this.closeTimeout();
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style = '';
    header.style = '';
    if (this.closeTimeout) clearTimeout(this.closeTimeout);
  }

  modalHandlers() {
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal || e.target === this.closeBtn) this.closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.modal.classList.contains('active')) this.closeModal();
    });
  }
}
