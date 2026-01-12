

export default function Header() {

  return (
    <header className="bg-[#ff5200] font-serif">
      <div className="flex justify-between container mx-auto py-8">
        <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" />

        <div className="text-white text-base font-bold flex gap-15 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
          <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="">Get The App</a>
          <a className="border border-black bg-black py-3 px-4 rounded-2xl" target="_blank" href="">Sign in</a>
        </div>

      </div>

      <div></div>
      <div></div>
    </header>
  )

}