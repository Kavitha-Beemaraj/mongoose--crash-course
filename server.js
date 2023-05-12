const mongoose= require ("mongoose")
const User= require("./User")
const dbUrl= "mongodb://127.0.0.1:27017/crash-course?readPreference=primary&directConnection=true&ssl=false"
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dbUrl, connectionParams).then(() => console.info("connected to db"))
run()
async function run(){
    try{
        const user= await User
        .where("name")
        .equals("kavitha")
        .limit(1)
        .populate("bestFriend")
        /*user[0].bestFriend = "638ef749dd86c22b85ae7f55"
        await user[0].save()*/
        console.log(user)
        /*const user= await  User.create({ 
        name:"kavitha", 
        age:26,
        email:"KAvitha@gmail.com",
        hobbies:["swimming", "reading","painting"],
        address:{ 
            street: "main street",
            city:"chennai"
        }
    })
    console.log(user)*/
} catch(e){
    console.log(e.message)
}
}
