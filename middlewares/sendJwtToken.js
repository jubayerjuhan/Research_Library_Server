export const sendJwtToken = async (user, res) => {
  const jwtToken = await user.generateJwtToken();

  res.status(200).json({
    success: true,
    user,
    jwtToken,
  });
};
