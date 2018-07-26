import examplesRouter from './api/controllers/examples/router';
import linkPreviewRouter from './api/controllers/link-preview/router';

export default function routes(app) {
  app.use('/api/examples', examplesRouter);
  app.use('/api/preview', linkPreviewRouter);
}
