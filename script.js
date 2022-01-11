window.onload = function() //lance cette evenement quand la page se lance 
{
    var canvasWidth = 900;
    var canvasHeight = 600;
    var ctx;
    var delay = 100;
    var snakee;

    init();

    function init()
    {
        var canvas = document.createElement('canvas'); //cré un canvas dans la page html
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas); // fait la liaison avec le document html
        ctx = canvas.getContext('2d'); // rend le canvas 2 dimonsionnel
        snakee = new Snake([])
        refreshCanvas();
    }

    function refreshCanvas()
    {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas, delay);
    }

    function drawBlock(ctx, position) 
    {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    function Snake (body) 
    {
        this.body = body;
        this.draw = function ()
        {
            ctx.save();
            ctx.fillStyle="#ff0000";
            for (i = 0; i < this.body.length; i++) 
            {
                drawBlock(ctx, this.body[i]);                
            }

            ctx.restore();
        }

        this.advance = function() 
        {
            var nextPosition = this.body[0].slice();
            nextPosition[0] += 1;
            this.body.unshift(nextPosition);
            this.body.pop();
        }
    }
    
   
}