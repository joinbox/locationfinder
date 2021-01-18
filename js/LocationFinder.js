export default class LocationFinder extends HTMLElement {
    constructor() {
        super();
        this.locationValue;
        // get other components
        this.locationSelect = this.querySelector('location-select');
        this.locationButtons = this.querySelector('location-buttons');
        this.locationAddress = this.querySelector('location-address');
        
    }

    connectedCallback() {
        this.setupLocationChangeListener();
    }

    setupLocationChangeListener() {
        this.addEventListener('changelocation', (ev) => {
            this.locationValue = ev.detail;

            // change location address
            this.changeAddress();
            this.changeButtons();
            this.changeSelect();
        });
    }

    changeAddress() {
        const addresses = this.locationAddress.querySelectorAll('address');
        for (const address of addresses) {
            if (address.dataset.location === this.locationValue) {
                this.selectElement(address);
            } else {
                this.deselectElement(address);
            }
        }
    }

    changeButtons() {
        const buttons = this.locationButtons.querySelectorAll('button');
        for (const button of buttons) {
            if (button.value === this.locationValue) {
                this.selectElement(button);
            } else {
                this.deselectElement(button);
            }
        }
    }

    changeSelect() {
        const select = this.locationSelect.querySelector('select');
        select.value = this.locationValue;
    }

    selectElement(element) {
        requestAnimationFrame(() => element.dataset.isSelected = true);
    }

    deselectElement(element) {
        requestAnimationFrame(() => element.dataset.isSelected = false);
    }
}