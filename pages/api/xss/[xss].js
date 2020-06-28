export default (req, res) => {
  const {
    query: { xss },
  } = req;
  // console.log(req);
  res.status(200).json({ res: "Hacked" });
  console.log("inject anything-->", xss);
};
