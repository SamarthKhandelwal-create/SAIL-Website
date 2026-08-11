/**
 * Hero background. This was a WebGL fluid shader; it cost ~40KB of JS plus a
 * continuous requestAnimationFrame loop for an effect most visitors read as
 * "blue gradient", and it was the largest render-blocking cost on every page.
 * The gradient below is what the shader fell back to anyway.
 *
 * Server component — ships no JavaScript.
 */
export default function ShaderBackground({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #49839b 0%, #1a4655 55%, #25637a 100%)",
        }}
      />
      {/* Soft light bloom, offset so the gradient doesn't read as flat. */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 55% at 22% 18%, rgba(230,242,247,0.22) 0%, rgba(230,242,247,0) 60%), radial-gradient(50% 50% at 85% 80%, rgba(12,44,58,0.35) 0%, rgba(12,44,58,0) 65%)",
        }}
      />
    </div>
  );
}
