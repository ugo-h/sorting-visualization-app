import Canvas from './Controllers/CanvasInterface';
import AlgorithmIterator from './Controllers/SortingIterator/SortingIterator';
import ControlPanel from './Views/UI/ControlPannel';
import SideBar from './Views/UI/SideBar';

class App extends Canvas {
    static onCreate() {
        this.fps = 3;
        this.run = true;
        this.changeFps = this.changeFps.bind(this);

        this.algorithm = new AlgorithmIterator(this.fps, this.width);

        const selectAlgorithmSideBar = new SideBar('sidebar', [{ name: 'bubble' }, { name: 'selection' }]);
        selectAlgorithmSideBar.connectEvents(this.algorithm.changeCurrentAlgorithm.bind(this.algorithm));
        
        const controlPannel = new ControlPanel('header');
        controlPannel.connectStartEvent(this.algorithm.start);
        controlPannel.connectCreateNew(this.algorithm.generateNewArray);
        controlPannel.connectSpeedRange((ev) => {this.changeFps(ev.target.value)})
        controlPannel.connectToggleAlgorithmMenuEvent((ev) => selectAlgorithmSideBar.toggle(ev))
    }

    static changeFps(fps) {
        this.fps = fps;
    }

    static onUpdate() {
        const {array, iterator, isSorting } = this.algorithm;
        array.render(this.ctx)
        if(isSorting && iterator) {
            this.algorithm.renderIteration();
        }
    }
}


App.init();

