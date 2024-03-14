const User = require('../model/uersdel');
const router = require('../router/userout');



const handelUserSignup = async (req, res) => {
    try {
                const { name, email, password } = req.body;
                const existingUser=await signup.findOne({email : email});
                if(!existingUser){
                    const signupData = new signup({
                        name,
                        email,
                        password,
                    });

                    await signupData.save();
                    res.redirect("/result");
                }
                else{
                    console.log("User alredy exist");
                    res.redirect("/err")
                }
                const signupData = new signup({
                    name,
                    email,
                    password,
                });

                await signupData.save();
                res.redirect("/result");
            } catch (err) {
                console.log(err);
                res.redirect("/err");
            }
        }


module.exports=handelUserSignup;




