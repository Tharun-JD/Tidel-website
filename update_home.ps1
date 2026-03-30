$filePath = "src\Home.jsx"
$content = Get-Content $filePath
$index = $content.IndexOf($content | Where-Object { $_ -like "*id=`"find-space`"*" })
if ($index -ge 0) {
    $newText = @(
        "          {/* Enquiry Section */}",
        "          <section id=`"body-enquiry`" className=`"py-20 bg-slate-900 relative overflow-hidden`">",
        "            <div className=`"absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-48 -mt-48 blur-3xl`"></div>",
        "            <div className=`"absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full -ml-48 -mb-48 blur-3xl`"></div>",
        "            <div className=`"container mx-auto px-4 relative z-10`">",
        "              <div className=`"max-w-4xl mx-auto text-center`">",
        "                <h2 className=`"text-4xl font-black text-white mb-4 uppercase italic tracking-tight`">Enquiry</h2>",
        "                <p className=`"text-blue-100 text-lg mb-12`">Click here to enquire. Our team is ready to assist you.</p>",
        "                <div className=`"grid grid-cols-1 md:grid-cols-3 gap-6`">",
        "                  <button onClick={() => { navigate('/support'); window.scrollTo(0, 0); setTimeout(() => { const el = document.getElementById('book-facility'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'}); }, 500); }} className=`"flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group`">",
        "                    <span className=`"text-3xl mb-4 group-hover:scale-110 transition-transform`">🏢</span>",
        "                    <span className=`"text-white font-bold tracking-widest uppercase text-sm`">Book Facility</span>",
        "                  </button>",
        "                  <button onClick={() => { navigate('/find-space'); window.scrollTo(0, 0); }} className=`"flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group`">",
        "                    <span className=`"text-3xl mb-4 group-hover:scale-110 transition-transform`">📍</span>",
        "                    <span className=`"text-white font-bold tracking-widest uppercase text-sm`">Find Space</span>",
        "                  </button>",
        "                  <button onClick={() => { navigate('/support'); window.scrollTo(0, 0); setTimeout(() => { const el = document.getElementById('visitor-pass'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'}); }, 500); }} className=`"flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group`">",
        "                    <span className=`"text-3xl mb-4 group-hover:scale-110 transition-transform`">🎫</span>",
        "                    <span className=`"text-white font-bold tracking-widest uppercase text-sm`">Visitor Pass</span>",
        "                  </button>",
        "                </div>",
        "              </div>",
        "            </div>",
        "          </section>",
        ""
    )
    $content = $content[0..($index-2)] + $newText + $content[($index-1)..($content.Length-1)]
    $content | Set-Content $filePath -Encoding UTF8
    Write-Host "Success"
} else {
    Write-Host "Fail"
}
