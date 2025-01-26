import type {
  MJMLAccordionAttributes,
  MJMLBreakpointAttributes,
  MJMLButtonAttributes,
  MJMLCarouselAttributes,
  MJMLColumnAttributes,
  MJMLDividerAttributes,
  MJMLFontAttributes,
  MJMLHeroAttributes,
  MJMLHtmlAttributes,
  MJMLImageAttributes,
  MJMLPreviewAttributes,
  MJMLRawAttributes,
  MJMLSectionAttributes,
  MJMLSocialAttributes,
  MJMLSpacerAttributes,
  MJMLStyleAttributes,
  MJMLTextAttributes,
  MJMLTitleAttributes,
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

    /// MJML Head elements

    /**
     * Inside the attibutes, any tag a tag citing one MJML component (like `mj-text`; see example) overrides
     * default settings for listed MJML attributes on the one component.
     **/
    attributes: MJMLAttributes;

    /** The `<breakpoint />` allows you to control on which breakpoint the layout should go desktop/mobile. */
    breakpoint: MJMLBreakpointAttributes;

    /** This tag allows you to add custom attributes on any html tag of the generated html, using css selectors. */
    'html-attributes': MJMLHtmlAttributes;

    /**
     * This tag imports fonts. The tag has effect only if the template uses the font.
     * The href attribute points to a hosted css file; that file contains a @font-face declaration.
     * */
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
    a: {
      class?: string;
    };
    span: {
      class?: string;
    };
    hr: any;
  }

  export interface MJMLAttributes {
    /**
     * If set to "desktop", switch force desktop version for older (self-hosted) version of Outlook.com
     * that doesn't support media queries.
     * */
    owa?: 'desktop';

    /** used as `<html lang="">` attribute. Default is not set */
    lang?: string;

    /** Used as <html dir=""> attribute. Default is `auto`. */
    dir?: 'ltr' | 'rtl' | 'auto';
  }

  // Structural Attributes
  export interface MJMLHeadAttributes {}

  export interface MJMLBodyAttributes {
    /** The general background color */
    backgroundColor?: string;

    /** The class name, added to the root HTML element created */
    class?: string;

    /** The width of the email. Default is `600px`. */
    width?: string;
  }
}
