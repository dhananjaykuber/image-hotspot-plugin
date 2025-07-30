/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/image-hotspot/view.js ***!
  \***********************************/
/**
 * Handles the positioning of tooltips for image hotspots.
 */

document.addEventListener("DOMContentLoaded", () => {
  const hotspotContainers = document.querySelectorAll(".imagehotspot__container");
  if (!hotspotContainers.length) {
    return;
  }

  // Update the position of the tooltip relative to the hotspot
  const updateTooltipPosition = hotspotContainer => {
    const tooltip = hotspotContainer.querySelector(".imagehotspot__tooltip");
    const hotspot = hotspotContainer.querySelector(".imagehotspot__hotspot");
    if (!tooltip || !hotspot) {
      return;
    }

    // Reset tooltip position
    tooltip.style.top = "";
    tooltip.style.left = "";
    tooltip.style.right = "";
    tooltip.style.bottom = "";
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const spacing = 4;

    // Default position of tooltip below the hotspot
    const top = hotspot.offsetTop + hotspot.offsetHeight + spacing;
    const left = hotspot.offsetLeft + hotspot.offsetWidth / 2 - tooltip.offsetWidth / 1.9;
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;

    // Calculate the tooltip's bounding rectangle
    const tooltipRect = tooltip.getBoundingClientRect();

    // Horizontal overflow handling
    if (tooltipRect.left < 0) {
      tooltip.style.left = `${spacing}px`;
    } else if (tooltipRect.right > viewport.width) {
      tooltip.style.left = `${viewport.width - tooltip.offsetWidth - 60}px`;
    }

    // Vertical overflow handling
    if (tooltipRect.bottom > viewport.height) {
      // If it overflows the bottom, try to position it above
      const aboveTop = hotspot.offsetTop - tooltip.offsetHeight - spacing;
      if (aboveTop > 0) {
        tooltip.style.top = `${aboveTop}px`;
      } else {
        // If it can't fit above, keep it at the bottom
        tooltip.style.top = `${viewport.height - tooltip.offsetHeight - spacing}px`;
      }
    }
  };

  // Update position for each hotspot container
  const updateAllTooltips = () => {
    hotspotContainers.forEach(updateTooltipPosition);
  };

  // Update tooltips on window resize
  window.addEventListener("resize", updateAllTooltips);
  updateAllTooltips();
});
/******/ })()
;
//# sourceMappingURL=view.js.map