const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('./models/User');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(11);
const secret = process.env.SECRET;

const app  = express();
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

 




//Route
app.get('/',(req, res) => {
  res.send('hello buddy its working');
} );

//route for register
app.post('/register', async(req, res) => {
    const { name, email, password} = req.body;
    
    try{
        const newUser = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, salt),
        })
        res.json(newUser);
    } 
    catch(error) {
        res.status(400).json('error at registration', error);
    }
});

// route for login
app.post("/login", async(req, res) => {
   const {email, password} = req.body; 
   try {
     const newUser = await User.findOne({email});
     if(!newUser) {
        return res.status(404).json('user not found');
     } 
     const pass = bcrypt.compareSync(password, newUser.password);
    //  if(pass) {
    //     return res.status(200).json('login successfull');
    //  } else {
    //     return res.status(401).json('wrong credentials');
    //  } 
     if(pass){
        console.log('login successfull');
        jwt.sign({email, id:newUser._id}, secret, {expiresIn:'1hr'},(err,token) =>{
            if(err) throw err;
            res.cookie('token', token, {httpOnly:true, secure:true}).json({
                id:newUser._id,
                email,
            });
            
        } )
     }
   } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error:'internal server error'});

   }
})
//route to trace the user info and  to know wether user loged in or not
app.get('/profiles', (req, res) => {
    const {token}  = req.cookies;
     
    //  if (!token) {
    //     return res.status(401).json({ error: 'Unauthorized: Token not provided' });
    // }
    jwt.verify(token, secret,{}, (err, info) => {
        if(err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' }); 
        };
        res.json({'info': info});
    })
    
} )
//for logout
app.post('/logout', (req, res) => {
    console.log("Logout endpoint hit");
    res.cookie('token', '', { expires: new Date(0), httpOnly: true, path: '/' }).json('ok');
});
//Datbase connection 

const PORT = process.env.PORT || 4002;
mongoose .connect(process.env.MONGO_URL,{
    retryWrites:true,
    w:'majority'
}) 
.then(
    app.listen(PORT, () => {
      console.log('server running on ', PORT);
    })
) 
.catch(error => {
    console.log('error connecting to databae', error);
})

