import { c as classroomio } from './index4-DxtvI9Cx.js';
import { Z as ZTagGroupCreate, a as ZTagGroupUpdate, b as ZTagCreate, c as ZTagUpdate, d as ZCourseTagAssignment } from './tag2-BBx_7Ec0.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-C2lk8LDX.js';
import { s as snackbar } from './store-D_AYzDdq.js';

class TagApi extends BaseApiWithErrors {
  tagGroups = [];
  courseTags = [];
  async getTagGroups() {
    return this.execute({
      requestFn: () => classroomio.organization.tags.$get(),
      logContext: "fetching organization tags",
      onSuccess: (response) => {
        this.tagGroups = response.data;
      },
      onError: () => {
        snackbar.error("snackbar.tags.fetch_failed");
      }
    });
  }
  async createTagGroup(fields) {
    const parsed = ZTagGroupCreate.safeParse(fields);
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return false;
    }
    let created = false;
    await this.execute({
      requestFn: () => classroomio.organization.tags.groups.$post({ json: parsed.data }),
      logContext: "creating tag group",
      onSuccess: () => {
        created = true;
        snackbar.success("snackbar.tags.group_created");
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("field" in result && result.field) {
          this.errors[result.field] = result.error;
        } else {
          snackbar.error("snackbar.tags.save_failed");
        }
      }
    });
    if (created) {
      await this.getTagGroups();
    }
    return created;
  }
  async updateTagGroup(groupId, fields) {
    const parsed = ZTagGroupUpdate.safeParse(fields);
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return false;
    }
    let updated = false;
    await this.execute({
      requestFn: () => classroomio.organization.tags.groups[":groupId"].$put({ param: { groupId }, json: parsed.data }),
      logContext: "updating tag group",
      onSuccess: () => {
        updated = true;
        snackbar.success("snackbar.tags.group_updated");
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("field" in result && result.field) {
          this.errors[result.field] = result.error;
        } else {
          snackbar.error("snackbar.tags.save_failed");
        }
      }
    });
    if (updated) {
      await this.getTagGroups();
    }
    return updated;
  }
  async createTag(fields) {
    const parsed = ZTagCreate.safeParse(fields);
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return false;
    }
    let created = false;
    await this.execute({
      requestFn: () => classroomio.organization.tags.$post({ json: parsed.data }),
      logContext: "creating tag",
      onSuccess: () => {
        created = true;
        snackbar.success("snackbar.tags.tag_created");
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("field" in result && result.field) {
          this.errors[result.field] = result.error;
        } else {
          snackbar.error("snackbar.tags.save_failed");
        }
      }
    });
    if (created) {
      await this.getTagGroups();
    }
    return created;
  }
  async updateTag(tagId, fields) {
    const parsed = ZTagUpdate.safeParse(fields);
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return false;
    }
    let updated = false;
    await this.execute({
      requestFn: () => classroomio.organization.tags[":tagId"].$put({ param: { tagId }, json: parsed.data }),
      logContext: "updating tag",
      onSuccess: () => {
        updated = true;
        snackbar.success("snackbar.tags.tag_updated");
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("field" in result && result.field) {
          this.errors[result.field] = result.error;
        } else {
          snackbar.error("snackbar.tags.save_failed");
        }
      }
    });
    if (updated) {
      await this.getTagGroups();
    }
    return updated;
  }
  async getCourseTags(courseId) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"].tags.$get({ param: { courseId } }),
      logContext: "fetching course tags",
      onSuccess: (response) => {
        this.courseTags = response.data;
      },
      onError: () => {
        snackbar.error("snackbar.tags.fetch_failed");
      }
    });
  }
  async updateCourseTags(courseId, tagIds, options = {}) {
    const { showSuccessToast = true } = options;
    const parsed = ZCourseTagAssignment.safeParse({ tagIds });
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return false;
    }
    let updated = false;
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].tags.$put({ param: { courseId }, json: parsed.data }),
      logContext: "updating course tags",
      onSuccess: (response) => {
        this.courseTags = response.data;
        updated = true;
        if (showSuccessToast) {
          snackbar.success("snackbar.tags.course_tags_updated");
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("field" in result && result.field) {
          this.errors[result.field] = result.error;
        } else {
          snackbar.error("snackbar.tags.save_failed");
        }
      }
    });
    return updated;
  }
}
const tagApi = new TagApi();

export { tagApi as t };
//# sourceMappingURL=tag.svelte-BWo3dTxu.js.map
