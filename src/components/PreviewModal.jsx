// EN: Shared image preview modal — used by Projects.jsx (homepage) and ProjectsPageClient.jsx (/projects page)
// JP: 共有画像プレビューモーダル — Projects.jsx（ホーム）と ProjectsPageClient.jsx（/projects ページ）で使用

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// EN: preview = project/image object when open, null when closed
// JP: preview は開いているとき project/image オブジェクト、閉じているとき null
export default function PreviewModal({ preview, onClose }) {
  const images = preview?.images || [preview?.image]
  const validImages = images.filter(Boolean)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const currentImage = validImages[currentImageIndex]

  // EN: Reset preview image when a new project opens
  // JP: 新しいプロジェクトを開いた時、最初の画像に戻します
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [preview])

  // EN: Close on Escape key and lock body scroll while open
  // JP: Escape キーで閉じる。開いている間はボディのスクロールをロック
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose()
    }

    if (preview) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [preview, onClose])

  function showPreviousImage() {
    setCurrentImageIndex((prev) =>
      prev === 0 ? validImages.length - 1 : prev - 1
    )
  }

  function showNextImage() {
    setCurrentImageIndex((prev) =>
      prev === validImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <AnimatePresence>
      {preview && currentImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="relative w-full max-w-5xl rounded-3xl border border-[#D5D8E1]/30 bg-slate-950 p-4 shadow-2xl shadow-black/40"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#687394] font-bold text-slate-950 shadow-lg transition hover:bg-[#D5D8E1]"
              aria-label="Close image preview"
            >
              x
            </button>

            <p className="mb-3 text-sm font-semibold text-[#8CA0CF]">
              {preview.title}
            </p>

            <div className="relative">
              <img
                src={currentImage}
                alt={`${preview.title} screenshot preview ${
                  currentImageIndex + 1
                }`}
                className="max-h-[80vh] w-full rounded-2xl border border-[#D5D8E1]/30 object-contain"
              />

              {validImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 rounded-full bg-[#687394]/80 px-3 py-2 text-slate-950 transition hover:bg-[#D5D8E1]"
                    aria-label="Previous preview image"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 rounded-full bg-[#687394]/80 px-3 py-2 text-slate-950 transition hover:bg-[#D5D8E1]"
                    aria-label="Next preview image"
                  >
                    →
                  </button>

                  <p className="mt-3 text-center text-sm text-[#8CA0CF]">
                    {currentImageIndex + 1} / {validImages.length}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}