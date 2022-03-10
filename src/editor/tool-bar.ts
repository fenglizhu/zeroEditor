import {
    createElemByHTML
} from '../utils/dom';

class Toolbar {
    public toolBarContainer!: HTMLElement[];
    constructor() {
        this.toolBarContainer = createElemByHTML('<div class="z-tool-bar"></div>');
    }
}

export default Toolbar