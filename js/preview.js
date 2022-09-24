// namespace
if (typeof app === `undefined`) app = {};


//
// Copy userData to preview area
//
app.copyDataToPreview = function (userData) {

    let notSelectedYet = app.dict[app.lang].notSelectedYet;
    let none = app.dict[app.lang].none;
    let required = `<div class="requiredText">${app.dict[app.lang].required}</div>`;
    let notUploadedYet = app.dict[app.lang].notUploadedYet;
    let yes = app.dict[app.lang].yes;
    let no = app.dict[app.lang].no;

    previewNameId.innerHTML = userData.nftName || required;
    previewDescriptionId.innerHTML = userData.nftDescription || required;
    previewRoyaltyId.innerHTML = userData.royaltyPercent ? `${userData.royaltyPercent * .01}% (${userData.royaltyPercent})` : required;
    previewRoyaltyReceiveAddressId.innerHTML = userData.royaltyAddress || required;
    previewIsSensitiveId.innerHTML = userData.nftIsSensitive ? yes : no;

    previewTargetReceiveAddressId.innerHTML = userData.nftAddress || required;
    previewDidAddressId.innerHTML = userData.didAddress || none;

    previewCollectionIdId.innerHTML = userData.collectionId || none;
    previewCollectionNameId.innerHTML = userData.collectionName || none;
    previewCollectionDescriptionId.innerHTML = userData.collectionDescription || none;

    previewSourceImageFileNameId.innerHTML = userData.sourceImageFileName ? userData.sourceImageFileName : notSelectedYet;


    previewSourceImageUrlId.innerHTML = !userData.sourceImageUrl ? notUploadedYet :
        ` <a href = "${userData.sourceImageUrl}" target = "_blank" >${userData.sourceImageUrl} </a>`;

    previewassetHashId.innerHTML = userData.assetHash || notSelectedYet;

    previewMetadataUrlId.innerHTML = !userData.metadataUrl ? notUploadedYet : `<a href="${userData.metadataUrl}" target="_blank">${userData.metadataUrl}</a>`;


    previewLicenseFileNameId.innerHTML = userData.sourceLicenseFileName ? userData.sourceLicenseFileName : notSelectedYet;

    previewSourceLicenseHashId.innerHTML = userData.licenseHash || notSelectedYet;
    previewMetadataHashId.innerHTML = userData.metadataHash || notUploadedYet;


    previewLicenseUrlId.innerHTML = !userData.licenseImageUrl ? notUploadedYet : `<a href="${userData.licenseImageUrl}" target="_blank">${userData.licenseImageUrl}</a>`;


    previewEditionNumberId.innerHTML = userData.collectionEditionNumber || none;
    previewEditionTotalId.innerHTML = userData.collectionEditionTotal || none;

    previewFeeId.innerHTML = !userData.fee ? required : `${userData.fee} XCH(${app.convertXchToMojoString(userData.fee)} mojo)`;

    previewMintingToolId.innerHTML = userData.mintingTool || none;

    // optional collection attributes
    $('#previewCollectionOptionalId > div').remove();
    app.previewLabelAndValue("Icon", userData.collectionIcon);
    app.previewLabelAndValue("Banner", userData.collectionBanner);
    app.previewLabelAndValue("Twitter", userData.collectionTwitter);
    app.previewLabelAndValue("Website", userData.collectionWebsite);
    app.previewLabelAndValue("Discord", userData.collectionDiscord);
    app.previewLabelAndValue("Instagram", userData.collectionInstagram);
    app.previewLabelAndValue("Medium", userData.collectionMedium);
    app.previewLabelAndValue("Series Number", userData.seriesNumber);
    app.previewLabelAndValue("Series Total", userData.seriesTotal);


    // extra license URIs
    $('#previewLicenseUrlsId').empty();
    if (userData.licenses.length > 0) {
        for (let i = 1; i < userData.licenses.length; i++) {
            app.addLicenseToPreview(userData.licenses[i].url);
        }
    } else {
        previewLicenseUrlsId.innerHTML = none;
    }


    // extra asset URIs
    $('#previewSourceUrlsId').empty();
    if (userData.urls.length > 1) {
        for (let i = 1; i < userData.urls.length; i++) {
            app.addUrlToPreview(userData.urls[i].url);
        }
    } else {
        previewSourceUrlsId.innerHTML = none;
    }


    // attributes (traits)
    if (userData.attributes.length > 0) {
        $('#previewTraitsTable').removeClass("hidden");
        $('#previewTraitsId tr').remove();
        for (let i = 0; i < userData.attributes.length; i++) {
            app.addTraitToPreview(userData.attributes[i].trait_type, userData.attributes[i].value, userData.attributes[i].min_value, userData.attributes[i].max_value);
        }
    } else
        $('#previewTraitsTable').addClass("hidden");


    // extra metadata URIs
    $('#previewMetadataUrlsId').empty();
    if (userData.metadataUris.length > 1) {
        for (let i = 1; i < userData.metadataUris.length; i++) {
            app.addMetadataUriToPreview(userData.metadataUris[i].url);
        }
    } else {
        previewMetadataUrlsId.innerHTML = none;
    }

}

app.previewLabelAndValue = function (label, value) {
    if (!value) return;

    app.$previewCollectionOptionalId = app.$previewCollectionOptionalId ? app.$previewCollectionOptionalId : $('#previewCollectionOptionalId');

    // replace placeholder text with required values
    let template = app.previewOptionalLink.replace(/LABEL_VALUE/g, label);
    template = template.replace(/VALUE_VALUE/g, value);


    template = template.replace(/LABEL_HEADER/g, app.dict[app.lang].label);
    template = template.replace(/VALUE_HEADER/g, app.dict[app.lang].value);

    app.$previewCollectionOptionalId.append(template);
}


// add trait element to preview html
app.addLicenseToPreview = function (url = '') {

    app.$previewLicenseUrlsId = app.$previewLicenseUrlsId ? app.$previewLicenseUrlsId : $("#previewLicenseUrlsId");
    let template = app.previewUrlTemplate;
    template = template.replace(/URL_VALUE/g, `<a href="${url}" target="_blank">${url}</a>`);
    app.$previewLicenseUrlsId.append(template);
}

// add trait element to preview html
app.addUrlToPreview = function (url = '') {

    app.$previewSourceUrlsEl = app.$previewSourceUrlsEl ? app.$previewSourceUrlsEl : $("#previewSourceUrlsId");

    let template = app.previewUrlTemplate;
    template = template.replace(/URL_VALUE/g, `<a href="${url}" target="_blank">${url}</a>`);
    app.$previewSourceUrlsEl.append(template);
}

// add trait element to preview html
app.addMetadataUriToPreview = function (url = '') {

    app.$previewMetadataUrlsEl = app.$previewMetadataUrlsEl ? app.$previewMetadataUrlsEl : $("#previewMetadataUrlsId");

    let template = app.previewUrlTemplate;
    template = template.replace(/URL_VALUE/g, `<a href="${url}" target="_blank">${url}</a>`);
    app.$previewMetadataUrlsEl.append(template);
}

// add trait element to preview html
app.addTraitToPreview = function (label = '', value = '', min = '-', max = '-') {

    let $traitsDivEl = $("#previewTraitsId");

    // replace placeholder text with required values
    let template = app.previewTraitTemplate;
    template = template.replace(/LABEL_VALUE/g, label);
    template = template.replace(/VALUE_VALUE/g, value);
    template = template.replace(/MIN_VALUE/g, min);
    template = template.replace(/MAX_VALUE/g, max);
    $traitsDivEl.append(template);
}

