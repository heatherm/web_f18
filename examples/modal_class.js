class Modal{
    constructor(){
        this.modal = document.querySelector('#modal');
        this.modal.addEventListener('pointerdown', this.onModalClick);
        this.onModalClick = this.onModalClick.bind(this);
    }

    onModalClick(){
        this.classList.add('hidden');
        this.innerHTML = '';
    }

    show(imageDeails){
        this.modal.innerHTML = '';\
        new Image(
            this.modal,
            imageDeails.path,
            imageDeails.imageIndex);
        this.modal.classList.remove('hidden');
    }
}