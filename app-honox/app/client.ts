import { createClient } from "honox/client";
import "@hotwired/turbo";
import Alpine from "alpinejs";

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine;

createClient();
