const Settings = require("../model/settings");

exports.find = async (req, res) => {
  const setting = await Settings.find().limit(1);
  if (!setting)
    res.status(200).send({
      appName: "STAFF PROMOTION AND RENUMERATION SYSTEM",
      powerredBy: "Precious Kosisochukwu",
    });

  res.status(200).send(setting);
};

exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const setting = await Settings.find().limit(1);
  if (!setting) {
    const newSetting = new Settings({
      appName: req.body.appName,
      powerredBy: req.body.powerredBy,
    });

    await newSetting.save();
  } else {
    await Settings.findByIdAndUpdate(setting._id, req.body, {
      useFindAndModify: false,
    });
  }
  res.status(201).send({ message: "Setting updated successfully." });
};
