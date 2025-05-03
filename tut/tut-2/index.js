const fsPromises = require("fs").promises;
const path = require("path");
const fs = require("fs");


/* 
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "files", "starter.txt"));
console.log("\n"); 
*/

// -------- To read a file 
/* fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8", (err, data) => {
    if (err)
        throw err;

    console.log(data);
});
 */

//--------- To write in a file 
/*
 fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Hello Kartik", (err) => {
    if (err)
        throw err;
    console.log("write complete");

    // To append data in a file
    fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\nHow are You I'm fine and what about you ?", (err) => {
        if (err)
            throw err;
        console.log("append completed");
    });
}); 
*/

//  To append a file
/* 
fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\nThis is data will append.", (err) => {
    if (err)
        throw err;
    console.log("append completed");
});
 */

// ------------------------- fs promises
const fileOps = async () => {
    const data = await fsPromises.readFile(path.join(__dirname, "files", "reply.txt"), "utf-8");
    console.log(data);

    await fsPromises.writeFile(path.join(__dirname, "files", "newFile.txt"), "This is new data that is in a file.\n" + data);

    await fsPromises.appendFile(path.join(__dirname, "files", "newFile.txt"), "\nYeah! What about you ?");

    // To rename a file
    await fsPromises.rename(path.join(__dirname, "files", "newFile.txt"), path.join(__dirname, "files", "newPromiseComplete.txt"));

    const newData = await fsPromises.readFile(path.join(__dirname, "files", "newPromiseComplete.txt"), "utf-8");
    console.log("this is new file data:\n", newData);

    if (fs.existsSync(path.join(__dirname, "files", "lorem.txt"))) {

        // To delete a file
        fsPromises.unlink(path.join(__dirname, "files", "lorem.txt"));
    }
};

fileOps();


// exit on uncaught error
process.on("uncaughtException", (err) => {
    console.error("There was an uncaught error", err);
    process.exit(1);
});