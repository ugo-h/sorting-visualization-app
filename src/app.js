import AlgorithmIterator from './Controllers/AlgorithmIterator/AlgorithmIterator';
import Canvas from './Views/CanvasGraphics/CanvasInterface';
import ControlPanel from './Views/UI/ControlPannel';
import SideBar from './Views/UI/SideBar';
import algorithms from './Models/Algorithms/algorithms';

class App extends Canvas {
    static onCreate() {
        this.fps = 3;
        this.run = true;
        this.changeFps = this.changeFps.bind(this);

        this.algorithm = new AlgorithmIterator(this.fps, this.width);
        this.connectUI();
        
    }
    
    static connectUI() {
        const generateNewArray = this.algorithm.generateNewArray.bind(this.algorithm);
        const startHandler = this.algorithm.startHandler.bind(this.algorithm);
        
        const algorithmNames = Object.keys(algorithms);
        const selectAlgorithmSideBar = new SideBar('sidebar', algorithmNames);
        selectAlgorithmSideBar.connectEvents(this.algorithm.changeCurrentAlgorithm.bind(this.algorithm));
        
        const controlPannel = new ControlPanel('header');
        controlPannel.connectAllClickEvents(startHandler, generateNewArray, (ev) => selectAlgorithmSideBar.toggle(ev));
        controlPannel.connectSpeedRange((ev) => {this.changeFps(ev.target.value)})
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

