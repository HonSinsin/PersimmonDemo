var page = {

    /* 此方法在第一次显示窗体前发生 */
    onLoad: function (event) {
        this.drawCanvas()
    },

    drawCanvas: function () {

        var ctx = pm.createCanvasContext('Canvas1', this)
        // 画线
        drawLine(ctx)
        // 画矩形 空心和实心矩形
        drawRect(ctx)
        // 画圆 空心圆和实心圆
        drawArc(ctx)
        // 画图片
        drawImage(ctx)
        // 绘制文本
        drawText(ctx)
        // 绘制折线图
        drawLineImage(ctx)

        ctx.draw()

        function drawLine(ctx) {
            // 设置边框颜色
            ctx.setStrokeStyle('red')
            // 设置绘制线宽度
            ctx.setLineWidth(2)
            // 移动到画线起点
            ctx.moveTo(20, 20)
            // 设置绘制线的终点
            ctx.lineTo(60, 40)
            ctx.stroke()
        }

        function drawRect(ctx) {
            // 设置边框颜色
            ctx.setStrokeStyle('#ff00ff')
            // 设置矩形 坐标点 和 宽 高
            ctx.strokeRect(100, 10, 80, 50)// 矩形框            
            ctx.stroke()
            //设置矩形填充颜色
            ctx.setFillStyle('#ffff00')
            ctx.fillRect(110, 20, 60, 30)// 填充矩形
        }

        function drawArc(ctx) {
            // 这里圆的绘制起始角度以水平为0度

            // 移动到圆心位子
            ctx.moveTo(60, 95)
            // 绘制空心圆 圆心x,圆心y半径,开始角度,结束角度
            ctx.arc(60, 95, 50, 0, 2 * Math.PI)
            // 设置圆心填充色
            ctx.setFillStyle('#0000ff')
            ctx.fill()

            // 绘制实心圆
            ctx.beginPath()
            // 设置圆的线宽, 由于下文设置圆的半径r为2, 这里线宽为2r
            ctx.setLineWidth(4)
            // 设置圆心填充色
            ctx.setStrokeStyle('#ff0000')
            ctx.arc(60, 95, 2, 0, 2 * Math.PI)
            ctx.stroke()
        }

        function drawImage(ctx) {
            // 默认图片路径为resource内部,支持相对路径
            // 图片路径, X坐标, Y坐标
            ctx.drawImage('image.png', 10, 150)
        }

        function drawText(ctx) {
            // 设置文本颜色
            ctx.setFillStyle('red')
            // 设置字体以及字号
            ctx.setFont('STXINWEI.TTF', 20)
            ctx.fillText('this is test string.', 200, 20)
        }

        function drawLineImage(ctx) {
            // 设置一组数据
            var datas = [120, 40, 95, 62, 136, 100]
            var sums = 0
            for (var s = 0; s < datas.length; s++) {
                sums += datas[s]
            }
            ctx.beginPath()

            ctx.setStrokeStyle('white')
            ctx.setLineWidth(2)
            // 其实实现上不难,主要是计算各种坐标比较麻烦
            ctx.moveTo(140, 80)
            // 绘制纵轴坐标箭头
            ctx.lineTo(145, 85)
            ctx.moveTo(140, 80)
            ctx.lineTo(135, 85)
            ctx.moveTo(140, 80)
            // 原点
            ctx.lineTo(140, 250)
            // 绘制横轴线和箭头
            ctx.lineTo(470, 250)
            ctx.lineTo(465, 245)
            ctx.moveTo(470, 250)
            ctx.lineTo(465, 255)

            // 设置绘制文本字号和颜色
            ctx.setFillStyle('white')
            ctx.setFontSize(15)

            // 循环绘制纵轴刻度 和 刻度值
            for (var v = 1; v < datas.length; v++) {
                ctx.moveTo(140, 250 - 30 * v)
                ctx.lineTo(135, 250 - 30 * v)
                ctx.fillText((30 * (datas.length - v)) + '', 110, 66 + 30 * v)
            }

            // 循环绘制横轴刻度 和 刻度值
            for (var i = 0; i <= datas.length; i++) {
                ctx.moveTo(140 + 50 * i, 245)
                ctx.lineTo(140 + 50 * i, 250)
                ctx.fillText(i + '', 140 + 50 * i, 256)
            }
            ctx.stroke()

            console.log('sums >>' + sums)
            ctx.fillText('Sums: ' + sums, 250, 90)

            // 遍历数据进行画线 画点
            for (var d = 0; d < datas.length; d++) {
                console.log('x >>' + (140 + 50 * d) + '  y >>' + (250 - datas[d]))

                if (d == 0)
                    ctx.moveTo(140 + 50 * (d + 1), 250 - datas[d])
                else
                    ctx.lineTo(140 + 50 * (d + 1), 250 - datas[d])
                // 画点
                ctx.setLineWidth(2)
                ctx.arc(140 + 50 * (d + 1) + 2, 250 - datas[d], 2, 0, 2 * Math.PI)
                // 绘制当前数据
                ctx.fillText(datas[d] + '', 140 + 50 * (d + 1) - 5, 250 - datas[d] - 15)
            }

            ctx.stroke()
        }
    }

};

Page(page);

page = 0;
