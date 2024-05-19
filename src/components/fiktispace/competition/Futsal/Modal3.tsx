import React from "react";

export default function Modal3() {
  return (
    <div className="modal-box bg-white font-Urbanist">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute text-black right-2 top-2">✕</button>
      </form>
      <div className="space-y-5">
        <h1 className="text-black text-center text-2xl">Teknis Pelaksanaan Kegiatan</h1>
        <div>
          <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">A. Rules Pertandingan :</h1>
          <ol className="text-black list-decimal pl-16 font-Urbanist text-sm md:text-base">
            <li>Lama pertandingan adalah 2 x 10 menit kotor dan 2 x 15 menit pada semi final dan final dengan waktu istirahat 2 menit.</li>
            <li>Format kompetisi menggunakan sistem Gugur/Knock Out.</li>
            <li>Kesempatan time out untuk per-tim 1 (satu) kali dalam 1 (satu) babak dengan waktu 1 menit.</li>
            <li>Untuk semua bagan bila terjadi keadaan imbang atau skor sama akan dilakukan adu pinalty (3 penendang dari setiap tim), jika masih imbang akan dilakukan pelemparan koin.</li>
            <li>Diberlakukan akumulasi pelanggaran (Kartu Kuning dan Kartu Merah). Untuk 2 (dua) kartu kuning atau 1 (satu) kartu merah dihukum tidak boleh mengikuti 1 kali pertandingan pada pertandingan berikutnya</li>
            <li>Apabila kedua tim terlambat, lama pertandingan akan disesuaikan dengan sisa jadwal yang telah ditentukan.</li>
            <li>Kick-In: Tendangan ke dalam yang dilakukan ketika bola out. Dilakukan dalam durasi maksimal 3 detik.</li>
            <li>Tendangan Sudut: Jika tendangan tidak dilakukan dalam waktu 3 detik, restart menjadi izin gawang untuk tim lawan.</li>
            <li>Tendangan bebas: Bisa dilakukan secara langsung atau tidak langsung (melalui umpan pendek dari pemain satu tim)</li>
            <li>
              Goal Clearances: Seorang penjaga gawang atau kiper tidak boleh terlalu lama melakukan penguasaan bola ketika permainan berlangsung. Bola harus dimainkan dalam waktu 5 detik sejak tim siap untuk memainkan bola atau wasit
              memberi isyarat bahwa tim siap untuk memainkannya.
            </li>
            <li>
              Pergantian Pemain (subtitusi): Pergantian pemain dalam olahraga futsal berlangsung dengan cepat, dan harus disatu titik yang sudah ditentukan. Bola harus dalam keadaan mati (out, freekick, corner kick) ketika peserta akan
              melakukan pergantian pemain.
            </li>
            <li>Dilarang memakai aksesoris (gelang, kalung, cincin, ataupun gelang sport (karet)).</li>
            <li>Peserta diwajibkan memakai deker/pelindung kaki dan kaos kaki panjang se-lutut.</li>
            <li>Apabila tim tidak datang dan belum lengkap (&lt;5 orang) dalam waktu 5 menit dan 2 kali pemanggilan akan dianggap WO dengan skor 0 - 3.</li>
            <li>Peserta atau tim yang tidak mengikuti Technical Meeting FSPACE 3.0, dianggap menyetujui segala peraturan yang telah ditentukan.</li>
            <li>Keputusan wasit adalah sah dan tidak dapat diganggu gugat.</li>
            <li>Jika seorang pemain terkena kartu merah, maka pergantian pemain akan ditahan selama 2 menit dan Pemain tersebut tidak dapat bermain 1 game selanjutnya.</li>
            <li>Diluar aturan yang tersebut diatas, peraturan pertandingan menggunakan aturan internasional.</li>
          </ol>
        </div>
        <div>
          <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">B. Pelanggaran dan Pinalti</h1>
        </div>
        <div className="pl-4">
          <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Keterlambatan :</h1>
          <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg">Panitia berhak mendiskualifikasi tim pada match tersebut (lawan secara otomatis mendapatkan kemenangan), jika :</h1>
          <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
            <li>Kontak tim tidak dapat dihubungi sampai batas waktu keterlambatan, atau</li>
            <li>
              Kurang dari 4 dari 10 orang anggota tim yang hadir sampai batas waktu keterlambatan. *Jika anggota tim yang hadir hanya 4 orang sampai batas waktu keterlambatan, match akan berlangsung 4 vs 5. Batas keterlambatan maksimal 10
              menit dari jadwal permainan.
            </li>
          </ol>
        </div>
        <div className="pl-4">
          <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Pinalti :</h1>
          <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg">
            Jika ditemukan anggota tim yang melakukan pelanggaran pada peraturan yang tercantum di atas, maka pihak panitia berhak memberikan penalti berupa teguran keras dan/atau diskualifikasi. Teguran keras sebanyak 3 kali akan
            mengakibatkan tim terdiskualifikasi.
          </h1>
          <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
            <li>
              Tim akan diberikan teguran jika: <br />
              a. Berkata kasar/hal yang mengandung SARA atau <br />
              b. Supporter dari tim tersebut membuat ricuh pertandingan.
            </li>
            <li>
              Tim akan didiskualifikasi jika:
              <br />
              a. Ada supporter dari sebuah tim yang membuat kericuhan sampai memasuki lapangan, tim tersebut akan dikenakan WO. <br />
              b. Melakukan perkelahian didalam venue ataupun di area Golden Stick maka tim tersebut akan dikenakan WO.
            </li>
          </ol>
        </div>
        <div className="pl-4">
          <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Denda :</h1>
          <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
            <li>Untuk pemain yang terkena 1 kartu kuning tim akan dikenakan denda sebesar Rp.15.000,-. Untuk 1 kartu merah, dikenakan denda sebesar Rp.25.000,-.</li>
            <li>Apabila setiap pemain tidak membawa deker akan dikenakan biaya sewa sebesar Rp.10.000,- dan deker akan dipinjamkan oleh panitia.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
