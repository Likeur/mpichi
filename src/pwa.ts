import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
  onOfflineReady() {
    document.dispatchEvent(new CustomEvent('mpichi:offline-ready'));
  },
  onNeedRefresh() {
    document.dispatchEvent(new CustomEvent('mpichi:need-refresh'));
  },
});
