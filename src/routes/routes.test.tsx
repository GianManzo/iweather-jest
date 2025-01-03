import { Routes } from ".";
import {
  getStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { mockCityListFormated } from "@__tests__/mocks/components/mockCityListFormated";
import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/API/mockWeatherAPIResponse";

describe("Routes", () => {
  it("should be render search screen not city selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/escolha um local/i));
    expect(title).toBeTruthy();
  });

  it("should be render dashboard screen when city selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });
    await saveStorageCity(mockCityListFormated[0]);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(mockCityListFormated[0].name);
    expect(title).toBeTruthy();
  });
});
