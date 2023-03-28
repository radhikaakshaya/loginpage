const dbCon=require('../config/dbConfig')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const securityKey="12345@Ra"

const userLogin=async(req,res)=>{
    const {email,password}=req.body;

    const sqlQuery=`select * from user_information where email='${email}'`;
    
    await dbCon.query(sqlQuery,async(error,data)=>{
        try {
            if(data.length==0){
                res.json({
                    status:400,
                    message:"user not matched"
                })
            }else{
               
                const sqlQuery1=`select * from roles where emp_id='${data[0].emp_id}'`
            if(await bcrypt.compare(password,data[0].password)){
                await dbCon.query(sqlQuery1,async(error,data1)=>{
                    if(data1){
                    const auth=jwt.sign({data:data1},securityKey);
                    console.log('first')
                    res.json({
                        status:200,
                        message:"Login success",
                        token:auth,
                    })
                    }
                })
            }else{
                res.json({
                        status:400,
                        message:"Please check the password"
                    })
                
            }
            }
        } catch (error) {
            res.json({
                status:400,
                message:error
            })
        }
    }) 
}

const userSignup=async(req,res)=>{
const {username,email,password}=req.body;
const salt=await bcrypt.genSalt(10);
const hashpwd=await bcrypt.hash(password,salt)
const values=[username,email,hashpwd]

const sqlQuery=`select * from user_information where email='${email}'`;
const sqlQuery1=`insert into user_information(username,email,password) values(?)`

await dbCon.query(sqlQuery,async(error,data)=>{
    try {
        if(data.length>0){
            res.json({
                status:400,
                message:'User already exist'
            })
        }
        if(data.length==0){
            await dbCon.query(sqlQuery1,[values],(error,data1)=>{
                if(data1){
                    res.json({
                        status:200,
                        data:data1,
                        message:`Sucessfully ${username} Registred`
                    })
                }else{
                    res.json({
                        status:400,
                        message:error
                    })
                }
            })
            
        }
    } catch (error) {
        res.json({
            status:400,
            message:error
        })
    }
})

}






module.exports={userSignup,userLogin}