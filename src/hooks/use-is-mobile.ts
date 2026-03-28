"use client";

import * as React from "react";

type UseIsMobileOptions = {
  mobileMaxWidth?: number;
  tabletMaxWidth?: number;
};

type DeviceViewport = {
  width: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const DEFAULT_MOBILE_MAX = 767;
const DEFAULT_TABLET_MAX = 1023;

function getViewportState(mobileMaxWidth: number, tabletMaxWidth: number): DeviceViewport {
  if (typeof window === "undefined") {
    return {
      width: 0,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    };
  }

  const width = window.innerWidth;
  const isMobile = width <= mobileMaxWidth;
  const isTablet = width > mobileMaxWidth && width <= tabletMaxWidth;

  return {
    width,
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
  };
}

export function useIsMobile(options: UseIsMobileOptions = {}): DeviceViewport {
  const mobileMaxWidth = options.mobileMaxWidth ?? DEFAULT_MOBILE_MAX;
  const tabletMaxWidth = options.tabletMaxWidth ?? DEFAULT_TABLET_MAX;

  const [viewport, setViewport] = React.useState<DeviceViewport>(() =>
    getViewportState(mobileMaxWidth, tabletMaxWidth)
  );

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mobileQuery = window.matchMedia(`(max-width: ${mobileMaxWidth}px)`);
    const tabletQuery = window.matchMedia(
      `(min-width: ${mobileMaxWidth + 1}px) and (max-width: ${tabletMaxWidth}px)`
    );

    const updateViewport = () => {
      const width = window.innerWidth;

      setViewport({
        width,
        isMobile: mobileQuery.matches,
        isTablet: tabletQuery.matches,
        isDesktop: !mobileQuery.matches && !tabletQuery.matches,
      });
    };

    updateViewport();

    mobileQuery.addEventListener("change", updateViewport);
    tabletQuery.addEventListener("change", updateViewport);
    window.addEventListener("resize", updateViewport);

    return () => {
      mobileQuery.removeEventListener("change", updateViewport);
      tabletQuery.removeEventListener("change", updateViewport);
      window.removeEventListener("resize", updateViewport);
    };
  }, [mobileMaxWidth, tabletMaxWidth]);

  return viewport;
}
