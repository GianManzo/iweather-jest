import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("should be return city detail selected", () => {
    const data = [
      {
        id: "1",
        name: "São Paulo",
        latitude: -23.5489,
        longitude: -46.6388,
      },
      {
        id: "2",
        name: "Rio de Janeiro",
        latitude: -22.9035,
        longitude: -43.2096,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);
    const selectedCity = screen.getByText(/paulo/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);
    const options = screen.queryByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});
