export default class LocationSelect extends HTMLElement {
    constructor() {
        super();
        // get the select element
        this.locationSelect = this.querySelector('select');

    }

    connectedCallback() {
        this.setupChangeListener();        
    }

    setupChangeListener() {
        this.addEventListener('change', this.handleChange.bind(this));
    }

    handleChange() {
        const detail = this.locationSelect.value;
        // Pass the selected value to other elements
        this.dispatchEvent(new CustomEvent('changelocation', { detail, bubbles: true }));
    }
}