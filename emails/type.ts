export interface MJMLButtonAttributes {
  /** Horizontal alignment. Default value is 'center' */
  align?: string;

  /** Button background color. Default value is '#414141' */
  backgroundColor?: string;

  /** CSS border format. Default value is 'none' */
  border?: string;

  /** CSS border format. Default value is 'n/a' */
  borderBottom?: string;

  /** CSS border format. Default value is 'n/a' */
  borderLeft?: string;

  /** Border radius. Default value is '3px' */
  borderRadius?: string;

  /** CSS border format. Default value is 'n/a' */
  borderRight?: string;

  /** CSS border format. Default value is 'n/a' */
  borderTop?: string;

  /** Text color. Default value is '#ffffff' */
  color?: string;

  /** Button container background color. Default value is 'n/a' */
  containerBackgroundColor?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;

  /** Font name. Default value is 'Ubuntu, Helvetica, Arial, sans-serif' */
  fontFamily?: string;

  /** Text size. Default value is '13px' */
  fontSize?: string;

  /** Normal/italic/oblique. Default value is 'n/a' */
  fontStyle?: string;

  /** Text thickness. Default value is 'normal' */
  fontWeight?: number;

  /** Button height. Default value is 'n/a' */
  height?: string;

  /** Link to be triggered when the button is clicked. Default value is 'n/a' */
  href?: string;

  /** Inner button padding. Default value is '10px 25px' */
  innerPadding?: string;

  /** Letter-spacing. Default value is 'n/a' */
  letterSpacing?: string;

  /** Line-height on link. Default value is '120%' */
  lineHeight?: string;

  /** Supports up to 4 parameters. Default value is '10px 25px' */
  padding?: string;

  /** Bottom offset. Default value is 'n/a' */
  paddingBottom?: string;

  /** Left offset. Default value is 'n/a' */
  paddingLeft?: string;

  /** Right offset. Default value is 'n/a' */
  paddingRight?: string;

  /** Top offset. Default value is 'n/a' */
  paddingTop?: string;

  /** Specify the rel attribute for the button link. Default value is 'n/a' */
  rel?: string;

  /** Specify the target attribute for the button link. Default value is '_blank' */
  target?: string;

  /** Text-align button content. Default value is 'none' */
  textAlign?: string;

  /** Underline/overline/none. Default value is 'none' */
  textDecoration?: string;

  /** Capitalize/uppercase/lowercase. Default value is 'none' */
  textTransform?: string;

  /** Tooltip & accessibility. Default value is 'n/a' */
  title?: string;

  /** Vertical alignment. Default value is 'middle' */
  verticalAlign?: string;

  /** Button width. Default value is 'n/a' */
  width?: string;
}

export interface MJMLAccordionAttributes {
  /** CSS border format. Default value is '2px solid black' */
  border?: string;

  /** Background-color of the cell. Default value is 'n/a' */
  containerBackgroundColor?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;

  /** Font. Default value is 'Ubuntu, Helvetica, Arial, sans-serif' */
  fontFamily?: string;

  /** Icon alignment. Default value is 'middle' */
  iconAlign?: string;

  /** Icon width. Default value is '32px' */
  iconHeight?: string;

  /** Display icon left or right. Default value is 'right' */
  iconPosition?: string;

  /** Alt text when accordion is unwrapped. Default value is '-' */
  iconUnwrappedAlt?: string;

  /** Icon when accordion is unwrapped. Default value is 'https?://i.imgur.com/w4uTygT.png' */
  iconUnwrappedUrl?: string;

  /** Icon height. Default value is '32px' */
  iconWidth?: string;

  /** Alt text when accordion is wrapped. Default value is '+' */
  iconWrappedAlt?: string;

  /** Icon when accordion is wrapped. Default value is 'https?://i.imgur.com/bIXv1bk.png' */
  iconWrappedUrl?: string;

  /** Padding. Default value is '10px 25px' */
  padding?: string;

  /** Padding bottom. Default value is 'n/a' */
  paddingBottom?: string;

  /** Padding left. Default value is 'n/a' */
  paddingLeft?: string;

  /** Padding right. Default value is 'n/a' */
  paddingRight?: string;

  /** Padding top. Default value is 'n/a' */
  paddingTop?: string;
}

export interface MJMLCarouselAttributes {
  /** Horizontal alignment. Default value is 'center' */
  align?: string;

  /** Column background color. Default value is 'none' */
  containerBackgroundColor?: string;

  /** Border radius. Default value is 'n/a' */
  borderRadius?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;

  /** Width of the icons on left and right of the main image. Default value is '44px' */
  iconWidth?: string;

  /** Icon on the left of the main image. Default value is 'https?://i.imgur.com/xTh3hln.png' */
  leftIcon?: string;

