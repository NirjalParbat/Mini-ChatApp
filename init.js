const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Neha",
        to: "Priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "Nirajan",
        to: "Nirjal",
        msg: "What Do you read today?",
        created_at: new Date(),
    },
    {
        from: "Nirjal",
        to: "Nirajan",
        msg: "I completed Mongodb And Mongoose Today!",
        created_at: new Date(),
    },
    {
        from: "Gaurab",
        to: "Ranjan",
        msg: "Ohooo! Congratulations Ale For your achievement",
        created_at: new Date(),
    },
    {
        from: "Ranjan",
        to: "Gaurab",
        msg: "Thank you Ghale Bhai. It means a lot",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);