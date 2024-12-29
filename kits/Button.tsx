import type { EmailNode } from '../emails/jsx.js';

export type ButtonProps = {
  style?: {
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
    borderRight?: string;
    borderTop?: string;
    color?: string;
    containerBackgroundColor?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: number;
    height?: string;
    innerPadding?: string;
    letterSpacing?: string;
    lineHeight?: string;
  };

  children?: EmailNode;
  href?: string;
};

export function Button(props: ButtonProps) {
  const { style, ...rest } = props;

  return <button {...style} {...rest} />;
}
