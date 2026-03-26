export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.send(`
    <html>
      <head>
        <title>Sipariş Takip</title>
        <style>
          body {
            font-family: Arial;
            background: #f5f5f5;
            text-align: center;
            padding: 50px;
          }
          input, button {
            padding: 10px;
            margin: 5px;
          }
          .box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            display: inline-block;
          }
        </style>
      </head>
      <body>

        <div class="box">
          <h2>Sipariş Takip</h2>
          
          <input id="order" placeholder="Sipariş No" />
          <input id="email" placeholder="Email" />
          <br/>
          <button onclick="check()">Sorgula</button>

          <p id="result"></p>
        </div>

        <script>
          function check() {
            document.getElementById("result").innerText = "Hazırlanıyor";
          }
        </script>

      </body>
    </html>
  `);
}