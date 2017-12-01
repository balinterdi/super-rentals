import Rental from '@cardstack/models/generated/rental';
import { computed } from '@ember/object';

export default Rental.extend({
  sleeps: computed('bedrooms', function() {
    return this.get('bedrooms') * 4;
  })
});
