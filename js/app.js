/*

Mintr was developed by NFTr.pro for free use by everyone.

Many thanks to XCHcentral for getting the ball rolling with their repo:
https://github.com/jm-XCHcentral/Mint-An-NFT

Official Chia NFT introduction
https://devs.chia.net/guides/nft-intro#install-and-configure-chia-testnet

Visit NFTr.pro - Mint, Trade, Enjoy!
https://NFTr.pro
Twitter: @nftr_pro
Discord: https://discord.gg/j7PmvGv5ra


Power to the creators!

*/


//
// Init app namespace
//
if (typeof app === `undefined`) app = {};
app.dict = app.dict ? app.dict : {}; // defined in en.js, etc
app.state = app.state || {};
app.userData = app.userData || {};
app.defaultData = app.defaultData || {};


app.settings = app.settings || {};
app.settings.showToolTips = true;


//
// Language files
//
// TODO: Add menu option in the UI to change this
// TODO: Create function to override the English in the static HTML when then lang !== "en"
app.lang = "en";

//
// Default Metadata
//
app.defaultData.nftName = '';
app.defaultData.nftDescription = '';
app.defaultData.nftIsSensitive = false;
app.defaultData.royaltyPercent = 250; // 2.5%
app.defaultData.walletId = 1;
app.defaultData.royaltyAddress = '';
app.defaultData.nftAddress = '';
app.defaultData.didAddress = '';
app.defaultData.walletFingerprint = "";
app.defaultData.fee = ".00000001";
app.defaultData.collectionName = "";
app.defaultData.collectionDescription = "";
app.defaultData.collectionIcon = "";
app.defaultData.collectionBanner = "";
app.defaultData.collectionTwitter = "";
app.defaultData.collectionWebsite = "";
app.defaultData.collectionDiscord = "";
app.defaultData.collectionInstagram = "";
app.defaultData.collectionMedium = "";
app.defaultData.collectionEditionNumber = "";
app.defaultData.collectionEditionTotal = "";
app.defaultData.collectionId = "";

app.defaultData.seriesNumber = "";
app.defaultData.seriesTotal = "";

app.defaultData.nftStorageApiToken = ""; // NFT.storage - https://nft.storage/docs/#get-an-api-token
app.defaultData.attributes = [];
app.defaultData.urls = [];
app.defaultData.metadataUris = [];
app.defaultData.mintingTool = "Mintr by NFTr.pro"

app.defaultData.sourceImageFileName = "";
app.defaultData.sourceImageFileNameFromPicker = "";
app.defaultData.sourceImageUrl = "";
app.defaultData.metadataUrl = "";


//
// Copy dataset to form
//
app.copyDataToForm = function (userData) {


    nftNameId.value = userData.nftName || "";
    nftDescriptionId.value = userData.nftDescription || "";

    seriesNumberId.value = userData.seriesNumber || "";
    seriesTotalId.value = userData.seriesTotal || "";

    nftIsSensitiveId.checked = userData.nftIsSensitive || "";
    nftStorageApiTokenId.value = userData.nftStorageApiToken || "";

    walletIdId.value = userData.walletId || "";
    royaltyAddressId.value = userData.royaltyAddress || "";
    nftAddressId.value = userData.nftAddress || "";
    didAddressId.value = userData.didAddress || "";
    royaltyPercentId.value = userData.royaltyPercent * .01;
    walletFingerprintId.value = userData.walletFingerprint || "";
    feeId.value = userData.fee || "";

    collectionNameId.value = userData.collectionName || "";
    collectionIdId.value = userData.collectionId || "";

    collectionDescriptionId.value = userData.collectionDescription || "";
    collectionTwitterId.value = userData.collectionTwitter || "";
    collectionIconId.value = userData.collectionIcon || "";
    collectionBannerId.value = userData.collectionBanner || "";
    collectionWebsiteId.value = userData.collectionWebsite || "";
    collectionDiscordId.value = userData.collectionDiscord || "";
    collectionInstagramId.value = userData.collectionInstagram || "";
    collectionMediumId.value = userData.collectionMedium || "";
    collectionEditionNumberId.value = userData.collectionEditionNumber || "";
    collectionEditionTotalId.value = userData.collectionEditionTotal || "";
    mintingToolId.value = userData.mintingTool || "";

    licenseHashId.value = userData.licenseHash;
    assetHashId.value = userData.assetHash;
    metadataHashId.value = userData.metadataHash;

    walletIdId.value = userData.walletId || "";
    feeId.value = userData.fee || "";
    walletFingerprintId.value = userData.walletFingerprint || "";

    nftStorageApiTokenId.value = userData.nftStorageApiToken || "";

    // licenses
    $("#licensesListId").empty();
    if (userData.licenses) {
        for (let i = 0; i < userData.licenses.length; i++) {
            app.addLicenseToForm(userData.licenses[i].url);
        }
    } else
        userData.licenses = [];

    // urls
    $("#urlsListId").empty();
    for (let i = 0; i < userData.urls.length; i++) {
        app.addUrlToForm(userData.urls[i].url);
    }

    // traits
    $("#traitsListId").empty();
    for (let i = 0; i < userData.attributes.length; i++) {
        app.addTraitToForm(userData.attributes[i].trait_type, userData.attributes[i].value, userData.attributes[i].min_value, userData.attributes[i].max_value);
    }

    // metadata uris
    $("#metadataListId").empty();
    if (userData.metadataUris) {
        for (let i = 0; i < userData.metadataUris.length; i++) {
            app.addMetadataUriToForm(userData.metadataUris[i].url);
        }
    }

}


