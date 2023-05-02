const multer = require('multer');
const Moralis = require('moralis').default;
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100000000 // 100000000 Bytes = 100 MB
    },
}).single('file');

function ipfsController() {
    return {
        uploadCertificate(req, res) {
            upload(req, res, async (err) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (!req.file) {
                        res.status(400).send('Something went wrong when uploading');
                    }
                    const fileBase64 = req.file.buffer.toString("base64");

                    try {
                        const abi = [{
                            path: `moralis/${req.file.originalname}`,
                            content: `${fileBase64}`,
                        }];

                        const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
                        const metadata = {
                            name: req.body.name,
                            email: req.body.email,
                            description: req.body.description,
                            uploadedFile: response.jsonResponse[0].path
                        };

                        /**
                         * before sending data save it to db
                         */

                        res.status(200).send(metadata)
                    } catch (error) {
                        console.log(error);
                        res.status(400).send(error);
                    }
                }
            });
        },
    }
}


module.exports = ipfsController;