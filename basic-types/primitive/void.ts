function logMessage(): void {
    console.log("Hello, world!");
  }
  interface IStateService {
      network: (action: string) => void;
  }
  interface IStateService {
      network2(action: string): void;
  }
  type GreetFunction = (a: string) => void;
  function greeter(fn: GreetFunction) {
    // ...
  }