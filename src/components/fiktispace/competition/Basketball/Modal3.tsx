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
              <li>Di awal pertandingan team yang memenangkan Coin Flip mendapatkan keuntungan untuk memilih penguasaan bola di awal pertandingan atau pada awal potensi terjadinya Overtime.</li>
              <li>Selain pemain yang dipanggil untuk bertanding, tidak diperbolehkan memasuki lapangan.</li>
              <li>Jadwal yang sudah disediakan menjadi dasar dilaksanakannya suatu pertandingan, namun pertandingan dapat dimajukan waktunya atau mundur karena terjadi WO dan lain sebagainya.</li>
              <li>
                Sebelum memulai pertandingan, pemain diberikan kesempatan untuk mencoba lapangan dan shuttlecock selama 1 menit. Dilakukan juga undian yang dipimpin wasit untuk menentukan lapangan dan pemain yang pertama melakukan servis
              </li>
              <li>Barang – barang yang boleh diletakkan dekat lapangan hanya air minum dan perlengkapan atlet lainnya sebagai cadangan.</li>
              <li>Selama pemain melakukan pertandingan, tidak diperkenankan meninggalkan lapangan tanpa izin wasit yang bertugas, termasuk menukar raket dengan yang ada di pinggir lapangan.</li>
              <li>Pemain yang mendapat cedera di lapangan, apabila tidak dapat melanjutkan pertandingan maka dinyatakan kalah.</li>
              <li>Pemain atau tim yang tidak mengikuti Technical Meeting FIKTI SPACE 3.0 2024, dianggap menyetujui segala peraturan dan kebijakan yang telah ditentukan.</li>
            </ol>
          </div>
          <div className="pl-4">
            <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Sistem Pemberian Angka :</h1>
            <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
              <li>Sistem angka mempergunakan RALLY POINT the best of three games.</li>
              <li>Memenangkan satu pertandingan oleh regu tersebut apabila menang dengan dua set, dan apabila score seri (1-1) maka set penentuan adalah set ke-tiga.</li>
              <li>Pertandingan hanya berlangsung dalam 3 set dengan skor masing-masing adalah 21.</li>
              <li>Ketika telah dilakukan servis, maka harus ada poin setelahnya oleh salah satu tim.</li>
              <li>Tim yang menang pada saat rally mendapatkan poin pada score-nya.</li>
              <li>Jika kedua tim mendapatkan poin masing-masing 20 poin pada satu set, maka tim yang memimpin 2 poin selanjutnya adalah pemenang set.</li>
              <li>Jika kedua tim mendapatkan poin masing-masing 29 poin pada satu set, maka tim yang mendapatkan 30 poin selanjutnya adalah pemenang set.</li>
              <li>Tim yang memenangkan set mendapatkan giliran servis pertama pada set selanjutnya.</li>
            </ol>
          </div>
          <div className="pl-4">
            <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Jeda Waktu dan Pergantian Sisi :</h1>
            <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
              <li>Ketika poin telah mencapai 11 poin, pemain mendapatkan jeda waktu 60 detik dan pelatih boleh memberikan instruksi – instruksi kepada pemainnya, tetapi pemain tidak boleh meninggalkan lapangan.</li>
              <li>Jeda waktu yang diperbolehkan antar set adalah 2 menit.</li>
              <li>Pada set ketiga, kedua tim berganti sisi ketika mencapai 11 poin.</li>
            </ol>
          </div>
          <div className="pl-4">
            <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Pertandingan Ganda :</h1>
            <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
              <li>
                Seorang pemain dari pihak pemegang servis harus melakukan servis dari sisi lapangan sebelah kanan pada awal game atau bila pihak penerima servis belum memperoleh angka atau bila telah memperoleh angka genap pada game
                tersebut.
              </li>
              <li>Seorang pemain dari pihak pemegang servis harus melakukan servis dari sisi lapangan sebelah kiri bila pihak pemegang servis telah memperoleh angka ganjil pada game tersebut.</li>
              <li>Seorang pemain dari pihak penerima servis yang menerima servis terakhir harus berada di kotak servis, yang sama dengan kotak servis ketika menerima servis. Pola kebalikannya berlaku juga untuk pasangannya.</li>
              <li>Pemain dari pihak penerima servis yang berdiri secara diagonal berada di lapangan yang berseberangan dengan pemegang servis harus menjadi penerima servis.</li>
              <li>Para pemain dari pihak penerima servis tidak boleh berpindah dari lapangan servis mereka masing-masing sampai mereka memenangkan satu angka pada saat mereka melakukan servis.</li>
              <li>Bila pelaku servis menang dalam suatu rally, maka pemegang servis memperoleh satu angka. Selanjutnya, pemegang servis harus melakukan servis lagi dari sisi lapangan servis berikut.</li>
              <li>Bila penerima servis menang dalam suatu rally, maka penerima servis memperoleh satu angka. Penerima servis menjadi pelaku servis yang baru.</li>
              <li>Salah satu pemain dari pihak pemenang harus melakukan servis pertama pada game berikutnya, dan salah satu pemain dari pihak yang kalah dapat menerima servis.</li>
            </ol>
          </div>
          <div className="pl-4">
            <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Shuttlecock :</h1>
            <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
              <li>Shuttlecock yang digunakan disediakan dan diatur oleh Panitia Pelaksana.</li>
              <li>Kedua tim hanya dapat menukarkan kok jika sudah disetujui oleh wasit.</li>
            </ol>
          </div>
          <div>
            <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">B. Pelanggaran dan Pinalti</h1>
          </div>
          <div className="pl-4">
            <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg font-bold">Keterlambatan :</h1>
            <h1 className="text-black pl-8 font-Urbanist text-base md:text-lg">Panitia berhak mendiskualifikasi tim pada match tersebut (lawan secara otomatis mendapatkan kemenangan), jika : </h1>
            <ol className="text-black list-decimal pl-14 font-Urbanist text-sm md:text-base">
              <li>Kontak tim tidak dapat dihubungi sampai batas waktu keterlambatan, atau</li>
              <li>Tidak ada perwakilan tim sampai batas waktu keterlambatan.</li>
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
              <li>Apabila pemain tidak membawa raket atau raket berkendala saat pertandingan akan dikenakan biaya sewa sebesar 20.000,-. Dan raket akan dipinjamkan oleh panitia.</li>
            </ol>
          </div>
        </div>
      </div>
  );
}
