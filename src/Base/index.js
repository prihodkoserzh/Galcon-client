import {
    isPointInsideArea
} from '../Utils';

export default class Base {
    constructor(parent) {
        this.canvas = parent.canvas
        this.ctx = parent.ctx
        this.parent = parent

        this.breackpoints = {};
        this.mouseUpHandlers = {};
        this.mouseMoveHandlers = {};
        this.mouseDownHandlers = {};

        this.touchables = [];
    }

    render() {
        for (const touchable of this.touchables) touchable.draw();
    }
    update() {}

    mouseDown(x, y) {
        for (const touchable of this.touchables) touchable.onMouseDown(x, y);
    }

    mouseUp(x, y) {
        for (const touchable of this.touchables) touchable.onMouseUp(x, y);
    }

    mouseMove(x, y) {
        for (const touchable of this.touchables) touchable.onMouseMove(x, y);
    }
}