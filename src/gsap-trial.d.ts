declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: string | Element | Element[], options?: any);
    revert(): void;
    chars?: Element[];
    words?: Element[];
    lines?: Element[];
  }
}