  /** Icon on the right of the main image. Default value is 'https?://i.imgur.com/os7o9kz.png' */
  rightIcon?: string;

  /** Border of the thumbnails. Default value is 'none' */
  tbBorder?: string;

  /** Border-radius of the thumbnails. Default value is 'none' */
  tbBorderRadius?: string;

  /** CSS border color of the hovered thumbnail. Default value is 'none' */
  tbHoverBorderColor?: string;

  /** CSS border color of the selected thumbnail. Default value is 'none' */
  tbSelectedBorderColor?: string;

  /** Thumbnail width. Default value is 'null' */
  tbWidth?: string;

  /** Display or not the thumbnails (visible/hidden). Default value is 'hidden' */
  thumbnails?: string;
}

export interface MJMLColumnAttributes {
  /** Background color for a column. Default value is 'n/a' */
  backgroundColor?: string;

  /** Requires a padding, inner background color for column. Default value is 'n/a' */
  innerBackgroundColor?: string;

  /** CSS border format. Default value is 'none' */
  border?: string;

  /** CSS border format. Default value is 'n/a' */
  borderBottom?: string;

  /** CSS border format. Default value is 'n/a' */
  borderLeft?: string;

  /** CSS border format. Default value is 'n/a' */
  borderRight?: string;

  /** CSS border format. Default value is 'n/a' */
  borderTop?: string;

  /** Border radius. Default value is 'n/a' */
  borderRadius?: string;

  /** CSS border format. Default value is 'n/a' */
  innerBorder?: string;

  /** CSS border format; requires a padding. Default value is 'n/a' */
  innerBorderBottom?: string;

  /** CSS border format; requires a padding. Default value is 'n/a' */
  innerBorderLeft?: string;

  /** CSS border format; requires a padding. Default value is 'n/a' */
  innerBorderRight?: string;

  /** CSS border format; requires a padding. Default value is 'n/a' */
  innerBorderTop?: string;

  /** Border radius; requires a padding. Default value is 'n/a' */
  innerBorderRadius?: string;

  /** Column width. Default value is '(100 / number of non-raw elements in section)%' */
  width?: string;

  /** Middle/top/bottom (note?: middle works only when adjacent mj-column is also set to middle). Default value is 'top' */
  verticalAlign?: string;

  /** Supports up to 4 parameters. Default value is 'n/a' */
  padding?: string;

  /** Section top offset. Default value is 'n/a' */
  paddingTop?: string;

  /** Section bottom offset. Default value is 'n/a' */
  paddingBottom?: string;

  /** Section left offset. Default value is 'n/a' */
  paddingLeft?: string;

  /** Section right offset. Default value is 'n/a' */
  paddingRight?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;
}

export interface MJMLDividerAttributes {
  /** Left/right/center alignment. Default value is 'center' */
  align?: string;

  /** Divider color. Default value is '#000000' */
  borderColor?: string;

  /** Dashed/dotted/solid. Default value is 'solid' */
  borderStyle?: string;

  /** Divider's border width. Default value is '4px' */
  borderWidth?: string;

  /** Inner element background color. Default value is 'n/a' */
  containerBackgroundColor?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;

  /** Supports up to 4 parameters. Default value is '10px 25px' */
  padding?: string;

  /** Bottom offset. Default value is 'n/a' */
  paddingBottom?: string;

  /** Left offset. Default value is 'n/a' */
  paddingLeft?: string;

  /** Right offset. Default value is 'n/a' */
  paddingRight?: string;

  /** Top offset. Default value is 'n/a' */
  paddingTop?: string;

  /** Divider width. Default value is '100%' */
  width?: string;
}

export interface MJMLHeroAttributes {
  /** Hero background color. Default value is '#ffffff' */
  backgroundColor?: string;

  /** Height of the image used (mandatory). Default value is 'none' */
  backgroundHeight?: string;

  /** Background image position. Default value is 'center center' */
  backgroundPosition?: string;

  /** Absolute background URL. Default value is 'n/a' */
  backgroundUrl?: string;

  /** Width of the image used (mandatory). Default value is 'parent element width' */
  backgroundWidth?: string;

  /** Border radius. Default value is 'n/a' */
  borderRadius?: string;

  /** Hero section height (required for fixed-height mode). Default value is '0px' */
  height?: string;

  /** Choose if the height is fixed based on the height attribute or fluid. Default value is 'fluid-height' */
  mode?: string;

  /** Padding (supports up to 4 parameters). Default value is '0px' */
  padding?: string;

  /** Bottom offset. Default value is '0px' */
  paddingBottom?: string;

  /** Left offset. Default value is '0px' */
  paddingLeft?: string;

  /** Right offset. Default value is '0px' */
  paddingRight?: string;

  /** Top offset. Default value is '0px' */
  paddingTop?: string;

