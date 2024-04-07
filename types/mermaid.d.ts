// @types/mermaid.d.ts
declare module 'mermaid' {
  interface MermaidAPI {
    parse(chart: string): unknown;
    render(arg0: string, text: string, arg2: (result: any) => void): unknown;
    initialize(config?: any): void;
    contentLoaded(): void;
    init(options?: any, cb?: () => void): void;
    mermaidAPI: MermaidAPI;
  }

  const mermaid: MermaidAPI;
  export = mermaid;
}
