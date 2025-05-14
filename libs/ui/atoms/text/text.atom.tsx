import React from 'react';
import { Text, TextSize, TextVariantType, TextWeight } from './text.variant';

interface TextAtomProps {
  children: React.ReactNode;
  variant?: TextVariantType;
  size?: TextSize;
  weight?: TextWeight;
  className?: string;
  as?: 'p';
}

export const TextAtom: React.FC<TextAtomProps> = ({
  children,
  variant,
  size,
  weight,
  className,
  as,
  ...props
}) => {
  return (
    <Text
      as={as}
      variant={variant}
      size={size}
      weight={weight}
      className={className}
      {...props}
    >
      {children}
    </Text>
  );
};

// Export convenience components for each variant
export const ErrorText: React.FC<Omit<TextAtomProps, 'variant'>> = (
  props,
  className?: string,
) => (
  <TextAtom
    className={className}
    variant={TextVariantType.textError}
    {...props}
  />
);

export const NormalText: React.FC<Omit<TextAtomProps, 'variant'>> = (
  props,
  className?: string,
) => (
  <TextAtom
    className={className}
    variant={TextVariantType.textNormal}
    {...props}
  />
);

export const WarningText: React.FC<Omit<TextAtomProps, 'variant'>> = (
  props,
  className?: string,
) => (
  <TextAtom
    className={className}
    variant={TextVariantType.textWarning}
    {...props}
  />
);

export const AcceptText: React.FC<Omit<TextAtomProps, 'variant'>> = (
  props,
  className?: string,
) => (
  <TextAtom
    className={className}
    variant={TextVariantType.textAccept}
    {...props}
  />
);

export default TextAtom;
