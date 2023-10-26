
const body = require('./filebody');
const AdmZip = require('./adm-zip');

const fname = "./gino.zip";
const pass = "gino";
const zip = new AdmZip();
zip.addFile('gino.pdf', Buffer.from(body), '');
zip.writeZip(fname, null, pass);

const zip2 = new AdmZip(fname);
zip2.extractAllTo(/*target path*/ "./gino", /*overwrite*/ true, false, pass);
