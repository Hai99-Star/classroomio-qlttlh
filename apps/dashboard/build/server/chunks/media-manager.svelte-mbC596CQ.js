import { c as classroomio } from './index4-CY3O4yvX.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bh2VVy5Z.js';
import { s as ZAssetListQuery, t as ZAssetStorageQuery, u as ZYouTubeMetadataQuery, v as ZAssetCreateUpload, w as ZAssetUpdate, x as ZAssetAttach, y as ZAssetDetach } from './submission-CIIjGYOS.js';
import { t } from './translations-BxDrjLWK.js';
import { s as snackbar } from './store-D_AYzDdq.js';

class PresignApi extends BaseApiWithErrors {
  /**
   * Gets a presigned upload URL for a document.
   * @returns { url, fileKey } on success
   */
  async getDocumentUploadUrl(fileName, fileType) {
    const result = await this.execute({
      requestFn: () => classroomio.course.presign.document.upload.$post({ json: { fileName, fileType } }),
      logContext: "getting document upload URL"
    });
    return result?.url != null && result?.fileKey != null ? { url: result.url, fileKey: result.fileKey } : null;
  }
  /**
   * Gets presigned download URLs for documents.
   * @param keys Array of document storage keys
   * @returns Record mapping keys to presigned URLs
   */
  async getDocumentDownloadUrls(keys) {
    if (keys.length === 0) return {};
    const result = await this.execute({
      requestFn: () => classroomio.course.presign.document.download.$post({ json: { keys } }),
      logContext: "getting document download URLs"
    });
    return result?.urls ?? {};
  }
  /**
   * Gets a presigned upload URL for a video.
   * @returns { url, fileKey } on success
   */
  async getVideoUploadUrl(fileName, fileType) {
    const result = await this.execute({
      requestFn: () => classroomio.course.presign.video.upload.$post({ json: { fileName, fileType } }),
      logContext: "getting video upload URL"
    });
    return result?.url != null && result?.fileKey != null ? { url: result.url, fileKey: result.fileKey } : null;
  }
  /**
   * Gets presigned download URLs for videos.
   * @param keys Array of video storage keys
   * @returns Record mapping keys to presigned URLs
   */
  async getVideoDownloadUrls(keys) {
    if (keys.length === 0) return {};
    const result = await this.execute({
      requestFn: () => classroomio.course.presign.video.download.$post({ json: { keys } }),
      logContext: "getting video download URLs"
    });
    return result?.urls ?? {};
  }
}
const presignApi = new PresignApi();
function formatBytes(bytes) {
  if (bytes == null || Number.isNaN(bytes) || bytes < 0) {
    return "-";
  }
  if (bytes === 0) {
    return "0 B";
  }
  const units = ["B", "KB", "MB", "GB", "TB"];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const size = bytes / Math.pow(1024, exponent);
  return `${size.toFixed(size >= 100 || exponent === 0 ? 0 : 2)} ${units[exponent]}`;
}
function mapAssetProviderToLessonVideoType(provider) {
  if (provider === "youtube") return "youtube";
  if (provider === "google_drive") return "google_drive";
  if (provider === "generic" || provider === "external_url") return "generic";
  return "upload";
}
function mapAssetToLessonVideo(asset, options) {
  return {
    type: mapAssetProviderToLessonVideoType(asset.provider),
    link: options.url,
    key: options.key ?? asset.storageKey ?? void 0,
    assetId: asset.id,
    fileName: asset.title ?? void 0,
    metadata: {
      title: asset.title ?? void 0,
      description: asset.description ?? void 0,
      thumbnailUrl: asset.thumbnailUrl ?? void 0,
      duration: asset.durationSeconds ?? void 0,
      aspectRatio: asset.aspectRatio ?? void 0,
      createdAt: asset.createdAt ?? void 0
    }
  };
}
function getAssetDisplayName(asset) {
  return asset.title?.trim() || asset.storageKey || asset.id;
}
function getTargetTypeLabel(targetType) {
  const keyMap = {
    lesson: "media_manager.usage.target.lesson",
    exercise: "media_manager.usage.target.exercise",
    question: "media_manager.usage.target.question"
  };
  return t.get(keyMap[targetType] ?? "media_manager.usage.target.unknown");
}
function formatUsageDate(value) {
  if (!value) {
    return t.get("media_manager.common.not_available");
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return t.get("media_manager.common.not_available");
  }
  return new Intl.DateTimeFormat(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}
class MediaApi extends BaseApiWithErrors {
  assets = [];
  storageSummary = null;
  pagination = null;
  normalizeDurationSeconds(value) {
    if (value == null || !Number.isFinite(value)) {
      return void 0;
    }
    return Math.max(0, Math.round(value));
  }
  async listAssets(query = {}) {
    const parsed = ZAssetListQuery.partial().safeParse(query);
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return;
    }
    await this.execute({
      requestFn: () => classroomio.organization.assets.$get({ query: parsed.data }),
      logContext: "listing organization assets",
      onSuccess: (response) => {
        this.assets = response.data;
        this.pagination = response.pagination;
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.list_failed");
      }
    });
  }
  async getStorageSummary(query = {}) {
    const parsed = ZAssetStorageQuery.partial().safeParse(query);
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return;
    }
    await this.execute({
      requestFn: () => classroomio.organization.assets.storage.$get({ query: parsed.data }),
      logContext: "fetching media manager storage summary",
      onSuccess: (response) => {
        this.storageSummary = response.data;
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.storage_failed");
      }
    });
  }
  async getYouTubeMetadata(url) {
    const query = { url };
    const result = ZYouTubeMetadataQuery.safeParse(query);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return null;
    }
    let metadata = null;
    await this.execute({
      requestFn: () => classroomio.organization.assets["youtube-metadata"].$get({ query: result.data }),
      logContext: "resolving YouTube metadata",
      onSuccess: (response) => {
        metadata = response.data;
      }
    });
    return metadata;
  }
  async createAsset(fields) {
    const normalizedFields = {
      ...fields,
      durationSeconds: this.normalizeDurationSeconds(fields.durationSeconds)
    };
    const result = ZAssetCreateUpload.safeParse(normalizedFields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return null;
    }
    let asset = null;
    await this.execute({
      requestFn: () => classroomio.organization.assets.$post({ json: result.data }),
      logContext: "creating media asset",
      onSuccess: (response) => {
        asset = response.data;
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.create_failed");
      }
    });
    return asset;
  }
  async updateAsset(assetId, fields) {
    const normalizedFields = {
      ...fields,
      durationSeconds: this.normalizeDurationSeconds(fields.durationSeconds)
    };
    const result = ZAssetUpdate.safeParse(normalizedFields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return null;
    }
    let updated = null;
    await this.execute({
      requestFn: () => classroomio.organization.assets[":assetId"].$put({ param: { assetId }, json: result.data }),
      logContext: "updating media asset",
      onSuccess: (response) => {
        updated = response.data;
        this.assets = this.assets.map((asset) => asset.id === response.data.id ? response.data : asset);
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.update_failed");
      }
    });
    return updated;
  }
  async getAssetUsage(assetId) {
    let usage = null;
    await this.execute({
      requestFn: () => classroomio.organization.assets[":assetId"].usage.$get({ param: { assetId } }),
      logContext: "fetching media asset usage",
      onSuccess: (response) => {
        usage = response.data;
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.usage_failed");
      }
    });
    return usage;
  }
  async attachAsset(assetId, fields) {
    const result = ZAssetAttach.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return null;
    }
    let usage = null;
    await this.execute({
      requestFn: () => classroomio.organization.assets[":assetId"].attach.$post({ param: { assetId }, json: result.data }),
      logContext: "attaching media asset",
      onSuccess: (response) => {
        usage = response.data;
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.attach_failed");
      }
    });
    return usage;
  }
  async detachAsset(assetId, fields) {
    const result = ZAssetDetach.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return false;
    }
    let success = false;
    await this.execute({
      requestFn: () => classroomio.organization.assets[":assetId"].detach.$post({ param: { assetId }, json: result.data }),
      logContext: "detaching media asset",
      onSuccess: () => {
        success = true;
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.detach_failed");
      }
    });
    return success;
  }
  async getVideoPlaybackUrl(asset) {
    return this.getAssetDownloadUrl(asset, { forPlayback: true });
  }
  async getAssetDownloadUrl(asset, options = {}) {
    if (asset.provider !== "upload" || !asset.storageKey) {
      return asset.sourceUrl ?? null;
    }
    const useDocumentEndpoint = !options.forPlayback && (asset.kind === "document" || asset.mimeType?.startsWith("application/"));
    const urls = useDocumentEndpoint ? await presignApi.getDocumentDownloadUrls([asset.storageKey]) : await presignApi.getVideoDownloadUrls([asset.storageKey]);
    return urls[asset.storageKey] ?? null;
  }
  async registerUploadedLessonVideo(params) {
    const asset = await this.createAsset({
      kind: "video",
      provider: "upload",
      storageProvider: "s3",
      storageKey: params.fileKey,
      sourceUrl: params.videoUrl,
      mimeType: params.mimeType,
      byteSize: params.byteSize,
      title: params.fileName,
      thumbnailUrl: params.thumbnailUrl,
      durationSeconds: this.normalizeDurationSeconds(params.durationSeconds),
      isExternal: false,
      metadata: {
        fileName: params.fileName,
        createdAt: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString()
      }
    });
    if (!asset) {
      return null;
    }
    await this.attachAsset(asset.id, {
      targetType: "lesson",
      targetId: params.lessonId,
      slotType: "lesson_video",
      position: params.position
    });
    return asset;
  }
  async registerUploadedLessonDocument(params) {
    const asset = await this.createAsset({
      kind: "document",
      provider: "upload",
      storageProvider: "s3",
      storageKey: params.fileKey,
      sourceUrl: params.documentUrl,
      mimeType: params.mimeType,
      byteSize: params.byteSize,
      title: params.fileName,
      isExternal: false,
      metadata: {
        fileName: params.fileName,
        createdAt: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString()
      }
    });
    if (!asset) {
      return null;
    }
    await this.attachAsset(asset.id, {
      targetType: "lesson",
      targetId: params.lessonId,
      slotType: "lesson_document",
      position: params.position
    });
    return asset;
  }
  async buildLessonVideoFromAsset(asset, params = {}) {
    const url = await this.getVideoPlaybackUrl(asset);
    if (!url) {
      snackbar.error("snackbar.media_manager.resolve_video_failed");
      return null;
    }
    if (params.lessonId) {
      await this.attachAsset(asset.id, {
        targetType: "lesson",
        targetId: params.lessonId,
        slotType: params.slotType ?? "lesson_video",
        position: params.position
      });
    }
    return mapAssetToLessonVideo(asset, { url, key: asset.storageKey });
  }
  /**
   * Returns transcript payload or null when none exists yet.
   */
  async getAssetTranscript(assetId) {
    let data = null;
    await this.execute({
      requestFn: () => classroomio.organization.assets[":assetId"].transcript.$get({ param: { assetId } }),
      logContext: "fetching asset transcript",
      onSuccess: (response) => {
        data = response.data;
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.transcript_fetch_failed");
      }
    });
    return data;
  }
  /** Enqueue extract-audio + Whisper for an existing upload. */
  async generateTranscript(assetId) {
    let ok = false;
    await this.execute({
      requestFn: () => classroomio.jobs.media.asset[":assetId"].transcribe.$post({ param: { assetId } }),
      logContext: "starting transcription job",
      onSuccess: () => {
        ok = true;
        snackbar.success("snackbar.media_manager.transcription_started");
      },
      onError: () => {
        snackbar.error("snackbar.media_manager.transcription_start_failed");
      }
    });
    return ok;
  }
}
const mediaApi = new MediaApi();

export { formatUsageDate as a, getAssetDisplayName as b, formatBytes as f, getTargetTypeLabel as g, mediaApi as m, presignApi as p };
//# sourceMappingURL=media-manager.svelte-mbC596CQ.js.map
