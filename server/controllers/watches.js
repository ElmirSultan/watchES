import Watch from "../models/Watch.js";

export const addWatch = async (req, res) => {
  try {
    const aWatch = new Watch(req.body);
    await aWatch.save();
    res.status(200).json("Watch is added successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const showAllWatches = async (req, res) => {
  try {
    const watch = await Watch.find();
    res.status(200).json(watch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteWatch = async (req, res) => {
  try {
    const {id} = req.params;

    await Watch.findByIdAndRemove(id);

    const watches = await Watch.find();
    res.status(200).json(watches)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
