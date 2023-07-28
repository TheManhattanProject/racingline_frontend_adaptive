'use client';
import React, { useState, useEffect } from 'react';
import { Detector, Online, Offline } from 'react-detect-offline';
import MobileError from './Error';

const CheckConnection = (props) => {
  const [winWidth, setWinWidth] = useState(true);

  const polling = {
    enabled: true,
    interval: 1800000,
    timeout: 1800000,
  };

  useEffect(() => {
    if (window.innerWidth <= 650) {
      setWinWidth(false);
    } else {
      setWinWidth(true);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 650) {
        setWinWidth(false);
      } else {
        setWinWidth(true);
      }
    });
  }, []);

  return (
    <>
      <Detector
        polling={polling}
        render={({ online }) =>
          online ? (
            props.children
          ) : winWidth ? (
            <DesktopError />
          ) : (
            <MobileError />
          )
        }
      />
    </>
  );
};

export default CheckConnection;
