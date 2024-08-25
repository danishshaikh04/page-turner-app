import React, { useState } from 'react';
import { FlippingPages } from 'flipping-pages';
const PageFlipWrapper = ({ pages }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="pages">
      <FlippingPages
        direction="right-to-left"
        onSwipeEnd={(index) => setSelected(index)}
        selected={selected}
      >
        {pages.map((PageComponent, index) => (
          <div key={index} className={`page page${index + 1}`}>
            <PageComponent />
          </div>
        ))}
      </FlippingPages>
    </div>
  );
};

export default PageFlipWrapper;


