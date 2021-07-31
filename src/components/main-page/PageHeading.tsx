import React from 'react';

import { TPageHeading } from '../../types/components';

export default function PageHeading({ children }: TPageHeading) {
  return (
    <div>
      { children }
    </div>
  );
};
