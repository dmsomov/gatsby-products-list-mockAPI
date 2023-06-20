import React from "react";

import "./index.css"

export const IframeComponent = ({close}) => {
  console.log('111111')
  console.log('333333')
  return (
    <div className="wrapper">
      <button onClick={close}>close</button>
      <iframe className="iframeWrap" src="https://pay.maldopay.com/?serviceId=2031&tid=31549851&token=1686694230KWbUBs1Nphs0RD&locale=tr">

      </iframe>
    </div>
  )
}