//
// Copies from the form to the dataset
//
app.copyFormToData = function (userData) {
    // console.log(`[ copyFormToData ]`);

    userData.royaltyPercent = royaltyPercentId.value * 100;

    userData.nftName = nftNameId.value;
    userData.nftDescription = nftDescriptionId.value;
    userData.seriesNumber = seriesNumberId.value;
    userData.seriesTotal = seriesTotalId.value;
    userData.nftDescription = nftDescriptionId.value;
    userData.nftIsSensitive = nftIsSensitiveId.checked;
    userData.royaltyAddress = royaltyAddressId.value;
    userData.nftAddress = nftAddressId.value;
    userData.didAddress = didAddressId.value;

    userData.collectionId = collectionIdId.value;
    userData.collectionName = collectionNameId.value;
    userData.collectionDescription = collectionDescriptionId.value;
    userData.collectionIcon = collectionIconId.value;
    userData.collectionBanner = collectionBannerId.value;
    userData.collectionTwitter = collectionTwitterId.value;
    userData.collectionWebsite = collectionWebsiteId.value;
    userData.collectionDiscord = collectionDiscordId.value;
    userData.collectionInstagram = collectionInstagramId.value;
    userData.collectionMedium = collectionMediumId.value;
    userData.collectionEditionNumber = collectionEditionNumberId.value;
    userData.collectionEditionTotal = collectionEditionTotalId.value;
    userData.mintingTool = mintingToolId.value;

    userData.walletId = walletIdId.value;
    userData.fee = feeId.value;
    userData.walletFingerprint = walletFingerprintId.value;

    userData.nftStorageApiToken = nftStorageApiTokenId.value;

    userData.metadataHash = metadataHashId.value;

    userData.metadataHash = metadataHashId.value;
    userData.licenseHash = licenseHashId.value;
    userData.assetHash = assetHashId.value;


    // licenses
    userData.licenses = [];
    $('#licensesListId').children('div').each(function () {
        userData.licenses.push({
            url: $(this).find("input")[0].value
        })
    });


    // urls
    userData.urls = [];
    $('#urlsListId').children('div').each(function () {
        userData.urls.push({
            url: $(this).find("input")[0].value
        })
        // console.log("found url: "+$(this).find("input")[0].value)
    });

    if (userData.urls.length > 0)
        userData.sourceImageUrl = userData.urls[0].url;


    // attributes/traits
    userData.attributes = [];
    let numberOfTraits = $("#traitsListId > div").length;
    for (let i = 0; i < numberOfTraits; i++) {

        let val = $("#trait" + i + "_valueInputId")[0].value;
        let minValRaw = $("#trait" + i + "_minInputId")[0].value;
        let maxValRaw = $("#trait" + i + "_maxInputId")[0].value;
        userData.attributes.push({
            trait_type: $("#trait" + i + "_labelInputId")[0].value,
            value: !val || isNaN(val) ? val : parseFloat(val),
            min_value: !minValRaw || isNaN(minValRaw) ? minValRaw : parseFloat(minValRaw),
            max_value: !maxValRaw || isNaN(maxValRaw) ? maxValRaw : parseFloat(maxValRaw)
        })
    }


    // metadata uris
    userData.metadataUris = [];
    $('#metadataListId').children('div').each(function () {
        userData.metadataUris.push({
            url: $(this).find("input")[0].value
        })
    });

}


