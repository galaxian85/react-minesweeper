class CoordArray<T> {
  readonly width: number;
  readonly height: number;
  readonly backupArray: Array<T | null>;

  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) throw new Error('width or height <= 0!');
    this.width = Math.floor(width);
    this.height = Math.floor(height);

    const array = new Array<T | null>(this.width * this.width);
    array.fill(null);
    this.backupArray = array;
  }

  get area(): number {
    return this.width * this.height;
  }

  get(x: number, y: number): T | null | undefined {
    if (this.isCoordOutOfBound(x, y)) {
      return undefined;
    }

    return this.backupArray[this.transIndex(x, y)];
  }

  set(x: number, y: number, data: T): void {
    if (this.isCoordOutOfBound(x, y)) return;

    this.backupArray[this.transIndex(x, y)] = data;
  }

  private isCoordOutOfBound(x: number, y: number): boolean {
    return x < 0 || y < 0 || x >= this.width || y >= this.width;
  }

  private transIndex(x: number, y: number): number {
    return x + (this.width * y);
  }
}

export default CoordArray;
