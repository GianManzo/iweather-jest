import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";
import { mockCityListFormated } from "@__tests__/mocks/components/mockCityListFormated";

describe("Context: cityContext", () => {
  it("should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });
    await waitFor(() =>
      act(() => {
        result.current.handleChanceCity(mockCityListFormated[0]);
      })
    );
    expect(result.current.city?.name).toBe(mockCityListFormated[0].name);
  });
});
