export type Component<P> = (props: P) => VNode<P>;
export type ComponentType<P> = string | Component<P>;

export type VNode<P> = {
  type: ComponentType<P>;
  props: P;
};

export type ChildNode =
  | null
  | undefined
  | JSX.Element
  | JSX.Element[];

export namespace JSX {
  export interface Element extends VNode<any> {}

  export interface IntrinsicElements {
    // MJML Core Structural elements
    mjml: MJMLAttributes;
    head: MJMLHeadAttributes;
    body: MJMLBodyAttributes;

    // MJML Head elements
    attributes: MJMLAttributes;
    breakpoint: MJMLBreakpointAttributes;
    font: MJMLFontAttributes;
    preview: MJMLPreviewAttributes;
    style: MJMLStyleAttributes;
    title: MJMLTitleAttributes;

    /// MJML Body elements
    accordion: MJMLAccordionAttributes;
    button: MJMLButtonAttributes;
    carousel: MJMLCarouselAttributes;
    column: MJMLColumnAttributes;
    divider: MJMLDividerAttributes;
    hero: MJMLHeroAttributes;
    image: MJMLImageAttributes;
    raw: MJMLRawAttributes;
    section: MJMLSectionAttributes;
    social: MJMLSocialAttributes;
    spacer: MJMLSpacerAttributes;
    text: MJMLTextAttributes;


    /// Wrapper element
    /** Wrapper enables to wrap multiple sections together.
     *  It's especially useful to achieve nested layouts with
     *  shared border or background images across sections.
     * */
    wrapper: MJMLWrapperAttributes;
  }

  // Common Attributes
  interface MJMLCommonAttributes {
    cssClass?: string;
    padding?: string | number;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
  }

  export interface MJMLAccordionAttributes extends MJMLCommonAttributes {
    border?: string;
    fontSize?: string | number;
    iconAlign?: 'left' | 'right';
    iconWidth?: string | number;
  }

  // Structural Attributes
  export interface MJMLBodyAttributes extends MJMLCommonAttributes {
    width: string;
    backgroundColor?: string;
  }

  export interface MJMLHeadAttributes {}

  export interface MJMLAttributes {}

  // Head Attributes
  export interface MJMLPreviewAttributes {
    children?: string;
  }

  export interface MJMLTitleAttributes {
    children?: string;
  }

  export interface MJMLFontAttributes {
    href: string;
    name: string;
  }

  export interface MJMLStyleAttributes {
    inline?: string;
    children?: string;
  }

  export interface MJMLBreakpointAttributes {
    width: string;
  }

  // Body Attributes
  export interface MJMLSectionAttributes extends MJMLCommonAttributes {
    backgroundColor?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    border?: string;
    direction?: 'ltr' | 'rtl';
    fullWidth?: boolean;
    textAlign?: 'left' | 'center' | 'right';
  }

  export interface MJMLColumnAttributes extends MJMLCommonAttributes {
    width?: string;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    backgroundColor?: string;
  }

  export interface MJMLTextAttributes extends MJMLCommonAttributes {
    align?: 'left' | 'center' | 'right';
    color?: string;
    fontStyle?: 'normal' | 'italic';
    fontSize?: string | number;
    fontWeight?: string | number;
    lineHeight?: string | number;
  }

  export interface MJMLImageAttributes extends MJMLCommonAttributes {
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    href?: string;
    border?: string;
  }

  export interface MJMLButtonAttributes extends MJMLCommonAttributes {
    align?: 'left' | 'center' | 'right';
    backgroundColor?: string;
    color?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    href: string;
    borderRadius?: string | number;
  }

  export interface MJMLSpacerAttributes extends MJMLCommonAttributes {
    height: string | number;
  }

  export interface MJMLDividerAttributes extends MJMLCommonAttributes {
    borderColor?: string;
    borderWidth?: string | number;
  }

  export interface MJMLSocialAttributes extends MJMLCommonAttributes {
    align?: 'left' | 'center' | 'right';
    fontSize?: string | number;
    iconSize?: string | number;
    mode?: 'horizontal' | 'vertical';
  }

  export interface MJMLCarouselAttributes extends MJMLCommonAttributes {
    align?: 'left' | 'center' | 'right';
    backgroundColor?: string;
    borderRadius?: string | number;
    thumbnails?: 'visible' | 'hidden';
  }

  export interface MJMLHeroAttributes extends MJMLCommonAttributes {
    backgroundColor?: string;
    backgroundHeight?: string | number;
    backgroundWidth?: string | number;
    textAlign?: 'left' | 'center' | 'right';
  }

  export interface MJMLRawAttributes {}

  // Wrapper Attributes
  export interface MJMLWrapperAttributes extends MJMLCommonAttributes {
    backgroundColor?: string;
  }
}
