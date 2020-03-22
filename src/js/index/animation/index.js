const animationStars = {
    settings: {
        canvasClass: '.snake-canvas',
        numberStars: 1900,
        stars: [],
        canvasElement: null,
        canvasContext: null,
        radiusStar: null,
        focalLength: null,
        centerX: null,
        centerY: null,
        star: null,
        pixelX: null,
        pixelY: null,
        pixelRadius: null,
        colorStrip: 'rgba(0, 10, 20, 1)',

    },



    init(){
        this.settings.canvasElement = document.querySelector(this.settings.canvasClass)
        this.settings.canvasContext = this.settings.canvasElement.getContext('2d')
        this.settings.radiusStar = `0.${Math.floor(Math.random()*9)+1}`
        this.settings.focalLength = this.settings.canvasElement.width * 2

        this.initializeStars();
        this.executeFrame()
    },

    initializeStars() {
        this.settings.centerX = this.settings.canvasElement.width /2
        this.settings.centerY = this.settings.canvasElement.height /2

        this.settings.stars = []
        for (let i=0; i< this.settings.numberStars; i++){
            this.settings.star = {
                x: Math.random()* this.settings.canvasElement.width,
                y: Math.random()* this.settings.canvasElement.height,
                z: Math.random()* this.settings.canvasElement.width,
                o: `0.${Math.floor(Math.random()*99)+1}`,
            };

            this.settings.stars.push(this.settings.star);
        }
        },

    executeFrame(){
        requestAnimationFrame(this.executeFrame.bind(this))

        this.moveStars()
        this.drawStars()
    },

    moveStars(){
      for (let i=0; i< this.settings.numberStars; i++){
          this.settings.star = this.settings.stars[i]


          this.settings.star.z--;

          if (this.settings.star.z < 1) this.settings.star.z = this.settings.canvasElement.width
      }
    },
    drawStars() {
        if (this.settings.canvasElement.width !== window.innerWidth || this.settings.canvasElement.height !== window.innerHeight){
            this.settings.canvasElement.width = window.innerWidth
            this.settings.canvasElement.height = window.innerHeight
            this.initializeStars()
        }
        this.settings.canvasContext.fillStyle = this.settings.colorStrip;
        this.settings.canvasContext.fillRect(0, 0, this.settings.canvasElement.width, this.settings.canvasElement.height)
        this.settings.canvasContext.fillStyle = `rgba(209, 255, 255, ${this.settings.radiusStar})`
        for (let i = 0; i < this.settings.numberStars; i++) {
            this.settings.star = this.settings.stars[i]

            this.settings.pixelX = (this.settings.star.x - this.settings.centerX) * (this.settings.focalLength / this.settings.star.z)
            this.settings.pixelX += this.settings.centerX
            this.settings.pixelY = (this.settings.star.y - this.settings.centerY) * (this.settings.focalLength / this.settings.star.z)
            this.settings.pixelY += this.settings.centerY

            this.settings.pixelRadius = this.settings.focalLength / this.settings.star.z

            this.settings.canvasContext.fillRect(this.settings.pixelX, this.settings.pixelY, this.settings.pixelRadius, this.settings.pixelRadius)

        }
    }


};

export default animationStars;
