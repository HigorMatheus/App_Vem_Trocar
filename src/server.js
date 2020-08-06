//dados
const proffys =[
    {
        name: "Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8524-852645548",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química" ,
        cost : "20,00",
        weekday:[ 0 ],
        time_from:[720], 
        time_to:[1220]
    },
    {
        name: "Danyele evangelista",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8524-852645548",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química" ,
        cost : "20,00",
        weekday:[ 1 ],
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects =[
        "Artes ",
        "Biologia ",
        "Ciências ",
        "Educação física ",
        "Física ",
        "Geografia ",
        "História ",
        "Matemática ",
        "Português ",
        "Química",
]
const weekdays=[
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// fincionalidades
function getSubject(subjectNumber){
    const arrayPosition = + subjectNumber -1
    return subjects[ arrayPosition]
}

function pagelanding(req,res){
    return res.render( "index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render( "study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req,res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    // se tiver dados (data)
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
          //adicionardata a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }
    // se nao mostar a pagina 
    return res.render( "give-classes.html", {subjects, weekdays})
}


//servidor
const express =require("express")
const server = express()


// comfigurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})
//configurar arquivos estáticos (css,scripts,imagens)
server.use(express.static("public"))

// rotas da arplicacao 
server.get("/", pagelanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.listen(5500)