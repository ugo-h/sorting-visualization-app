export default class Canvas {
    static init() {
        this.root = document.getElementById('svg-root');
        this.fps = 30;
        this.width = this.getWidth();
        this.height = this.getHeight();
        this.setupSvgRootSize(this.root);

        this.onCreate();
        
        console.log('svg initiated')
        this.loop();
    };
    
    static setupSvgRootSize() {  
        const root = document.getElementById('root');   
        root.setAttribute('height', HEIGHT);
        root.setAttribute('width', WIDTH);
        root.setAttribute('style', `fill: white`);
    }

    static loop() {
        setTimeout(() => this.loop(), 1000/this.fps);
        try{
          this.onUpdate();    
        } catch (err) {
          this.run = false;
          throw new Error(err);
        }
    }
    static onCreate() {
        
    }

    static onUpdate() {

    }

}