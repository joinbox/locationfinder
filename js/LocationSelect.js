export default class LocationSelect extends HTMLElement {
    constructor() {
        super();
        // get the select element
        this.locationSelect = this.querySelector('select');

    }

    connectedCallback() {
        this.getDefaultValue();
        this.setupChangeListener();
        this.handleChangeLocationSelect();
        
    }

    getDefaultValue() {
        this.locationSelect.value;
        console.log(this.locationSelect.value);
    }

    setupChangeListener() {
        this.addEventListener('change', this.handleChange.bind(this));
    }

    handleChangeLocationSelect() {
        window.addEventListener('changelocationselect', (ev) => {
            this.locationSelect.value = ev.detail;
        });
    }

    handleChange() {
        const detail = this.locationSelect.value;
        // Pass the selected value to other elements
        this.dispatchEvent(new CustomEvent('changelocationbutton', { detail, bubbles: true }));
        this.dispatchEvent(new CustomEvent('changelocationaddress', { detail, bubbles: true }));
    }
}