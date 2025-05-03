const fs = require("fs");

if (!fs.existsSync("./new")) {

    fs.mkdir("./new", (err) => {
        if (err)
            throw err;

        console.log("Directory Created.");
    });
    console.log("directory was created.");
}

if (fs.existsSync("./new")) {
    fs.rmdir("./new", (err) => {
        if (err)
            throw err;

        console.log("Directory was removed.");
    });


}