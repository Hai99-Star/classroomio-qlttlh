import { E as await_block, d as attr, l as attr_class, j as clsx } from './index2-Eg0dVEDW.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';

function Image_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { src, className, alt } = $$props;
    function loadImage(src2) {
      if (!src2) return Promise.reject();
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src2;
      });
    }
    await_block(
      $$renderer2,
      loadImage(src),
      () => {
        Skeleton($$renderer2, { class: className });
      },
      () => {
        $$renderer2.push(`<img${attr("src", src)}${attr("alt", alt)}${attr_class(clsx(className))}/>`);
      }
    );
    $$renderer2.push(`<!--]-->`);
  });
}

export { Image_1 as I };
//# sourceMappingURL=image2-BA-KJrg7.js.map
