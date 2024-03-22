const uppercaseName = (req, res) => {
  try {
    const name = req.query.name;
    console.log(name);

    const upperName = name.toUpperCase();
    res.status(200).json({ data: `Hello ${upperName}` });
  } catch (err) {
    res.status(500).json({ error: "Query parameter 'name' is mandatory" });
  }
};

module.exports = { uppercaseName };
