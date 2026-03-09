declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(element: string | Element | Element[], options?: any);
    revert(): void;
    chars?: Element[];
    words?: Element[];
    lines?: Element[];
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(options?: any): ScrollSmoother;
    static get(): ScrollSmoother | null;
    static refresh(soft?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): ScrollSmoother;
    kill(): void;
  }
}