  /** Content vertical alignment (top/middle/bottom). Default value is 'top' */
  verticalAlign?: string;
}

export interface MJMLImageAttributes {
  /** Image alignment. Default value is 'center' */
  align?: string;

  /** Image description. Default value is '' */
  alt?: string;

  /** CSS border definition. Default value is 'none' */
  border?: string;

  /** Top CSS border definition. Default value is 'none' */
  borderTop?: string;

  /** Bottom CSS border definition. Default value is 'none' */
  borderBottom?: string;

  /** Left CSS border definition. Default value is 'none' */
  borderLeft?: string;

  /** Right CSS border definition. Default value is 'none' */
  borderRight?: string;

  /** Border radius. Default value is 'n/a' */
  borderRadius?: string;

  /** Inner element background color. Default value is 'n/a' */
  containerBackgroundColor?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;

  /** If 'true', will be full width on mobile even if width is set. Default value is 'n/a' */
  fluidOnMobile?: string;

  /** Image height. Default value is 'auto' */
  height?: string;

  /** Link to redirect to on click. Default value is 'n/a' */
  href?: string;

  /** Specify the link name attribute. Default value is 'n/a' */
  name?: string;

  /** Padding (supports up to 4 parameters). Default value is '10px 25px' */
  padding?: string;

  /** Bottom offset. Default value is 'n/a' */
  paddingBottom?: string;

  /** Left offset. Default value is 'n/a' */
  paddingLeft?: string;

  /** Right offset. Default value is 'n/a' */
  paddingRight?: string;

  /** Top offset. Default value is 'n/a' */
  paddingTop?: string;

  /** Specify the rel attribute. Default value is 'n/a' */
  rel?: string;

  /** Set width based on media query. Default value is 'n/a' */
  sizes?: string;

  /** Image source. Default value is 'n/a' */
  src?: string;

  /** Enables setting a different image source based on the viewport. Default value is 'n/a' */
  srcset?: string;

  /** Link target on click. Default value is '_blank' */
  target?: string;

  /** Tooltip and accessibility. Default value is 'n/a' */
  title?: string;

  /** Reference to image map (be careful, not supported everywhere). Default value is 'n/a' */
  usemap?: string;

  /** Image width. Default value is 'parent width' */
  width?: string;
}

export interface MJMLSectionAttributes {
  /** Background color. Default value is 'n/a' */
  backgroundColor?: string;

  /** Background position. Default value is 'top center' */
  backgroundPosition?: string;

  /** Background position x. Default value is 'none' */
  backgroundPositionX?: string;

  /** Background position y. Default value is 'none' */
  backgroundPositionY?: string;

  /** Background repeat. Default value is 'repeat' */
  backgroundRepeat?: string;

  /** Background size. Default value is 'auto' */
  backgroundSize?: string;

  /** Background URL. Default value is 'n/a' */
  backgroundUrl?: string;

  /** Border. Default value is 'none' */
  border?: string;

  /** Border bottom. Default value is 'n/a' */
  borderBottom?: string;

  /** Border left. Default value is 'n/a' */
  borderLeft?: string;

  /** Border radius. Default value is 'n/a' */
  borderRadius?: string;

  /** Border right. Default value is 'n/a' */
  borderRight?: string;

  /** Border top. Default value is 'n/a' */
  borderTop?: string;

  /** CSS class. Default value is 'n/a' */
  cssClass?: string;

  /** Direction. Default value is 'ltr' */
  direction?: string;

  /** Full width. Default value is 'n/a' */
  fullWidth?: string;

  /** Padding. Default value is '20px 0' */
  padding?: string;

  /** Padding bottom. Default value is 'n/a' */
  paddingBottom?: string;

  /** Padding left. Default value is 'n/a' */
  paddingLeft?: string;

  /** Padding right. Default value is 'n/a' */
  paddingRight?: string;

  /** Padding top. Default value is 'n/a' */
  paddingTop?: string;

  /** Text align. Default value is 'center' */
  textAlign?: string;
}

export interface MJMLSocialAttributes {
  /** Align. Default value is 'center' */
  align?: string;

  /** Border radius. Default value is '3px' */
  borderRadius?: string;

  /** Color. Default value is '#333333' */
  color?: string;

  /** CSS class. Default value is 'n/a' */
  cssClass?: string;

  /** Container background color. Default value is 'n/a' */
  containerBackgroundColor?: string;

  /** Font family. Default value is 'Ubuntu, Helvetica, Arial, sans-serif' */
  fontFamily?: string;

  /** Font size. Default value is '13px' */
  fontSize?: string;

  /** Font style. Default value is 'normal' */
  fontStyle?: string;

  /** Font weight. Default value is 'normal' */
  fontWeight?: string;

  /** Icon height. Default value is 'icon-size' */
  iconHeight?: string;

