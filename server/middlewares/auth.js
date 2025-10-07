// middleware/auth.js
export const auth = async (req, res, next) => {
  try {
    const { userId } = await req.auth();
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.userId = userId;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
