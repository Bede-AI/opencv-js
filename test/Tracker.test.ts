import Jimp from "jimp";
import path from "path";
import { setupOpenCv, translateException } from "./cv";

beforeAll(async () => {
  await setupOpenCv();
}, 10000); // 10 seconds timeout

describe("Tracker", () => {
  it("shoud pass TS type validations", async () => {
    try {
      const tracker = new cv.TrackerMIL();
    } catch (err) {
      throw translateException(err);
    }
  });
});
