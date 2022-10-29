import html from './background.html'
import { Lite } from 'lite'

export class Background {
    constructor(options) {
        this.container = Lite.append(options.container, html);
    }
}