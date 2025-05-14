import { classed } from '@tw-classed/react';

export enum TextVariantType {
  textError = 'error',
  textNormal = 'normal',
  textWarning = 'warning',
  textAccept = 'accept',
}

// Base text styles
const baseTextStyles = 'font-sans';

// Color variants
const colorVariants = {
  [TextVariantType.textError]: `text-error-600`,
  [TextVariantType.textNormal]: `text-neutral-900`,
  [TextVariantType.textWarning]: `text-warning-600`,
  [TextVariantType.textAccept]: `text-success-600`,
} as const;

// Size variants
const sizeVariants = {
  xs: `text-xs`,
  sm: `text-sm`,
  base: `text-base`,
  lg: `text-lg`,
  xl: `text-xl`,
  '2xl': `text-2xl`,
  '3xl': `text-3xl`,
} as const;

// Weight variants
const weightVariants = {
  normal: `font-normal`,
  medium: `font-medium`,
  semibold: `font-semibold`,
  bold: `font-bold`,
} as const;

// Create the base text component with variants
export const Text = classed('p', baseTextStyles, {
  variants: {
    variant: colorVariants,
    size: sizeVariants,
    weight: weightVariants,
  },
  defaultVariants: {
    variant: TextVariantType.textNormal,
    size: 'base',
    weight: 'normal',
  },
});

// Export specific text components with predefined styles
export const TextError = classed(Text, {
  defaultVariants: {
    variant: TextVariantType.textError,
  },
});

export const TextNormal = classed(Text, {
  defaultVariants: {
    variant: TextVariantType.textNormal,
  },
});

export const TextWarning = classed(Text, {
  defaultVariants: {
    variant: TextVariantType.textWarning,
  },
});

export const TextAccept = classed(Text, {
  defaultVariants: {
    variant: TextVariantType.textAccept,
  },
});

// Export types for the variants
export type TextVariant = keyof typeof colorVariants;
export type TextSize = keyof typeof sizeVariants;
export type TextWeight = keyof typeof weightVariants;

// Export the variant configuration
export const textVariants = {
  color: colorVariants,
  size: sizeVariants,
  weight: weightVariants,
} as const;
