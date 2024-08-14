export const signIn = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log('Login User');
};

export const loginOut = (req, res) => {
  console.log('LoginOut User');
};
