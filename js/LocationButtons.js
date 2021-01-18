export default class LocationButtons extends HTMLElement {
    constructor() {
        super();
        this.locationValue;
        this.locationButtons = this.querySelectorAll('button');
    }

    connectedCallback() {
        this.setupEventListener();   
    }

    setupEventListener() {
        this.locationButtons.forEach( (button) => {
            button.addEventListener('click', (ev) => {
                this.locationValue = ev.target.value;
                this.handleChange();
            });
        });
    }

    handleChange() {
        const detail = this.locationValue;
        this.dispatchEvent(new CustomEvent('changelocation', { detail, bubbles: true } ));
    }
}