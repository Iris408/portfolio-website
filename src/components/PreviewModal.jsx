// EN: Shared image preview modal — used by the homepage and full Work page
// JP: 共有画像プレビューモーダル — ホームページと完全な Work ページで使用

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// EN: preview = project/image object when open, null when closed
// JP: preview は開いているとき project/image オブジェクト、閉じているとき null
export default function PreviewModal({ preview, onClose }) {
  const images = preview?.images || [preview?.image];
  const validImages = images.filter(Boolean);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = validImages[currentImageIndex];

  // EN: Reset preview image when a new project opens
  // JP: 新しいプロジェクトを開いた時、最初の画像に戻します
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [preview]);

  // EN: Close on Escape key and lock body scroll while open
  // JP: Escape キーで閉じる。開いている間はボディのスクロールをロック
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (preview) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [preview, onClose]);

  function showPreviousImage() {
    setCurrentImageIndex((previousIndex) =>
      previousIndex === 0
        ? validImages.length - 1
        : previousIndex - 1,
    );
  }

  function showNextImage() {
    setCurrentImageIndex((previousIndex) =>
      previousIndex === validImages.length - 1
        ? 0
        : previousIndex + 1,
    );
  }

  return (
    <AnimatePresence>
      {preview && currentImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label={`${preview.title} image preview`}
        >
          <motion.div
            className="relative w-full max-w-5xl rounded-2xl border border-white/15 bg-[#111412] p-4 shadow-2xl shadow-black/30"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#F7F6F1] text-lg font-medium text-[#26372D] shadow-lg transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6E3C4]"
              aria-label="Close image preview"
            >
              ×
            </button>

            <p className="mb-3 text-sm font-medium text-[#D6E3C4]">
              {preview.title}
            </p>

            <div className="relative">
              <img
                src={currentImage}
                alt={`${preview.title} screenshot preview ${
                  currentImageIndex + 1
                }`}
                className="max-h-[80vh] w-full rounded-xl border border-white/15 object-contain"
              />

              {validImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#F7F6F1]/90 px-3 py-2 text-[#26372D] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6E3C4]"
                    aria-label="Previous preview image"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#F7F6F1]/90 px-3 py-2 text-[#26372D] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6E3C4]"
                    aria-label="Next preview image"
                  >
                    →
                  </button>

                  <p className="mt-3 text-center text-sm text-[#BFC9BF]">
                    {currentImageIndex + 1} / {validImages.length}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}