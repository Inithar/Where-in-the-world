const size = {
  mobile: '500px',
  tablet: '768px',
  smallDesktop: '1200px',
  desktop: '1440px',
};

export const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  smallDesktop: `@media (min-width: ${size.smallDesktop})`,
  desktop: `@media (min-width: ${size.desktop})`,
};
