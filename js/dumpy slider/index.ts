const root = document.getElementById("app");

root?.addEventListener("pointerdown", (e) => {
  const target = e.target as HTMLDivElement;

  if (target.closest(".slide")) {
    const slide = target.closest(".slide");
    const { clientX: initialClientX } = e;
    const initialScroll = root.scrollLeft;
    let pixelsCount = 0;

    const mouseMoveHandler = (e: MouseEvent) => {
      const { clientX } = e;
      pixelsCount = initialClientX - clientX;

      if (pixelsCount > 0 && pixelsCount >= 10) {
        root.scrollLeft = slide!.clientWidth + initialScroll;
        document.removeEventListener("pointermove", mouseMoveHandler);
        return;
      }
      if (pixelsCount < 0 && pixelsCount <= -10) {
        root.scrollLeft = -slide!.clientWidth + initialScroll;
        document.removeEventListener("pointermove", mouseMoveHandler);
        return;
      }
    };

    document.addEventListener("pointermove", mouseMoveHandler);
  }
});
