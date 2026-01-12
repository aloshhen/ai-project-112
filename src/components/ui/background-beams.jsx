export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[200%] h-[200%] opacity-20 blur-3xl bg-gradient-radial from-orange-500/20 via-purple-500/10 to-blue-500/10"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] opacity-10 blur-2xl bg-gradient-radial from-emerald-500/20 via-amber-500/10 to-blue-500/10"></div>
    </div>
  )
}