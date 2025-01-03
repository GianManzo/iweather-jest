import { getStorageCity, saveStorageCity } from "./cityStorage";
import { mockCityListFormated } from "@__tests__/mocks/components/mockCityListFormated";

describe("Storage: cityStorage", () => {
  it("should be return null when dont have city storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should be return city storaged", async () => {
    await saveStorageCity(mockCityListFormated[0]);
    const response = await getStorageCity();
    expect(response).toEqual(mockCityListFormated[0]);
  });
});