// app.getHash
app.getHash = async function (message) {
    const hash = await crypto.subtle.digest('SHA-256', message);
    const byteArrayOfHash = Array.from(new Uint8Array(hash));
    return byteArrayOfHash.map(b => b.toString(16).padStart(2, '0')).join('');
}


// called by the file picker
app.openLicenseFile = function (file) {
    let input = file.target;


    // this is used to tell if a file is selected for upload
    app.userData.sourceLicenseFileName = input.files[0].name;

    app.userData.licenseImageUrl = "";
    app.userData.licenseHash = "";
    app.userData.metadataHash = "";

    app.updateAppWithNewUserData(app.userData)


    let reader = new FileReader();

    // load the image
    reader.onload = function () {
        app.licenseFileForUploading = input.files[0];
        app.updateAppWithNewUserData(app.userData)
    };

    // load the raw data for the file hash
    reader.readAsDataURL(input.files[0]);
    let fileReader = new FileReader();
    fileReader.onload = async function (event) {
        app.sourceLicenseArrayBufferForHash = event.target.result;
        app.userData.licenseHashForUpload = await app.getHash(app.sourceLicenseArrayBufferForHash);
        licenseHashId.value = app.userData.licenseHashForUpload || "";

        app.userData.licenseHash = licenseHashId.value;
        app.userData.sourceAssetHash = assetHashId.value;

        // console.log("app.userData.sourceLicenseFileName ONLOAD 2");
        // console.log(app.sourceLicenseArrayBufferForHash);
        // console.log(app.userData.licenseHash);

        app.updateAppWithNewUserData(app.userData);


    };
    fileReader.readAsArrayBuffer(input.files[0]);
};

// called by the file picker
app.openFile = function (file) {
    let input = file.target;

    // this is used to remember what image was last chosen
    app.userData.sourceImageFileName = input.files[0].name;

    // this is used to tell if a file is selected for upload
    app.sourceImageFileNameFromPicker = input.files[0].name;

    let reader = new FileReader();

    // load the image
    reader.onload = function () {
        const dataURL = reader.result;
        const imagePreviewEl = document.getElementById('mainImagePreviewId');
        imagePreviewEl.src = dataURL;
        app.imageFileForUploading = input.files[0];

        app.userData.sourceImageUrl = "";
        app.userData.assetHash = "";

        app.updateAppWithNewUserData(app.userData)
    };

    // load the raw data for the file hash
    reader.readAsDataURL(input.files[0]);
    let fileReader = new FileReader();
    fileReader.onload = function (event) {
        app.sourceImageArrayBufferForHash = event.target.result;
    };

    fileReader.readAsArrayBuffer(input.files[0]);
};


app.uploadLicenseToIpfs = function () {

    const alertTextEl = document.getElementById('licenseAlertId');

    if (app.userData.nftStorageApiToken === "") {
        alertTextEl.innerHTML = app.dict[app.lang].missingNftStorageApiToken;
        return;
    }

    if (app.userData.sourceLicenseFileName === undefined || app.userData.sourceLicenseFileName === "") {
        alertTextEl.innerHTML = app.dict[app.lang].selectAFileFirst;
        return;
    }

    alertTextEl.innerHTML = `<div class="spinner-border text-success" role="status"></div> ${app.dict[app.lang].uploadingToNftStorage}`;


    $.ajax({
        type: "POST",
        url: "https://api.nft.storage/upload",
        data: app.licenseFileForUploading,
        contentType: false,
        processData: false,
        headers: {
            "Authorization": "Bearer " + app.userData.nftStorageApiToken, "Content-Type": "image/png"
        },
        success: async function (result) {

            app.userData.licenseImageUrl = 'https://' + result.value.cid + ".ipfs.nftstorage.link"

            alertTextEl.innerHTML = `${app.dict[app.lang].licenseUploadedToNftStorage} <a href="${app.userData.licenseImageUrl}" target="_blank">View</a>`;

            if (app.userData.licenses.length > 0)
                app.userData.licenses[0].url = app.userData.licenseImageUrl;
            else
                app.userData.licenses.push({url: app.userData.licenseImageUrl});

            app.updateAppWithNewUserData(app.userData);


        },
        error: function (error) {
            console.log("error")
            console.log(error);
            alertTextEl.innerHTML = app.dict[app.lang].anErrorOccurredUsingNftStorageKey + app.userData.nftStorageApiToken + "<br><br>" + error.responseText;
        }
    });

};


