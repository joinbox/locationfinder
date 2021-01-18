export default class LocationAddress extends HTMLElement {
    constructor() {
        super();
        this.locationAddresses = this.querySelectorAll('address');
    }

    connectedCallback() {
        this.handleChangeLocationAddress();
    }

    handleChangeLocationAddress() {
        window.addEventListener('changelocationaddress', (ev) => {
            for (const address of this.locationAddresses) {
                if ( address.dataset.location === ev.detail) {
                    this.selectAddress(address);
                } else {
                    this.deselectAddress(address);
                }
            } 
        });
    }

    selectAddress(address) {
        requestAnimationFrame(() => address.dataset.isSelected = true);
    }

    deselectAddress(address) {
        requestAnimationFrame(() => address.dataset.isSelected = false);
    }


}