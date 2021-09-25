import { mount } from "enzyme";
import axios from "axios";
import DogClara from "../../components/DogClara/DogClara";
import DogList from "../DogList/DogList";
import mockGetAllDogs from "../../api/__mock__/mockGetAllDogs.json";
import { act } from "@testing-library/react";

jest.mock("axios");

// função que mocka a resposta do axios dependendo da url
const axiosMock = async () =>
  await axios.get.mockImplementationOnce((url) => {
    if (url === "https://dog.ceo/api/breeds/list/all") {
      return Promise.resolve({ data: mockGetAllDogs });
    }
  });

describe("DogList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("shold render the h1, and begins with 0 dogs", async () => {
    let wrapper;

    // mock, o que deve ser retornado pela
    await act(async () => {
      await axiosMock();
      wrapper = mount(<DogList />);
    });

    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h1").first().text()).toEqual("Lista de cachorros");

    expect(wrapper.find("h4")).toHaveLength(0);
    expect(wrapper.find(DogClara)).toHaveLength(0);
  });

  test("should render the 94 dogs after receive", async () => {
    let wrapper;

    await act(async () => {
      await axiosMock();
      wrapper = mount(<DogList />);
    });

    // atualiza o componente dps da resposta do axios
    wrapper.update();

    expect(wrapper.find("h4")).toHaveLength(94);
    expect(wrapper.find(DogClara)).toHaveLength(94);
  });
});
