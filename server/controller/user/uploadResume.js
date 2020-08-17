export const resumeUploadController = (req, res, next) => {
  const file = req.file;
  if (!file) {
    let error = new Error("Please upload file");
    error.status = 400;
    return next(error);
  }
  res.status(200).json({ result: file });
};