app.uploadImageToIpfs = function () {

    const alertTextEl = document.getElementById('imageAlertId');

    if (app.userData.nftStorageApiToken === "") {
        alertTextEl.innerHTML = app.dict[app.lang].missingNftStorageApiToken;
        return;
    }

    if (app.sourceImageFileNameFromPicker === undefined || app.sourceImageFileNameFromPicker === "") {
        alertTextEl.innerHTML = app.dict[app.lang].selectAFileFirst;
        return;
    }

    alertTextEl.innerHTML = `<div class="spinner-border text-success" role="status"></div> ${app.dict[app.lang].uploadingToNftStorage}`;

    $.ajax({
        type: "POST",
        url: "https://api.nft.storage/upload",
        data: app.imageFileForUploading,
        contentType: false,
        processData: false,
        headers: {
            "Authorization": "Bearer " + app.userData.nftStorageApiToken, "Content-Type": "image/png"
        },
        success: async function (result) {

            app.userData.sourceImageUrl = 'https://' + result.value.cid + ".ipfs.nftstorage.link"

            alertTextEl.innerHTML = "Image uploaded to nft.storage. <a href='" + app.userData.sourceImageUrl + "' target='_blank'>View</a>"
            app.userData.assetHash = await app.getHash(app.sourceImageArrayBufferForHash);

            if (app.userData.urls.length > 0)
                app.userData.urls[0].url = app.userData.sourceImageUrl; else app.userData.urls.push({url: app.userData.sourceImageUrl});

            app.updateAppWithNewUserData(app.userData);

        },
        error: function (error) {
            console.log("error")
            console.log(error);
            alertTextEl.innerHTML = app.dict[app.lang].anErrorOccurredUsingNftStorageKey + app.userData.nftStorageApiToken + "<br><br>" + error.responseText;
        }
    });

};

