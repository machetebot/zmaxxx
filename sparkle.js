    let lastSparkTime = 0;
    const symbols = ["+", "❦", "⍟", "✭", "✪", "✶", "㋡", "☆"];
    const pastelColors = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"];
    function createSparkle(e) {
        const currentTime = Date.now();
        if (currentTime - lastSparkTime > 90) {
            const body = document.querySelector('body');
            const spark = document.createElement("div");
            spark.className = "spark";
            spark.innerText = symbols[Math.floor(Math.random() * symbols.length)];
          
            const x = e.touches ? e.touches[0].pageX : e.pageX;
            const y = e.touches ? e.touches[0].pageY : e.pageY;
            spark.style.left = x + "px";
            spark.style.top = y + "px";
            spark.style.setProperty('--spark-color', pastelColors[Math.floor(Math.random() * pastelColors.length)]);
            body.appendChild(spark);
            setTimeout(function() {
                spark.remove();
            }, 1000);
            lastSparkTime = currentTime;
        }
    }
    document.addEventListener("mousemove", createSparkle);
    document.addEventListener("touchmove", createSparkle); 