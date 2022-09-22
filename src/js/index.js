/* global window */
import p5 from "p5";
import Immutable from "immutable";
import setup from "./algorithm/setup";
import { Drawer } from "./algorithm/drawer";
import Groups from "./algorithm/model/groups";

/**
 * Initialisation of the algorithm.
 * To be passed to a p5 class
 * @param  {reference to p5} p5 - To be made global
 */
const algorithm = (p5) => {
  let groups = Groups(p5);
  groups = Immutable.List(groups.getGroups());
  p5.setup = setup(p5).setupCanvas;
  p5.keyTyped = setup(p5).onKeyTyped;
  p5.draw = () => {
    const drawer = new Drawer(p5);
    drawer.drawGroups(groups);
    p5.noLoop();
  };
};

new p5(algorithm);
