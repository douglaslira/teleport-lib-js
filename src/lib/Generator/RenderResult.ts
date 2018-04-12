export default class RenderResult {
  public filesByName: object = {}

  public addFile(name: string, content: string): void {
    this.filesByName[name] = content
  }

  public getFiles(): object {
    return this.filesByName
  }

  public getFileNames(): string[] | any[] {
    return Object.keys(this.filesByName)
  }

  public getContent(fileName: string): string | null | undefined {
    return this.filesByName[fileName]
  }
}
