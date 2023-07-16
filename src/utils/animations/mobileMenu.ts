export const mobileMenuAnimation = (isVisible: boolean) => ({
  from: { transform: 'scale(0.95)' },
  to: {
    display: 'block',
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? 'auto' : 'none',
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
  },
  config: { duration: 100 },
});
