// const { SHOW_CENTERS, DEFAULT_COLOR } = config;

const DEFAULT_COLOR = '#ffdfba';
const SHOW_CENTERS = false;

class Point2d {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
  
  class Rect extends Point2d {
    constructor(x, y, width, height, color = DEFAULT_COLOR) {
        super(x, y);
        this.color = color;
        this.dColor = color;
        this.width = width*0.5;
        this.height = height*0.5;
        this.vy = 0;
        this.vx = 0;
    };

      getX() {
        return this.x;
      }
  
      setX(value) {
        this.x = value
      }

      setColor(color) {
        this.color = color;
      }
  
      getFullWidth() {
        return this.width*2+2;
      }
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(
        this.x - this.width, this.y + this.height,
        this.width * 2, -this.height * 2
     );
     if(SHOW_CENTERS){
       ctx.fillStyle = 'red';
       ctx.fillRect(
        this.x - 2.5, this.y -2.5, 5, 5
        )
      }
    };

    update() {
      
    }
};
  
 
  
  
  export default Rect;