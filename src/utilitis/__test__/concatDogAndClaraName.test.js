import concatDogAndClaraName from "../concatDogAndClaraName";

describe("concatDogAndClaraName", () => {
  test("shold add the _clara posfixo with name algo", () => {
    const res = concatDogAndClaraName("algo");

    expect(res).toEqual("algo_clara");
  });

  test("shold add the _clara posfixo with name clara", () => {
    const res = concatDogAndClaraName("clara");

    expect(res).toEqual("clara_clara");
  });
});
