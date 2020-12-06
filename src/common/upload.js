/**
 *
 * @param {*} img
 * @param {*} callback
 */
export function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export function getImageUrl(imageUrl) {
  // 区分base64和url地址
  if (imageUrl.length > 100) {
    return imageUrl;
  }
  return `${AppUtils.config('uploadFileBaseUrl')}${imageUrl}`;
}
