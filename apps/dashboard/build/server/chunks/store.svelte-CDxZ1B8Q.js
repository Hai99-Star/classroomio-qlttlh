class SidePanelStore {
  definitions = /* @__PURE__ */ new Map();
  activePanelId = null;
  panelProps = {};
  register(definition) {
    this.definitions.set(definition.id, definition);
  }
  list() {
    return Array.from(this.definitions.values());
  }
  get(id) {
    return this.definitions.get(id);
  }
  get activeDefinition() {
    if (!this.activePanelId) return null;
    return this.definitions.get(this.activePanelId) ?? null;
  }
  open(id, props = {}) {
    if (!this.definitions.has(id)) {
      console.warn(`sidePanel.open: no panel registered with id "${id}"`);
      return;
    }
    this.activePanelId = id;
    this.panelProps = props;
  }
  toggle(id, props = {}) {
    if (this.activePanelId === id) {
      this.close();
      return;
    }
    this.open(id, props);
  }
  close() {
    this.activePanelId = null;
    this.panelProps = {};
  }
  closeIfScope(scope) {
    if (!this.activePanelId) return;
    const def = this.definitions.get(this.activePanelId);
    if (!def) return;
    if (def.scope === scope) {
      this.close();
    }
  }
  reset() {
    this.close();
  }
}
const sidePanel = new SidePanelStore();

export { sidePanel as s };
//# sourceMappingURL=store.svelte-CDxZ1B8Q.js.map
