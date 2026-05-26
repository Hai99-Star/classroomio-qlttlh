import { B as Button } from './button-McsHA0hU.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { L as Lock } from './lock-DpzObtQi.js';

function Page_restricted($$renderer) {
  $$renderer.push(`<div class="flex h-screen w-screen flex-col items-center justify-center">`);
  Empty($$renderer, {
    title: "Restricted Page",
    description: "This organization is restricted. In the mean time, you can checkout our features.",
    icon: Lock,
    variant: "page",
    layout: "full-page",
    showLogo: true,
    children: ($$renderer2) => {
      Button($$renderer2, {
        href: "https://classroomio.com",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Go Home`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}

export { Page_restricted as P };
//# sourceMappingURL=page-restricted-DWSrcJFy.js.map
