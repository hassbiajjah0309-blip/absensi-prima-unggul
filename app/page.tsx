import Link from 'next/link';

export default function LandingPage() {
  const jurusans = ['TKJ', 'DKV', 'AK', 'BC', 'MPLB', 'BD'];
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans']">
      <nav className="p-6 flex justify-between items-center border-b border-red-100">
        <h1 className="text-2xl font-bold text-red-600">SMK Prima Unggul</h1>
        <Link href="/login" className="bg-red-600 text-white px-6 py-2 rounded-full">Login</Link>
      </nav>
      <main className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Mencetak Generasi Unggul & Mandiri</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Selamat datang di portal absensi resmi SMK Prima Unggul. Kami bangga memiliki 6 program keahlian unggulan.</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {jurusans.map(j => (
            <div key={j} className="p-4 bg-red-50 rounded-xl border border-red-100 text-red-700 font-bold">{j}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

