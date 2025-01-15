import type {
  MJMLAccordionAttributes,
  MJMLButtonAttributes,
  MJMLCarouselAttributes,
  MJMLColumnAttributes,
  MJMLDividerAttributes,
  MJMLImageAttributes,
  MJMLSectionAttributes,
  MJMLSocialAttributes,
  MJMLSpacerAttributes,
  MJMLTextAttributes,
  MJMLWrapperAttributes,
} from './type.js';

export type Component<P> = (props: P) => EmailNode;
export type ComponentType<P> = string | Component<P>;

export type VNode<P> = {
  type: ComponentType<P>;
  props: P;
};

export type EmailNode = null | undefined | string | JSX.Element | JSX.Element[];

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

    // HTML Tags
    a: MJMLCommonAttributes;
    span: MJMLCommonAttributes;
    hr: any;
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

  export interface MJMLHeroAttributes extends MJMLCommonAttributes {
    backgroundColor?: string;
    backgroundHeight?: string | number;
    backgroundWidth?: string | number;
    textAlign?: 'left' | 'center' | 'right';
  }

  export interface MJMLRawAttributes {}

}
