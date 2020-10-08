import Engine from './Graphics/Screen';
import SortingIterator from './SortingIterator/SortingIterator';
import ControlPanel from './UI/ControlPannel';
import SideBar from './UI/SideBar';

class App extends Engine {
    static onCreate() {
        this.fps = 3;
        this.run = true;
        this.changeFps = this.changeFps.bind(this);

        this.iterator = new SortingIterator(this.fps, this.width);

        const selectAlgorithmSideBar = new SideBar('sidebar', [{ name: 'bubble' }, { name: 'insertion' }]);
        selectAlgorithmSideBar.connectEvents(this.iterator.changeCurrentAlgorithm.bind(this.iterator));
        
        const controlPannel = new ControlPanel('header');
        controlPannel.connectStartEvent(this.iterator.startSortingHandler);
        controlPannel.connectCreateNew(this.iterator.generateNewArray);
        controlPannel.connectSpeedRange((ev) => {this.changeFps(ev.target.value)})
        controlPannel.connectToggleAlgorithmMenuEvent((ev) => selectAlgorithmSideBar.toggle(ev))
    }

    static changeFps(fps) {
        this.fps = fps;
    }

    static onUpdate() {
        const {array, iterator, isSorting } = this.iterator;
        array.render(this.ctx)
        if(isSorting && iterator) {
            this.iterator.handleSorting();
        }
    }
}


App.init();

