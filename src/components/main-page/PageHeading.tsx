import React from 'react';

import { TPageHeading } from '../../types/props';

export default function PageHeading({ children }: TPageHeading) {
  return (
    <div>
      { children }
    </div>
  )
};
