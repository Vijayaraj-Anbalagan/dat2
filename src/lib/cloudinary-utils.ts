import axios from 'axios';

export const uploadToCloudinary = async (file: File, folder: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'screenshot-workshop');
  formData.append('folder', folder);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dyi9uhwfq/upload`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );

    return response.data.secure_url;
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    throw error;
  }
};