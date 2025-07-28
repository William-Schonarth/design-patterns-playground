interface FileSystemItem {
  getName(): string
  getSize(): number
}

export class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name
  }

  getSize(): number {
    return this.size
  }
}

export class Directory implements FileSystemItem {
  private children: FileSystemItem[] = []

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.children.push(item)
  }

  getName(): string {
    return this.name
  }

  getSize(): number {
    return this.children.reduce((total, item) => total + item.getSize(), 0)
  }
}