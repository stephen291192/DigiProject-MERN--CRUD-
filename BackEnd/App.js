// Install necessary packages: express, mongoose, cors
// npm install express mongoose cors

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Database Connection - Start ----
// User:stephen291192
// Ps: tvPirJCJJQASdGSj
mongoose
  .connect(
    // "mongodb+srv://stephen291192:tvPirJCJJQASdGSj@cluster0.ccladre.mongodb.net/?retryWrites=true&w=majority",
    "mongodb+srv://stephen291192:tvPirJCJJQASdGSj@cluster0.kjw7j6c.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch(console.error);

let database = mongoose.connection;
module.exports = database;
database.once("open", () => {
  console.log("Database Connected Succesfully...");
});

database.on("error", (error) => {
  console.log(error, "Database Not Connected");
});

// Database Connection - End ----

const details = mongoose.model("details", {
     fname: String ,lname: String ,Faname: String ,
     mname: String ,date: Date ,mail: String ,phone:Number,qualification:String
});


// Save API function
app.post("/api/save", async (req, res) => {
  const { fname, lname, Faname, mname, date, mail, phone, qualification } = req.body;

  try {
      
      const existingEntry = await details.findOne({ fname, phone,mail });

      if (existingEntry) {
          return res.status(400).json({ error: "Duplicate entry. First name and email, phone number must be unique." });
      }
      if (existingEntry || fname.length < 3) {
        return res.status(400).json({ error: "The First name must be at least 3 characters long." });
    }
    if (existingEntry || phone.length === 9) {
      return res.status(400).json({ error: "The phone number must be at least 10 characters long." });
  }
      const data = new details({
          fname,
          lname,
          Faname,
          mname,
          date,
          mail,
          phone,
          qualification,
      });

      await data.save();

      res.status(200 || 201).json({ message: "Details saved successfully" });
  } catch (error) {
      console.error("Error saving details:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

 
// Get All Data API Function
app.get("/api/GetDetails", async (req, res) => {
  try {
      // Replace 'Details' with your actual model
      const detailsvalue = await details.find();

      if (detailsvalue.length === 0) {
          // If no details are found, send a 404 response
          res.status(404).json({ message: "No details found" });
      } else {
          res.json({ detailsvalue });
      }
  } catch (error) {
      console.error("Error fetching details:", error);
      res.status(500).send("Internal Server Error");
  }
});



// Update API Function
app.put("/api/detailsUpdate/:id", async (req, res) => {
  const detailsID = req.params.id;
  const { completed } = req.body;
  try {
    const updatedDetails = await details.findByIdAndUpdate(
      detailsID,
      { completed },
      { new: true }
    );
    res.json({ details: updatedDetails });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send("Internal Server Error");
  }
});



// Delect API Function
app.delete("/api/detailsdelete/:id", async (req, res) => {
  const detailsID = req.params.id;
  try {
    await details.findByIdAndDelete(detailsID);
    res.status(200).send();
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).send("Internal Server Error");
  }
});

// API route for fetching tasks with server-side pagination
app.get("/api/tasks", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Convert page to an integer, default to 1
    const perPage = 5; // Adjust as needed

    const totalTasks = await Task.countDocuments();
    const totalPages = Math.ceil(totalTasks / perPage);

    if (page < 1 || page > totalPages) {
      return res.status(400).json({ error: "Invalid page number" });
    }

    const tasks = await Task.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    res.json({ tasks, totalPages, currentPage: page });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
