interface Console {
  tron: {
    createEnhancer?: (skipSettingStore?: boolean) => StoreEnhancer;
    clear?: () => void;
    log?: (...args: any[]) => void;
    logImportant?: (...args: any[]) => void;
    debug?: (message: any, important?: boolean) => void;
    warn?: (message: any) => void;
    error?: (message: any, stack: any) => void;
  };
}
