import React, { useState } from 'react';

export default function CloseButton() {
  const [isClose, setIsClosed] = useState(false);

  const onClick = e => {
    e.preventDefault();
    setIsClosed(!isClose);
  };
  return <button onClick={onClick}> x </button>;
}
