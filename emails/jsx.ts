export function jsx() {}

export namespace JSX {
  export interface IntrinsicElements {
    foo: any;
    try: any
    div: any;

    body2: MJMLBodyAttrs;
  }

  export interface MJMLBodyAttrs {
    backgroundColor?: string;
    className?: string;
    width: string;
  }
}
