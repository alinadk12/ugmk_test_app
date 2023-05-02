export class DataSource {
  private static _instance: DataSource;

  private constructor() {}

  public static getInstance(): DataSource {
    if (!DataSource._instance) {
      DataSource._instance = new DataSource();
    }

    return DataSource._instance;
  }

  async getProductList() {
    // const response await fetch('')
  }
}

export const ds = DataSource.getInstance();
