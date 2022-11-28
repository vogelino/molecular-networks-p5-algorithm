/* global window */
import defaults from "./defaults";

/**
 * @class Initializes the p5 canevas and the key events
 * @return {Function} - An instance of the class
 */
const Setup = (p5) => {
  let canvas;
  const that = {};

  that.setupCanvas = () => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    // canvas.position(0, 0);
    canvas.class("p5-canvas");
    canvas.parent("molectular-algorithm");
    p5.colorMode(p5.HSB);

    p5.background(defaults.get("backgroundColor"));
  };

  that.onKeyTyped = (key) => {
    if (key === "s") {
      p5.saveCanvas(canvas, "molecular-networks-export", "png");
    }
  };

  return that;
};

export default Setup;
