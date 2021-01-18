export default class LocationButtons extends HTMLElement {
    constructor() {
        super();
        this.locationValue;
        this.locationButtons = this.querySelectorAll('button');
    }

    connectedCallback() {
        this.setupEventListener();
        this.handleChangeLocationButton();        
    }

    setupEventListener() {
        this.locationButtons.forEach( (button) => {
            button.addEventListener('click', (ev) => {
                this.locationValue = ev.target.value;
                this.handleChange();
            });
        });
    }

    handleChangeLocationButton() {
        window.addEventListener('changelocationbutton', (ev) => {
            for (const button of this.locationButtons) {
                if (button.value === ev.detail) {
                    this.selectButton(button);
                } else {
                    this.deselectButton(button);
                }
            }
        });
    }

    handleChange() {
        const detail = this.locationValue;
        this.dispatchEvent(new CustomEvent('changelocationselect', { detail, bubbles: true }));
        this.dispatchEvent(new CustomEvent('changelocationaddress', { detail, bubbles: true }));
    }

    selectButton(button) {
        requestAnimationFrame(() => button.dataset.isSelected = true);
    }

    deselectButton(button) {
        requestAnimationFrame(() => button.dataset.isSelected = false);
    }
}