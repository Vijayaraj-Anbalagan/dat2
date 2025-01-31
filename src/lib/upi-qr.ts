import QRCode from 'qrcode';

export const generateUPIQRCode = async (
  upiId: string,
  amount: number,
  name: string
) => {
  const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
  try {
    const qrCode = await QRCode.toDataURL(upiUrl);
    return qrCode;
  } catch (error) {
    console.error('UPI QR Code Generation Error:', error);
    throw error;
  }
};

export const generateRegQR = async (
  email: string,
  name: string,
  phone: string,
  institution: string,
  category: string,
  status: string
) => {
  const regurl = `https://datworkspace.in/dashboard/qr?email=${email}&name=${name}&phone=${phone}&institution=${institution}&category=${category}&status=${status}`;
  try {
    const qrCode = await QRCode.toDataURL(regurl);
    return qrCode;
  } catch (error) {
    console.error('Registration QR Code Generation Error:', error);
    throw error;
  }
};