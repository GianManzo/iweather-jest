import { getStorageCity } from "./cityStorage";

describe("Storage: cityStorage", () => {
  it("should be return null when dont have city storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
