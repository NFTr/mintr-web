// namespace
if (typeof app === `undefined`) app = {};



app.previewTraitTemplate = `<tr><td>LABEL_VALUE</td><td>VALUE_VALUE</td><td>MIN_VALUE</td><td>MAX_VALUE</td></tr>`;

app.previewUrlTemplate = `<div class="urlPreview">URL_VALUE</div>`;

app.previewOptionalLink = `<div><div class="previewHeader">LABEL_VALUE</div><div class="previewValue">VALUE_VALUE</div></div>`;

app.licenseTemplate = `
<div class="row form-floating mb-3"  id="ROWID_row">
    <div class="col-md-10">
        <div class="form-floating">
            <input type="text"
                   id="ROWID_licensesInputId"
                   value="URL_VALUE"
                   class="form-control floatingTextField required"
                   placeholder=""
                   onchange="app.saveFormState(app.userData)">
            <label for="ROWID_licensesInputId">URI</label>
        </div>
    </div>

    <div class="col-md-2">
        <div class="form-floating">
            <button data-id="ROWID" id="ROWID_url_clearButtonId" type="button" onclick="app.removeLicense(this)"
                    class="btn btn-outline-primary btn-sm fillSpace">
                X
            </button>
        </div>
    </div>
</div>`;

app.urlTemplate = `
<div class="row form-floating mb-3"  id="ROWID_row">
    <div class="col-md-10">
        <div class="form-floating">
            <input type="text"
                   id="ROWID_urlInputId"
                   value="URL_VALUE"
                   class="form-control floatingTextField required"
                   placeholder=""
                   onchange="app.saveFormState(app.userData)">
            <label for="ROWID_urlInputId">URI</label>
        </div>
    </div>

    <div class="col-md-2">
        <div class="form-floating">
            <button data-id="ROWID" id="ROWID_url_clearButtonId" type="button" onclick="app.removeUrl(this)"
                    class="btn btn-outline-primary btn-sm fillSpace">
                X
            </button>
        </div>
    </div>
</div>`;

app.metadataTemplate = `
<div class="row form-floating mb-3"  id="ROWID_row">
    <div class="col-md-10">
        <div class="form-floating">
            <input type="text"
                   id="ROWID_urlInputId"
                   value="URL_VALUE"
                   class="form-control floatingTextField required"
                   placeholder=""
                   onchange="app.saveFormState(app.userData)">
            <label for="ROWID_urlInputId">URI</label>
        </div>
    </div>

    <div class="col-md-2">
        <div class="form-floating">
            <button data-id="ROWID" id="ROWID_url_clearButtonId" type="button" onclick="app.removeMetadataUri(this)"
                    class="btn btn-outline-primary btn-sm fillSpace">
                X
            </button>
        </div>
    </div>
</div>`;


app.traitTemplate = `
<div class="row form-floating mb-3"  id="ROWID_row">
    <div class="col-md-3">
        <div class="form-floating">
            <input type="text"
                   id="ROWID_labelInputId"
                   value="LABEL_VALUE"
                   class="form-control floatingTextField required"
                   placeholder="Label"
                   autocomplete="off"
                   onchange="app.saveFormState(app.userData)">
            <label for="ROWID_labelInputId">LABEL_HEADER</label>
        </div>
    </div>

    <div class="col-md-3">
        <div class="form-floating">
            <input type="text"
                   id="ROWID_valueInputId"
                   value="VALUE_VALUE"
                   class="form-control floatingTextField required"
                   placeholder="Value"
                   autocomplete="off"
                   onchange="app.saveFormState(app.userData)">
            <label for="ROWID_valueInputId">VALUE_HEADER</label>
        </div>
    </div>

    <div class="col-md-2">
        <div class="form-floating">
            <input type="text"
                   id="ROWID_minInputId"
                   value="MIN_VALUE"
                   class="form-control floatingTextField"
                   placeholder="Min"
                   autocomplete="off"
                   onchange="app.saveFormState(app.userData)">
            <label for="ROWID_minInputId">MIN_HEADER</label>
        </div>
    </div>

    <div class="col-md-2">
        <div class="form-floating">
            <input type="text"
                   id="ROWID_maxInputId"
                   value="MAX_VALUE"
                   class="form-control floatingTextField"
                   placeholder="Max"
                   autocomplete="off"
                   onchange="app.saveFormState(app.userData)">
            <label for="ROWID_maxInputId">MAX_HEADER</label>
        </div>
    </div>

    <div class="col-md-2">
        <div class="form-floating">
            <button data-id="ROWID" id="ROWID_clearButtonId" type="button" onclick="app.removeTrait(this)"
                    class="btn btn-outline-primary btn-sm fillSpace">
                X
            </button>
        </div>
    </div>
</div>`;