  /** Icon size. Default value is '20px' */
  iconSize?: string;

  /** Inner padding. Default value is '4px' */
  innerPadding?: string;

  /** Line height. Default value is '22px' */
  lineHeight?: string;

  /** Mode. Default value is 'horizontal' */
  mode?: string;

  /** Padding. Default value is '10px 25px' */
  padding?: string;

  /** Padding bottom. Default value is 'n/a' */
  paddingBottom?: string;

  /** Padding left. Default value is 'n/a' */
  paddingLeft?: string;

  /** Padding right. Default value is 'n/a' */
  paddingRight?: string;

  /** Padding top. Default value is 'n/a' */
  paddingTop?: string;

  /** Icon padding. Default value is '0px' */
  iconPadding?: string;

  /** Text padding. Default value is '4px 4px 4px 0' */
  textPadding?: string;

  /** Text decoration. Default value is 'none' */
  textDecoration?: string;
}

export interface MJMLSpacerAttributes {
  /** Container background color. Default value is 'n/a' */
  containerBackgroundColor?: string;

  /** CSS class. Default value is 'n/a' */
  cssClass?: string;

  /** Height. Default value is '20px' */
  height?: string;

  /** Padding. Default value is 'none' */
  padding?: string;

  /** Padding bottom. Default value is 'n/a' */
  paddingBottom?: string;

  /** Padding left. Default value is 'n/a' */
  paddingLeft?: string;

  /** Padding right. Default value is 'n/a' */
  paddingRight?: string;

  /** Padding top. Default value is 'n/a' */
  paddingTop?: string;
}

export interface MJMLTextAttributes {
  /** Text color. Default value is '#000000' */
  color?: string;

  /** Font. Default value is 'Ubuntu, Helvetica, Arial, sans-serif' */
  fontFamily?: string;

  /** Text size. Default value is '13px' */
  fontSize?: string;

  /** Font style. Default value is 'n/a' */
  fontStyle?: string;

  /** Text thickness. Default value is 'n/a' */
  fontWeight?: number;

  /** Space between the lines. Default value is '1' */
  lineHeight?: string;

  /** Letter spacing. Default value is 'none' */
  letterSpacing?: string;

  /** The height of the element. Default value is 'n/a' */
  height?: string;

  /** Text decoration. Default value is 'n/a' */
  textDecoration?: string;

  /** Text transform. Default value is 'n/a' */
  textTransform?: string;

  /** Align. Default value is 'left' */
  align?: string;

  /** Inner element background color. Default value is 'n/a' */
  containerBackgroundColor?: string;

  /** Padding. Default value is '10px 25px' */
  padding?: string;

  /** Top offset. Default value is 'n/a' */
  paddingTop?: string;

  /** Bottom offset. Default value is 'n/a' */
  paddingBottom?: string;

  /** Left offset. Default value is 'n/a' */
  paddingLeft?: string;

  /** Right offset. Default value is 'n/a' */
  paddingRight?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;
}

export interface MJMLWrapperAttributes {
  /** Section color. Default value is 'n/a' */
  backgroundColor?: string;

  /** CSS background position (see outlook limitations in mj-section doc). Default value is 'top center' */
  backgroundPosition?: string;

  /** CSS background position x. Default value is 'none' */
  backgroundPositionX?: string;

  /** CSS background position y. Default value is 'none' */
  backgroundPositionY?: string;

  /** CSS background repeat. Default value is 'repeat' */
  backgroundRepeat?: string;

  /** CSS background size. Default value is 'auto' */
  backgroundSize?: string;

  /** Background URL. Default value is 'n/a' */
  backgroundUrl?: string;

  /** CSS border format. Default value is 'none' */
  border?: string;

  /** CSS border format for the bottom. Default value is 'n/a' */
  borderBottom?: string;

  /** CSS border format for the left. Default value is 'n/a' */
  borderLeft?: string;

  /** Border radius. Default value is 'n/a' */
  borderRadius?: string;

  /** CSS border format for the right. Default value is 'n/a' */
  borderRight?: string;

  /** CSS border format for the top. Default value is 'n/a' */
  borderTop?: string;

  /** Class name, added to the root HTML element created. Default value is 'n/a' */
  cssClass?: string;

  /** Make the wrapper full-width. Default value is 'n/a' */
  fullWidth?: string;

  /** Padding. Default value is '20px 0' */
  padding?: string;

  /** Section bottom offset. Default value is 'n/a' */
  paddingBottom?: string;

  /** Section left offset. Default value is 'n/a' */
  paddingLeft?: string;

  /** Section right offset. Default value is 'n/a' */
  paddingRight?: string;

  /** Section top offset. Default value is 'n/a' */
  paddingTop?: string;

  /** CSS text-align. Default value is 'center' */
  textAlign?: string;
}
