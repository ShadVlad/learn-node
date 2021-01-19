const mongoose = require("mongoose");

const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log(
    "🛑 🌮 🐶 💪 💩\nЭй ты! \n\t да ты! \n\t\tДружище! \n\tУ тебя старая версия node.js, которая не поддерживает великолепный функциона, изучаемый нами (Async + Await)! Пожалуйста, перейди на nodejs.org и скачай последнюю стабильную версию. 👌\n "
  );
  process.exit();
}

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

require("./models/Stores");

const app = require("./app");
app.set("port", process.env.PORT || 8086);
const server = app.listen(app.get("port"), () => {
  console.log(`Приложение запущено → PORT ${server.address().port}`);
});
