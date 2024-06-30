export interface VersionData {
  data: string;
  signature: string;
}

export class DataStore {
  private currentData: string = "Hello World";
  private currentSignature: string = "";
  public versionHistory: VersionData[] = [];

  getCurrentData(): { data: string; signature: string } {
    return { data: this.currentData, signature: this.currentSignature };
  }

  updateData(newData: string, newSignature: string): void {
    this.versionHistory.push({
      data: this.currentData,
      signature: this.currentSignature,
    });
    this.currentData = newData;
    this.currentSignature = newSignature;
  }

  getLastValidData(): VersionData | null {
    return this.versionHistory.length > 0
      ? this.versionHistory[this.versionHistory.length - 1]
      : null;
  }
}
