namespace Canvas {
    window.addEventListener("load", handleload);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function handleload (): void {
        canvas = document.querySelector("canvas")!;
        canvas.id = "CanvasID";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#89Cff0";

        crc2 = canvas.getContext("2d")!;

        drawSun();

        drawMountians(window.innerHeight * 0.4, "#4f4942");
        drawMountians(window.innerHeight * 0.5, "#787067");

        


        drawGrass();

        for (var i: number = 0; i < 10; i++) {

        drawFlowersL();
        drawFlowersR();

        drawTulipsL();

        }

        var randomXClouds1: number = Math.random() * (window.innerWidth * 0.3);
        var randomYClouds1: number = Math.random() * (window.innerHeight * 0.3);

        var randomXClouds2: number = Math.random() * (window.innerWidth * 0.9 - window.innerWidth * 0.4) + window.innerWidth * 0.4;
        var randomYClouds2: number = Math.random() * (window.innerHeight * 0.5 - window.innerHeight * 0.1) + window.innerHeight * 0.1;

        var randomXClouds3: number = Math.random() * (window.innerWidth * 0.8 - window.innerWidth * 0.5) + window.innerWidth * 0.5;
        var randomYClouds3: number = Math.random() * (window.innerHeight * 0.4 - window.innerHeight * 0.1) + window.innerHeight * 0.1;

        var randomXClouds4: number = Math.random() * (window.innerWidth * 0.6);
        var randomYClouds4: number = Math.random() * (window.innerHeight * 0.4);

        drawCloud(randomXClouds1, randomYClouds1, 250, 75);
        drawCloud(randomXClouds2, randomYClouds2, 250, 75);
        drawCloud(randomXClouds3, randomYClouds3, 250, 75);
        drawCloud(randomXClouds4, randomYClouds4, 250, 75);

        drawSun();

    }

    function drawGrass (): void {

        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.6);
        crc2.lineTo(window.innerWidth, window.innerHeight * 0.7);
        crc2.lineTo(window.innerWidth, window.innerHeight);
        crc2.lineTo(0, window.innerHeight);
        crc2.lineTo(0, window.innerHeight * 0.7);

        crc2.strokeStyle = "rgba(1, 1, 1, 0)";

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#a9e08d");
        gradient.addColorStop(0.5, "#e1ffd1");
        gradient.addColorStop(1, "#37472f");
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.closePath();

        crc2.stroke();
    }

    function drawFlowersL (): void {

        var placeTulipsX: number = (Math.random() * window.innerWidth - 10);
        var placeTulipsY: number = (Math.random() * (window.innerHeight - window.innerHeight * 0.61) + window.innerHeight * 0.61);

        console.log(placeTulipsX);
        console.log(placeTulipsY);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(placeTulipsX, placeTulipsY);
        crc2.translate(placeTulipsX, placeTulipsY);
        crc2.quadraticCurveTo(10, 5, 10, 30);
        crc2.strokeStyle = "#355233";
        crc2.lineWidth = 5;

        crc2.stroke();

        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.strokeStyle = "blue";
        crc2.fill();

        crc2.stroke();

    
        for (var i: number = 90; i > 10 ; i -= 10) {
            crc2.beginPath();
            moveTo(10, 20);
            crc2.rotate(45 * Math.PI / 20);
            crc2.arc(10, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffa8fc";
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.fill();

            crc2.stroke();
        }

        crc2.restore();
    }

    function drawFlowersR (): void {

        var placeTulipsX: number = (Math.random() * window.innerWidth - 10);
        var placeTulipsY: number = (Math.random() * (window.innerHeight - window.innerHeight * 0.8) + window.innerHeight * 0.8);

        console.log(placeTulipsX);
        console.log(placeTulipsY);

        var placestemx: number = Math.random() * ((30 - 10) + 10);
        var placestemy: number = Math.random() * ((30 - 20) + 20);

        console.log(placestemx);
        console.log(placestemy);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(placeTulipsX, placeTulipsY);
        crc2.translate(placeTulipsX, placeTulipsY);
        crc2.quadraticCurveTo(-10, 5, -10, 20);
        crc2.strokeStyle = "#355239";
        crc2.lineWidth = 5;

        crc2.stroke();

        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "blue";
        crc2.fill();

        crc2.stroke();

    
        for (var i: number = 90; i > 10 ; i -= 10) {
            crc2.beginPath();
            moveTo(10, 20);
            crc2.rotate(45 * Math.PI / 20);
            crc2.arc(10, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffc34d";
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.fill();

            crc2.stroke();
        }


        crc2.restore();
    }

    function drawTulipsL (): void {

        var placeTulipsX: number = (Math.random() * window.innerWidth - 10);
        var placeTulipsY: number = (Math.random() * (window.innerHeight - window.innerHeight * 0.75) + window.innerHeight * 0.75);

        console.log(placeTulipsX);
        console.log(placeTulipsY);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(placeTulipsX, placeTulipsY);
        crc2.translate(placeTulipsX, placeTulipsY);
        crc2.quadraticCurveTo(10, 5, 10, 30);
        crc2.strokeStyle = "#355233";
        crc2.lineWidth = 5;

        crc2.stroke();

        crc2.beginPath();
        moveTo(0, 20);
        crc2.quadraticCurveTo(10, 5, -20, -20);
        crc2.strokeStyle = "darkorange";
        crc2.lineWidth = 2;

        crc2.stroke();

        crc2.beginPath();
        moveTo(0, 20);
        crc2.quadraticCurveTo(10, 5, -20, -12);
        crc2.strokeStyle = "orange";
        crc2.lineWidth = 2;
        
        crc2.stroke();

        crc2.beginPath();
        moveTo(0, 20);
        crc2.quadraticCurveTo(10, 5, -10, -20);
        crc2.strokeStyle = "orange";
        crc2.lineWidth = 2;
        
        crc2.stroke();


        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 12, 5, 0.8 * Math.PI);
        crc2.lineWidth = 1.3;
        crc2.strokeStyle = "black";
        moveTo(0, 20);
        crc2.lineTo(-20, -8);
        crc2.lineTo(-2, -2);
        crc2.lineTo(-2, -20);
        crc2.closePath();
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.stroke();

        crc2.restore();



    }

   

    function drawCloud(_positionX: number, _positionY: number , _sizeX: number, _sizeY: number): void {

        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_positionX, _positionY);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _sizeX;
            let y: number = - (Math.random() * _sizeY);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawSun (): void {

        console.log("Im at the Sun!");

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 120);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(window.innerWidth * 0.05, window.innerHeight * 0.5);
        crc2.translate(window.innerWidth * 0.015, window.innerHeight * 0.055);
        crc2.arc(0, 0, 120, 0, 2 * Math.PI);

        gradient.addColorStop(0, "rgb(255, 192, 98)");
        gradient.addColorStop(1, "rgb(255, 215, 105, 0.5)");

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";

        crc2.stroke();

        crc2.restore();
    }

    function drawMountians (_height: number, _color: string): void {

        var min: number = 60;
        var max: number = 200;

        let stepMin: number = 30;
        let stepMax: number = 120;
        let x: number = 0;

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.6);
        crc2.lineTo(0, _height);
        crc2.translate(0, _height);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -min - Math.random() * (max - min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(window.innerWidth, window.innerHeight * 0.9);
        crc2.closePath();

        crc2.fillStyle = _color;
        crc2.fill();

        crc2.restore();

        console.log("im at the mountains!");
}

 




}