app.updateFinalJsonMetadataWithEditableJson = function () {

    // Clear formatted field text of <br>'s and escaped quotes: \"
    const escapedJson = uploadMetadataJsonId.innerHTML;
    let cleanJson = escapedJson.replace(/<br>/g, "");
    cleanJson = cleanJson.replace(/\\"/g, "");

    // parse it into an object to make sure the data is good
    const jsonObject = JSON.parse(cleanJson);

    app.finalJsonMetadata = JSON.stringify(jsonObject);
}

app.uploadMetadataToIpfs = function () {

    const alertTextEl = document.getElementById('metadataAlertId');

    if (app.userData.nftStorageApiToken === "") {
        alertTextEl.innerHTML = app.dict[app.lang].missingIpfsApiToken;
        return;
    }

    if (uploadMetadataJsonId.value === "") {
        alertTextEl.innerHTML = app.dict[app.lang].jsonTextIsBlank;
        return;
    }

    app.updateFinalJsonMetadataWithEditableJson();


    alertTextEl.innerHTML = `<div class="spinner-border text-success" role="status"></div> ${app.dict[app.lang].uploadingMetadataToNftStorage}`;

    $.ajax({
        type: "POST",
        url: "https://api.nft.storage/upload",
        data: app.finalJsonMetadata,
        contentType: false,
        processData: false,
        headers: {
            "Authorization": "Bearer " + app.userData.nftStorageApiToken, "Content-Type": "image/png"
        },
        success: async function (result) {
            metadataCID = result.value.cid
            app.userData.metadataUrl = 'https://' + metadataCID + ".ipfs.nftstorage.link";

            alertTextEl.innerHTML = `${app.dict[app.lang].metadataUploadedToNftStorage} <a href="${app.userData.metadataUrl}" target="_blank">View</a>`;

            const metadataUint8 = new TextEncoder().encode(app.finalJsonMetadata);
            app.userData.metadataHash = await app.getHash(metadataUint8);


            if (app.userData.metadataUris.length > 0)
                app.userData.metadataUris[0].url = app.userData.metadataUrl;
            else
                app.userData.metadataUris = [{url: app.userData.metadataUrl}];


            app.updateAppWithNewUserData(app.userData);

        },
        error: function (error) {
            console.log("error")
            console.log(error)
        }
    });

}


app.generateJson = function (userData) {

    app.metadata = {};

    app.metadata.name = userData.nftName; // Name of the NFT
    app.metadata.description = userData.nftDescription; // Description of the NFT
    app.metadata.sensitive_content = !!userData.nftIsSensitive; // Boolean for sensitive content within the NFT

    if (userData.seriesNumber)
        app.metadata.series_number =
            isNaN(userData.seriesNumber) ? userData.seriesNumber : parseFloat(userData.seriesNumber);

    if (userData.seriesTotal)
        app.metadata.series_total =
            isNaN(userData.seriesTotal) ? userData.seriesTotal : parseFloat(userData.seriesTotal);

    app.metadata.format = "CHIP-0007";

    //add attributes for the NFT (not collection), looking at the values and omitting bad input
    app.metadata.attributes = [];
    for (let i = 0; i < userData.attributes.length; i++) {
        if (userData.attributes[i].trait_type && userData.attributes[i].value) {
            let oneItem = {
                trait_type: userData.attributes[i].trait_type, value: userData.attributes[i].value,
            };
            if (userData.attributes[i].min_value) oneItem.min_value = userData.attributes[i].min_value;
            if (userData.attributes[i].max_value) oneItem.max_value = userData.attributes[i].max_value;
            app.metadata.attributes.push(oneItem);
        }
    }

    app.metadata.collection = {};
    app.metadata.collection.name = userData.collectionName;
    app.metadata.collection.id = userData.collectionId;


    app.metadata.collection.attributes = [];

    if (userData.collectionDescription) app.metadata.collection.attributes.push({
        type: "description",
        value: userData.collectionDescription
    });

    if (userData.collectionIcon) app.metadata.collection.attributes.push({
        type: "icon",
        value: userData.collectionIcon
    });


    if (userData.collectionBanner) app.metadata.collection.attributes.push({
        type: "banner",
        value: userData.collectionBanner
    });

    if (userData.collectionTwitter) app.metadata.collection.attributes.push({
        type: "twitter",
        value: userData.collectionTwitter
    });

    if (userData.collectionWebsite) app.metadata.collection.attributes.push({
        type: "website",
        value: userData.collectionWebsite
    });

    if (userData.collectionDiscord) app.metadata.collection.attributes.push({
        type: "discord",
        value: userData.collectionDiscord
    });

    if (userData.collectionInstagram) app.metadata.collection.attributes.push({
        type: "instagram",
        value: userData.collectionInstagram
    });

    if (userData.collectionMedium) app.metadata.collection.attributes.push({
        type: "medium",
        value: userData.collectionMedium
    });


    if (userData.mintingTool)
        app.metadata.minting_tool = userData.mintingTool; // Name or short tag of the minting tool used to create this NFT


    let jsonForPreview = JSON.stringify(app.metadata, null, "  ");

    previewJsonId.innerText = jsonForPreview;
    uploadMetadataJsonId.innerText = jsonForPreview;
};


app.updateCliCommand = function (userData) {

    // See Mint an NFT (With DID)
    // https://devs.chia.net/guides/nft-cli#mint-an-nft-with-did

    let assetUris = "";
    let licenseUris = "";
    let metadataUris = "";

    for (let i = 0; i < userData.urls.length; i++) {
        assetUris += assetUris !== "" ? "," : "" + userData.urls[i].url;
    }

    for (let i = 0; i < userData.licenses.length; i++) {
        licenseUris += licenseUris !== "" ? "," : "" + userData.licenses[i].url;
    }

    for (let i = 0; i < userData.metadataUris.length; i++) {
        metadataUris += metadataUris !== "" ? "," : "" + userData.metadataUris[i].url;
    }

    app.cliCommand = `chia wallet nft mint`;
    app.cliCommand += ` -i ${userData.walletId}`;  //The id of your NFT wallet.
    app.cliCommand += ` -u ${assetUris}`; // A comma-separated list of URIs where this asset may be found.
    app.cliCommand += ` -nh ${userData.assetHash}`; //The NFT's data hash. Must match to be viewable in the wallet.
    app.cliCommand += ` -f ${userData.walletFingerprint}`; //The fingerprint of the wallet.
    app.cliCommand += ` -ra ${userData.royaltyAddress}`; // The wallet or smart coin address that will receive royalties.
    app.cliCommand += ` -ta ${userData.nftAddress}`; // The wallet or smart coin address where the NFT will be sent.
    app.cliCommand += ` -mu ${metadataUris}`; // A comma-separated list of URIs where the image's metadata may be found.
    app.cliCommand += ` -lu ${licenseUris}`; // A comma-separated list of URIs where the image's license may be found.
    app.cliCommand += ` -lh ${userData.licenseHash}`; // The hash of the NFT's license.
    app.cliCommand += ` -en ${userData.collectionEditionNumber}`; // The hash of the NFT's license.
    app.cliCommand += ` -ec ${userData.collectionEditionTotal}`; // The hash of the NFT's license.
    app.cliCommand += ` -rp ${userData.royaltyPercent}`; //The royalty percentage expressed as tens of thousandths of a percent.
    app.cliCommand += ` -mh ${userData.metadataHash}`; //The hash of the NFT's metadata.
    app.cliCommand += ` -m ${userData.fee}`; // The fee for this transaction in XCH.

    // app.cliCommand += ` -ta ${userData.didAddress}`; // The did ??

    commandCliId.innerText = app.cliCommand;
}


app.updateRpcCommand = function (userData) {

    app.rpcCommand = "chia rpc wallet nft_mint_nft ";

    let assetUris = [];
    let licenseUris = [];
    let metadataUris = [];

    for (let i = 0; i < userData.urls.length; i++) {
        assetUris.push(userData.urls[i].url);
    }

    for (let i = 0; i < userData.licenses.length; i++) {
        licenseUris.push(userData.licenses[i].url);
    }

    for (let i = 0; i < userData.metadataUris.length; i++) {
        metadataUris.push(userData.metadataUris[i].url);
    }

    let rpcParts = {
        "wallet_id": userData.walletId,
        "uris": assetUris,
        "hash": userData.assetHash,
        "meta_uris": metadataUris,
        "meta_hash": userData.metadataHash,
        "license_uris": licenseUris,
        "license_hash": userData.licenseHash,
        "royalty_address": userData.royaltyAddress,
        "royalty_percentage": userData.royaltyPercent,
        "target_address": userData.nftAddress,
        "edition_number": !userData.collectionEditionNumber || isNaN(userData.collectionEditionNumber) ? userData.collectionEditionNumber : parseFloat(userData.collectionEditionNumber),
        "edition_count": !userData.collectionEditionTotal || isNaN(userData.collectionEditionTotal) ? userData.collectionEditionTotal : parseFloat(userData.collectionEditionTotal),
        "fee": app.convertXchToMojoString(userData.fee)
    };


    if (userData.didAddress)
        rpcParts.did_id = userData.didAddress;

    app.rpcCommand += `'${JSON.stringify(rpcParts)}'`;

    commandRpcId.innerText = app.rpcCommand;
}


app.handleReloadEdgeCases = function () {
    // if the image was picked, but not uploaded, then we don't want to remember the image
    if (!app.userData.sourceImageUrl) {
        app.userData.sourceImageFileName = "";
        app.sourceImageFileNameFromPicker = "";
        app.userData.assetHash = "";
    } else mainImagePreviewId.src = app.userData.sourceImageUrl;
}


app.resetUserDataToDefaults = function () {

    // Alert to check before resetting
    if (!confirm(app.dict[app.lang].resetAllData)) return;

    app.userData = app.defaultData;
    app.clearListDivsFromForm();

    app.writeUserDataToIndexedDB(app.userData);
    app.updateAppWithNewUserData(app.userData);
    mainImagePreviewId.src = "";
    nftFileId.value = "";
}

app.doResetNftDataToDefaults = function () {
    // console.log("[ doResetNftDataToDefaults ]");

    // Alert to check before resetting
    if (!confirm(app.dict[app.lang].clearNftData)) return;

    app.userData.urls = [];
    app.userData.licenseUris = [];
    app.userData.attributes = [];
    app.userData.sourceImageFileName = "";
    app.sourceImageFileNameFromPicker = "";
    app.userData.sourceImageUrl = "";
    app.userData.assetHash = "";
    app.userData.metadataUrl = "";
    app.userData.metadataHash = "";
    app.userData.nftName = "";
    app.userData.nftDescription = "";

    app.clearListDivsFromForm();
    app.copyDataToPreview(app.userData);
    app.writeUserDataToIndexedDB(app.userData);
    app.updateAppWithNewUserData(app.userData);
    mainImagePreviewId.src = "";
    nftFileId.value = "";
}

// populate the page with userData
app.updateAppWithNewUserData = function (userData) {
    app.clearListDivsFromForm();
    app.copyDataToForm(userData);
    app.copyDataToPreview(userData);
    app.generateJson(userData);
    app.updateCliCommand(userData);
    app.updateRpcCommand(userData);
}

// store changes in the form and update the previews
app.saveFormState = function (userData) {
    app.writeUserDataToIndexedDB(userData);
    app.copyFormToData(userData);
    app.copyDataToPreview(userData);
    app.generateJson(userData);
    app.updateCliCommand(userData);
    app.updateRpcCommand(userData);
}


// add url element to form html
app.addLicenseToForm = function (url = '') {

    let $divEl = $("#licensesListId");
    let divCount = $("#licensesListId > div").length;

    // replace placeholder text with required values
    let template = app.licenseTemplate.replace(/ROWID/g, "license" + divCount);
    template = template.replace(/URL_VALUE/g, url);
    $divEl.append(template);
}


// add url element to form html
app.addUrlToForm = function (url = '') {

    let $divEl = $("#urlsListId");
    let divCount = $("#urlsListId > div").length;

    // replace placeholder text with required values
    let template = app.urlTemplate.replace(/ROWID/g, "url" + divCount);
    template = template.replace(/URL_VALUE/g, url);
    $divEl.append(template);
}


// add trait element to form html
app.addTraitToForm = function (label = '', value = '', min = '', max = '') {

    let $traitsDivEl = $("#traitsListId");
    let divCount = $("#traitsListId > div").length;

    // replace placeholder text with required values
    let template = app.traitTemplate.replace(/ROWID/g, "trait" + divCount);

    template = template.replace(/LABEL_HEADER/g, app.dict[app.lang].label);
    template = template.replace(/VALUE_HEADER/g, app.dict[app.lang].value);
    template = template.replace(/MIN_HEADER/g, app.dict[app.lang].min);
    template = template.replace(/MAX_HEADER/g, app.dict[app.lang].max);

    template = template.replace(/LABEL_VALUE/g, label);
    template = template.replace(/VALUE_VALUE/g, value);
    template = template.replace(/MIN_VALUE/g, min);
    template = template.replace(/MAX_VALUE/g, max);
    $traitsDivEl.append(template);
}

// add metadata url element to form html
app.addMetadataUriToForm = function (url = '') {

    let $divEl = $("#metadataListId");
    let divCount = $("#metadataListId > div").length;

    // replace placeholder text with required values
    let template = app.metadataTemplate.replace(/ROWID/g, "metadata" + divCount);
    template = template.replace(/URL_VALUE/g, url);
    $divEl.append(template);
}

app.clearListDivsFromForm = function () {
    $("#urlsListId > div").remove();
    $("#traitsListId > div").remove();
    $("#metadataListId > div").remove();
}


// remove url element from html
app.removeLicense = function (el) {
    if ($("#licensesListId > div").length <= 1) return; // first URI required
    const id = $(el).data("id");
    $("#" + id + "_row").remove();
    app.saveFormState(app.userData);
    app.updateAppWithNewUserData(app.userData);
}

// remove url element from html
app.removeUrl = function (el) {
    if ($("#urlsListId > div").length <= 1) return; // first URI required
    const id = $(el).data("id");
    $("#" + id + "_row").remove();
    app.saveFormState(app.userData);
    app.updateAppWithNewUserData(app.userData);
}

// remove trait element from html
app.removeTrait = function (el) {
    const id = $(el).data("id");
    $("#" + id + "_row").remove();
    app.saveFormState(app.userData);
    app.updateAppWithNewUserData(app.userData);
}


// remove url element from html
app.removeMetadataUri = function (el) {
    if ($("#metadataListId > div").length <= 1) return; // first URI required
    const id = $(el).data("id");

    $("#" + id + "_row").remove();
    app.saveFormState(app.userData);
    // app.updateAppWithNewUserData(app.userData);
}

app.copyRpcToClipboard = function () {
    app.copyToClipboard(app.rpcCommand);
}

app.copyCliToClipboard = function () {
    app.copyToClipboard(app.cliCommand);
}

app.copyToClipboard = function (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
}

app.convertXchToMojoString = function (xchAmount) {
    return parseInt(xchAmount * 1000000000000);
}
app.convertXchToMojos = function (xchAmount) {
    return BigInt(app.convertXchToMojoString(xchAmount));
}

// init the app
app.init = function () {
    app.initIndexedDb();
    app.loadUserDataFromIndexedDbOrDefaults();

    // enable tool tips globally
    if (app.settings.showToolTips) {
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }

    // app.translate();
}

app.translate = function () {

    if (app.dict[app.lang].htmlElementIdValuePairs === undefined) return;

    for (let i = 0; i < app.dict[app.lang].htmlElementIdValuePairs.length; i++) {
        $thisEl = $("#" + app.dict[app.lang].htmlElementIdValuePairs[i].id)
            .text(app.dict[app.lang].htmlElementIdValuePairs[i].value);
    }
}


// listen for input changes and update the userData
$('input').change(function () {
    app.saveFormState(app.userData);
});

// listen for input changes and update the userData
$('#addTraitButtonId').click(function () {
    app.addTraitToForm();
});

// listen for input changes and update the userData
$('#addUrlButtonId').click(function () {
    app.addUrlToForm();
});
// listen for input changes and update the userData
$('#addMetadataButtonId').click(function () {
    app.addMetadataUriToForm();
});

// listen for input changes and update the userData
$('#addLicenseButtonId').click(function () {
    app.addLicenseToForm();
});

$('#loadSnapshotMenuItemId').click(function () {
    $('#loadSnapshotFileInputId').click();
});


$('#loadNftMetadataMenuItemId').click(function () {
    $('#loadNftFileInputId').click();
});

// When the File menu is selected, we create JSON files as downloadable links
$('#navbarDropdown').click(function () {
    const snapshoData = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(app.userData));
    $("#saveSnapshotMenuItemId").html(`<a href="data:${snapshoData}" download="mintr-settings.json">${app.dict[app.lang].saveSettings}</a>`);

    app.updateFinalJsonMetadataWithEditableJson();

    // write the json metadata file
    const nftData = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(JSON.parse(app.finalJsonMetadata)));
    const filename = `mintr-nft_${app.userData.nftName}_${app.userData.collectionName}.json`;

    $("#saveNftMetadataMenuItemId").html(`<a href="data:${nftData}" download="${filename}">${app.dict[app.lang].saveNftMetatdata}</a>`);

});


// listen for page closing and update the userData
$(window).on("beforeunload", function () {
    app.saveFormState(app.userData);
});

$("#loadSnapshotFileInputId").change(function (e) {
    // console.log(e.target.files[0]);
    app.loadSnapshotFile(e.target.files[0]);
});


$("#loadNftFileInputId").change(function (e) {
    console.log("loadNftFileInputId");
    console.log(e.target.files[0]);
    app.loadNftFile(e.target.files[0]);
});


// start the app
app.init();

