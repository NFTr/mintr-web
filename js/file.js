// namespace
if (typeof app === `undefined`) app = {};

app.loadSnapshotFile = function (file) {
    // Check if the file is a json file.
    if (file.type && !file.type.endsWith('json')) {
        console.log('File is not an json file.', file.type, file);
        return;
    }

    // read the json
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        app.loadedSnapshotJSON = JSON.parse(reader.result);
        app.loadSnapshotData(app.loadedSnapshotJSON);
    });

    if (file) reader.readAsText(file);
}

app.loadNftFile = function (file) {
    // Check if the file is a json file.
    if (file.type && !file.type.endsWith('json')) {
        console.log('File is not an json file.', file.type, file);
        return;
    }

    // read the json
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        app.loadedNftJSON = JSON.parse(reader.result);
        console.log("app.loadNftFile");
        console.log(app.loadedNftJSON);
        app.loadNftData(app.loadedNftJSON);
    });

    if (file) reader.readAsText(file);
}

app.loadSnapshotData = function (data) {

    if (data.nftName === undefined) {
        alert(app.dict[app.lang].snapshotDataNotCompatible);
        return;
    }

    app.userData = data;
    app.updateAppWithNewUserData(app.userData);
}

app.loadNftData = function (data) {

    // NFT datasets should have a description, at least (name is too common)
    if (data.description === undefined || !data.description) {
        alert(app.dict[app.lang].nftDataNotCompatible);
        return;
    }

    app.copyNftMetadataToUserData(data, app.userData);
    app.updateAppWithNewUserData(app.userData);
}
