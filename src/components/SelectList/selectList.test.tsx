import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";
import { mockCityListFormated } from "@__tests__/mocks/components/mockCityListFormated";

describe("Component: SelectList", () => {
  it("should be return city detail selected", () => {
    const onPress = jest.fn();

    render(
      <SelectList
        data={mockCityListFormated}
        onChange={() => {}}
        onPress={onPress}
      />
    );
    const selectedCity = screen.getByText(/paulo/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(mockCityListFormated[0]);
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);
    const options = screen.queryByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});
