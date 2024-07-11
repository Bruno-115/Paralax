const User = require ('./userSchema.cjs')
const bcrypt = require ('bcrypt')

const signup = async (req, res, next) => {
    try {
      const userData = req.body;
      const hashedPassword = await bcrypt.hash(userData.password.trim(), 10);
      userData.password = hashedPassword;
      const user = new User(userData);
      await user.save();
      res.status(200).json({ message: 'Usuário cadastrado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };
  
  const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({ error: 'Email ou senha incorretos' });
      }
      const passwordMatch = await bcrypt.compare(password.trim(), user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Email ou senha incorretos' });
      }
      console.log('Login bem-sucedido');
      res.status(200).json({user});
    } catch (error) {
      next(error);
    }
  };

  const updateMe = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const updateUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: 'success',
        data: {
          user: updateUser,
        },
      });
    } catch (error) {
      next(error);
    }
  };

module.exports = {
    updateMe,
    login,
    signup
};
