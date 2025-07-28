import { Directory, File } from "./Composite"

describe("Composite Pattern", () => {
  it("should calculate directory size", () => {
    const file1 = new File("a.txt", 10)
    const file2 = new File("b.txt", 20)

    const dir1 = new Directory("folder1")

    dir1.add(file1)
    dir1.add(file2)

    expect(dir1.getSize()).toBe(30)

    const file3 = new File("c.txt", 5)
    const root = new Directory("root")

    root.add(dir1)
    root.add(file3)

    expect(root.getSize()).toBe(35)
  })
})
