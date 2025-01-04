class MinStack {
  private stack: number[];
  public minimumStack: number[];

  constructor() {
    this.stack = [];
    this.minimumStack = [];
  }

  push(value: number): void {
    this.stack.push(value);
    if (this.minimumStack.length === 0) {
      this.minimumStack.push(value);
    } else if (
      value === this.minimumStack[this.minimumStack.length - 1]
    ) {
      this.minimumStack.push(value);
    } else if (
      value < this.minimumStack[this.minimumStack.length - 1]
    ) {
      this.minimumStack.push(value);
    }
  }

  pop(): void {
    const num = this.stack.pop();
    if (num === this.minimumStack[this.minimumStack.length - 1]) {
      this.minimumStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number | undefined {
    return this.minimumStack[this.minimumStack.length - 1];
  }
}
