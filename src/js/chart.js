// 像素风格K线图绘制
class PixelChart {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        // 设置像素化效果
        this.ctx.imageSmoothingEnabled = false;
        
        // 生成模拟数据
        this.generateData();
        
        // 开始动画
        this.animate();
    }
    
    generateData() {
        this.data = [];
        let basePrice = 1000;
        let time = 0;
        
        // 生成茅台股票的历史数据（万年长牛）
        for (let i = 0; i < 200; i++) {
            time += 1;
            // 茅台股票：缓慢上涨，偶尔回调
            let volatility = Math.random() * 0.02;
            let trend = 0.001; // 长期上涨趋势
            let change = (Math.random() - 0.4) * volatility + trend;
            basePrice *= (1 + change);
            
            this.data.push({
                time: time,
                open: basePrice,
                high: basePrice * (1 + Math.random() * 0.03),
                low: basePrice * (1 - Math.random() * 0.02),
                close: basePrice * (1 + (Math.random() - 0.5) * 0.01),
                volume: Math.random() * 1000 + 500
            });
        }
        
        // 生成$MOUTAI币的暴涨数据
        this.moutaiData = [];
        let moutaiPrice = 1;
        let moutaiTime = 0;
        
        for (let i = 0; i < 50; i++) {
            moutaiTime += 1;
            // $MOUTAI：暴涨模式
            let pump = Math.random() * 0.5 + 0.1; // 10%-60%的涨幅
            moutaiPrice *= (1 + pump);
            
            this.moutaiData.push({
                time: moutaiTime,
                open: moutaiPrice,
                high: moutaiPrice * (1 + Math.random() * 0.2),
                low: moutaiPrice * (1 - Math.random() * 0.05),
                close: moutaiPrice * (1 + (Math.random() - 0.3) * 0.1),
                volume: Math.random() * 5000 + 2000
            });
        }
    }
    
    drawPixelLine(x1, y1, x2, y2, color, width = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.lineCap = 'square';
        
        // 像素化处理
        x1 = Math.round(x1);
        y1 = Math.round(y1);
        x2 = Math.round(x2);
        y2 = Math.round(y2);
        
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
    
    drawPixelRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            Math.round(x), 
            Math.round(y), 
            Math.round(width), 
            Math.round(height)
        );
    }
    
    drawCandlestick(x, y, open, high, low, close, width, isGreen) {
        const bodyHeight = Math.abs(close - open);
        const bodyY = open < close ? y + (high - close) : y + (high - open);
        
        // 绘制影线
        this.drawPixelLine(x + width/2, y, x + width/2, y + (high - low), '#ffffff', 2);
        
        // 绘制实体
        const bodyColor = isGreen ? '#00ff00' : '#ff0000';
        this.drawPixelRect(x + 1, bodyY, width - 2, Math.max(1, bodyHeight), bodyColor);
        
        // 绘制边框
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(x + 1, bodyY, width - 2, Math.max(1, bodyHeight));
    }
    
    drawChart() {
        // 清空画布
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // 绘制网格
        this.drawGrid();
        
        // 绘制茅台股票K线
        this.drawStockChart();
        
        // 绘制$MOUTAI币K线
        this.drawMoutaiChart();
        
        // 绘制图例
        this.drawLegend();
    }
    
    drawGrid() {
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 1;
        
        // 垂直线
        for (let x = 0; x < this.width; x += 50) {
            this.drawPixelLine(x, 0, x, this.height, '#333333');
        }
        
        // 水平线
        for (let y = 0; y < this.height; y += 50) {
            this.drawPixelLine(0, y, this.width, y, '#333333');
        }
    }
    
    drawStockChart() {
        const margin = 50;
        const chartWidth = this.width - 2 * margin;
        const chartHeight = this.height - 2 * margin;
        
        // 计算价格范围
        const prices = this.data.map(d => [d.high, d.low]).flat();
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        const priceRange = maxPrice - minPrice;
        
        // 绘制茅台股票K线
        const candleWidth = chartWidth / this.data.length;
        
        this.data.forEach((candle, index) => {
            const x = margin + index * candleWidth;
            const y = margin + (maxPrice - candle.high) / priceRange * chartHeight;
            const isGreen = candle.close > candle.open;
            
            this.drawCandlestick(
                x, y, candle.open, candle.high, candle.low, candle.close, 
                candleWidth * 0.8, isGreen
            );
        });
        
        // 绘制茅台标签
        this.ctx.fillStyle = '#ffd700';
        this.ctx.font = '12px "Press Start 2P"';
        this.ctx.fillText('茅台股票 (万年长牛)', 10, 20);
    }
    
    drawMoutaiChart() {
        const margin = 50;
        const chartWidth = this.width - 2 * margin;
        const chartHeight = this.height - 2 * margin;
        
        // 计算$MOUTAI价格范围
        const prices = this.moutaiData.map(d => [d.high, d.low]).flat();
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        const priceRange = maxPrice - minPrice;
        
        // 绘制$MOUTAI币K线（叠加在茅台股票上）
        const candleWidth = chartWidth / this.moutaiData.length;
        
        this.moutaiData.forEach((candle, index) => {
            const x = margin + (this.data.length - this.moutaiData.length + index) * candleWidth;
            const y = margin + (maxPrice - candle.high) / priceRange * chartHeight;
            const isGreen = candle.close > candle.open;
            
            // 使用更亮的颜色表示$MOUTAI
            const bodyColor = isGreen ? '#00ff88' : '#ff4444';
            
            // 绘制影线
            this.drawPixelLine(x + candleWidth/2, y, x + candleWidth/2, y + (candle.high - candle.low), '#ffff00', 3);
            
            // 绘制实体
            const bodyHeight = Math.abs(candle.close - candle.open);
            const bodyY = candle.open < candle.close ? y + (candle.high - candle.close) : y + (candle.high - candle.open);
            this.drawPixelRect(x + 2, bodyY, candleWidth * 0.8 - 4, Math.max(2, bodyHeight), bodyColor);
        });
        
        // 绘制$MOUTAI标签
        this.ctx.fillStyle = '#ffff00';
        this.ctx.font = '12px "Press Start 2P"';
        this.ctx.fillText('$MOUTAI (暴涨模式)', 10, 40);
    }
    
    drawLegend() {
        // 绘制价格标签
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = '10px "Press Start 2P"';
        this.ctx.fillText('¥3000', this.width - 80, 20);
        this.ctx.fillText('¥2000', this.width - 80, this.height/2);
        this.ctx.fillText('¥1000', this.width - 80, this.height - 20);
    }
    
    animate() {
        // 添加一些动态效果
        this.drawChart();
        
        // 更新价格显示
        this.updatePriceDisplay();
        
        requestAnimationFrame(() => this.animate());
    }
    
    updatePriceDisplay() {
        const latestMoutai = this.moutaiData[this.moutaiData.length - 1];
        const priceElement = document.querySelector('.chart-price');
        if (priceElement) {
            const newPrice = (latestMoutai.close * 1000).toFixed(2);
            priceElement.innerHTML = `¥${newPrice} <span class="price-change positive">+${(Math.random() * 20 + 10).toFixed(1)}%</span>`;
        }
    }
}

// 页面加载完成后初始化图表
document.addEventListener('DOMContentLoaded', function() {
    const chart = new PixelChart('priceChart');
}); 