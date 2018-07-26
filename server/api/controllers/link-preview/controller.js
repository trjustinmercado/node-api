import PreviewService from '../../services/preview.service';

export class Controller {
  preview(req, res) {
    PreviewService
      .preview(req.query['url'])
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }
}
export default new Controller();
