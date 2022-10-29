import html from './stats.html'
import { Lite } from 'lite'

export class Stats {
    constructor(options) {
        this.container = Lite.append(options.container, html);
    }
}