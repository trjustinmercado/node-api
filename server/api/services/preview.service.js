import linkPreview from '@nunkisoftware/link-preview';

class LinkPreviewService {
  preview(url) {
    return new Promise(async (resolve, reject) => {

      try {
        const preview = await linkPreview(url)
        return resolve(preview);
      } catch (e) {
        return reject(e);
      }

    })

  }
}

export default new LinkPreviewService();