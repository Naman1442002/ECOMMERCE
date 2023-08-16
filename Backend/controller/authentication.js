const { userData } = require('../model/connector');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



exports.RegisterAuth = async (req, res) => {

   try {
      const { password } = req.body;
      const HashedPassword = await bcrypt.hash(password, 10);
      const newdata = new userData({
         ...req.body, password: HashedPassword
      });
      const data = await newdata.save();

      // Respond with the inserted data
      res.status(201).json(data);
   } catch (err) {
      console.error('Error inserting data:', err.message);
      res.status(500).json({ error: 'An error occurred while inserting data' });
   }
}

exports.LoginAuth = async (req, res) => {
   const {userName, password}=req.body;
try{
   const user = await userData.findOne({userName});

   if (!user) {
      return res.status(401).json({ error: 'Authentication failed user not found' });
    }

    const passMatch = await bcrypt.compare(password,user.password);
    console.log('Password Match:', passMatch);
    if (!passMatch) {
      return res.status(401).json({ error: 'Authentication failed passmismatch' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
   //  console.log(user._id , req.body , secretKey, token)
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
}
