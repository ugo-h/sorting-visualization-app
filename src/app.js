import Canvas from './Controllers/CanvasInterface';
import AlgorithmIterator from './Controllers/AlgorithmIterator/AlgorithmIterator';
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
        // controlPannel.connectAllEvents(this.algorithm);
        controlPannel.connectStartEvent(this.algorithm.start.bind(this.algorithm));
        controlPannel.connectCreateNew(this.algorithm.generateNewArray.bind(this.algorithm));
        controlPannel.connectSpeedRange((ev) => {this.changeFps(ev.target.value)})
        controlPannel.connectToggleAlgorithmMenuEvent((ev) => selectAlgorithmSideBar.toggle(ev))
    }

    static changeFps(fps) {
        this.fps = fps;
    }

    static onUpdate() {
        const {array} = this.algorithm;
        array.render(this.ctx)
        this.algorithm.renderIteration();
        
    }
}


App.init();

