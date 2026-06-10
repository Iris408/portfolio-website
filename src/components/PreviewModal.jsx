// EN: Shared image preview modal — used by Projects.jsx (homepage) and ProjectsPageClient.jsx (/projects page)
// JP: 共有画像プレビューモーダル — Projects.jsx（ホーム）と ProjectsPageClient.jsx（/projects ページ）で使用

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// EN: preview = project object when open, null when closed
// JP: preview は開いているとき project オブジェクト、閉じているとき null
export default function PreviewModal({ preview, onClose }) {
  const images = preview?.images || [preview?.image]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImage = images[currentImageIndex]

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
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  function showNextImage() {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-pink-300 text-pink-950 font-bold shadow-lg hover:bg-pink-200 transition"
              aria-label="Close image preview"
            >
              ×
            </button>

            <p className="text-sm font-avantgarde-book text-purple-300 mb-3 font-semibold">
              {preview.title}
            </p>

            <div className="relative">
              <img
                src={currentImage}
                alt={`${preview.title} screenshot preview ${currentImageIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/10"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80 transition"
                    aria-label="Previous preview image"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80 transition"
                    aria-label="Next preview image"
                  >
                    →
                  </button>

                  <p className="mt-3 text-center text-sm text-gray-300">
                    {currentImageIndex + 1} / {images.length}
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