import React from 'react'

function NotFound({onHandleLinksActiveClosed }) {
  return (
    <div className="container not-found">
      <div onClick={onHandleLinksActiveClosed}>Not Found</div>
    </div>
  );
}

export default NotFound