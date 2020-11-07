

export default class Canvas {
    static init() {
        const canv = document.getElementById('canv');
        this.canv = canv;
        this.fps = 30;
        this.width = this.getWidth();
        this.height = this.getHeight();
        this.ctx = canv.getContext('2d');
        this.run = false;
        
        this.onCreate();
        
        this._loop();
    };
    
    static _setupCanvas(canv) {
      canv.width = this.width;
      canv.height = this.height;
    };

    static _loop() {
        setTimeout(() => this._loop(), 1000/this.fps);
        this.width = this.getWidth();
        this.height = this.getHeight();
        this._setupCanvas(this.canv)
        if(!this.run) return
        this.clearScreen();
        try{
          this.onUpdate();    
        } catch (err) {
          this.run = false;
          throw err;
        };
    };

    static clearScreen() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    
    static getHeight() {
      let height = window.innerHeight;
      return height;
    };
    
    static getWidth() {
      let width = window.visualViewport.width*0.8;
      return width
    };

    static onCreate() {
        
    };

    static onUpdate() {

    };

}