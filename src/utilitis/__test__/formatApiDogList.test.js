import formatApiDogList from "../formatApiDogList";

describe("formatApiDogList", () => {
  test("shold format dog list correctly", () => {
    const input = {
      message: {
        dog1: [],
        dog2: [],
        dog3: [],
      },
    };

    const res = formatApiDogList(input);

    expect(res).toBeInstanceOf(Array);
    expect(res.length).toEqual(3);
    expect(res[0]).toEqual("dog1");
    expect(res[1]).toEqual("dog2");
    expect(res[2]).toEqual("dog3");
  });

  test("shold format dog list correctly 2", () => {
    const input = {
      message: {
        dog1: [],
        dog2: [],
        dog3: [],
      },
    };

    const expectOutput = ["dog1", "dog2", "dog3"];

    const res = formatApiDogList(input);

    expect(res).toEqual(expectOutput);
  });
});
