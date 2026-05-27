import { c as classroomio } from './index4-3F2xRc80.js';

async function uploadImage(file) {
  try {
    const response = await classroomio.media.image.$post({
      form: {
        file
      }
    });
    const data = await response.json();
    if (!data.success || !data.url) {
      const errorMessage = "error" in data ? data.error : "Failed to upload image";
      throw new Error(errorMessage);
    }
    return data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export { uploadImage as u };
//# sourceMappingURL=upload-B049_g3q.js.map
