import React from 'react';
import ExternalLink from '../../../../components/external-link';

import './pricon.scss';

const Pricon = () => (
  <div id="pricon">
    Want to attend OpenMined's first conference for privacy?{' '}
    <ExternalLink to="https://pricon.openmined.org">
      Get your free ticket!
    </ExternalLink>
  </div>
);

export default Pricon;
