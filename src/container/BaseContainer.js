import Element from "../Element";

export default class BaseContainer extends Element {
    paint() {
        throw new Error('un impl');
    }
}