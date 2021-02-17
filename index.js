
import LocationSelect from './js/LocationSelect.js';
import LocationButtons from './js/LocationButtons.js';
import LocationAddress from './js/LocationAddress.js';
import LocationFinder from './js/LocationFinder.js';

// define custom elements
customElements.define('location-finder', LocationFinder);
customElements.define('location-select', LocationSelect);
customElements.define('location-buttons', LocationButtons);
customElements.define('location-address', LocationAddress);