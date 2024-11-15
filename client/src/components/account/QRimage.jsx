import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Change QRCode to QRCodeCanvas
// import styled from 'styled-components';
function DenseQRCode() {
  return (
      <QRCodeCanvas
        value="https://web.whatsapp.com"
        size={300}
        fgColor="#fff"
        bgColor="#212120"
        level="H"
        includeMargin={true}
      />
  );
}

export default DenseQRCode;

