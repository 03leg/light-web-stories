export class Timer {
  
  timerId?: number;
  start: number = 0;
  remaining: number;

  constructor(private callback: () => void, delay: number) {
    this.remaining = delay;
    this.resume();
  }

  pause() {
    window.clearTimeout(this.timerId);
    this.timerId = undefined;
    this.remaining -= Date.now() - this.start;
  }

  resume() {
    if (this.timerId !== undefined) {
      return;
    }

    this.start = Date.now();
    this.timerId = window.setTimeout(this.callback, this.remaining);
  }

  destroy() {
    window.clearTimeout(this.timerId);
  }
}
