// namespace
if (typeof app === `undefined`) app = {};

app.copyNftMetadataToUserData = function (data, userData) {

    if (data.name !== null && data.name) userData.nftName = data.name;

    if (data.description !== null && data.description) userData.nftDescription = data.description;

    if (data.sensitive_content !== null && data.sensitive_content) userData.nftIsSensitive = data.sensitive_content;

    if (data.attributes !== null && data.attributes && data.attributes.length > 0)
        userData.attributes = data.attributes;


}

