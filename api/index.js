const express = require("express") //import gibi express i dahil ediyoruz
const app = express()//app üzerinden ulaşabiliriz

//SERVER SIDE KOMUTLARI BURDA YER ALICAK


//sorgu istekleri gelirse
//bunlar içlerine 2 değer alır routeName ve callback function
//req istek biligilerini alır
//res bu metot içinde yaptıklarımızı geri karşıya gönderir
/*
app.get (routeName,(req,res)=>{})
app.post
app.delete
app.put
*/


app.get("/get-all-data", (req,res)=>{
    //istersek burda mongoDB ye istersek session'a istersekfireBase bağlantısı yapabiliriz
    //DB varmış gibi şimdilik
    //res.status(200) burada 200 herşey başarılı demek
    res.status(200).json({
        //data : "Herşey Yolunda.."
        products : [
            {id :1 , title : "Elma"},
            {id :2 , title : "Muz"},
            {id :3 , title : "Armut"}
        ]
    })
})


app.post("/save",(req,res)=>{
    console.log(req.body.title)
    res.status(200).json({
        title : "Merhabalar " + req.body.title + " hoşgeldiniz.."
    })
})



//kullanıma açtık
module.exports ={
    path : "/api",
    handler : app

}