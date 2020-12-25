import { challengesReducer, createChallenge } from './challengesReducer';

describe("challengesReducer", () => {
  describe("CREATE_CHALLENGE", () => {
    it("adds new challenge to the state", () => {
      const action = createChallenge("test")
      expect(challengesReducer({}, action)).toEqual({
        0: {
          name: "test",
          days: {
            "0": "0",
            "1": "0",
            "10": "0",
            "11": "0",
            "12": "0",
            "13": "0",
            "14": "0",
            "15": "0",
            "16": "0",
            "17": "0",
            "18": "0",
            "19": "0",
            "2": "0",
            "20": "0",
            "21": "0",
            "22": "0",
            "23": "0",
            "24": "0",
            "25": "0",
            "26": "0",
            "27": "0",
            "28": "0",
            "29": "0",
            "3": "0",
            "4": "0",
            "5": "0",
            "6": "0",
            "7": "0",
            "8": "0",
            "9": "0",
          },
        },
      });
    });
  });
  describe("TOGGLE_DAY", () => {
    it("sets the day of the specified challenged to ENABLED state", () => {
      const initialState = challengesReducer({}, createChallenge("test"))

      expect(challengesReducer(initialState, toggleDay(0, 0))[0].days[0].toEqual("1"))
    })
  })
});