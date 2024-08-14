export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params.id;
    const senderId = req.userId;
    console.log('MESSAGE CORRECT SENT');
  } catch (error) {
    console.log('Error in sendMessage controller: ', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
