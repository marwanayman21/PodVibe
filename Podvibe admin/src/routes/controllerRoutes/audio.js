const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const validObjectId = require("../../middleware/validObjectId");
const uploader = require("../../middleware/multer");

const audioController = require("../../controllers/audio");

const uploaderFiles = uploader.fields([
  { name: "image", maxCount: 1 }, //specifies that req.files.image will contain this image
  { name: "audio", maxCount: 1 },
]);

router.get("/audios", audioController.renderMainView);
router.get("/audios/create", audioController.renderCreationView);
router.post("/audios/create", uploaderFiles, audioController.createAudio);

router.get("/audios/delete/:id", audioController.deleteAudioById);

router.get("/audios/update/:id", audioController.renderUpdateView);
router.post(
  "/audios/update/:id",
  uploaderFiles,
  audioController.updateAudioById
);

//ADD ICON IN INDEX TO DIRECT TO THIS LINK AND MAKE IT SEND THE AUDIO ID
router.get(
  "/audios/addAudioToAlbum/:id",
  audioController.renderAddAudioToAlbum
);
// DO THE PUG FILE FOR THIS AND MAKE IT SEND THE ALBUM ID
router.get("/audios/addAudioToAlbum1/:id", audioController.AddAudioToAlbum);

// router.post("/", [uploaderFiles], audioController.createAudio);
// router.get("/", audioController.getAllAudio);

// router.put("/:id", [validObjectId], audioController.updateAudioById);
// router.delete("/:id", [validObjectId], audioController.deleteAudioById);

// router.put("/liked/:id", [validObjectId], audioController.likeAudioById);
// router.get("/liked", audioController.getAllLikedAudio);

// router.get("/get/count", audioController.getAudioCount);

module.exports = router;
