import React from "react";

export default function Modal2() {
  return (
    <div className="modal-box bg-white font-Urbanist space-y-3">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute text-black right-2 top-2">✕</button>
      </form>
      <h1 className="text-black text-center text-2xl">Syarat dan ketentuan peserta full</h1>
      <div>
        <h1 className="text-black font-bold">Peserta:</h1>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>Mahasiswa FIKTI Universitas Gunadarma aktif (Tingkat 1 - 4)</li>
          <li>Daftar pemain harus diterima oleh panitia pertandingan 30 menit sebelum pertandingan.</li>
          <li>Wajib membawa KRS asli ketika bertanding.</li>
          <li>Tindakan pendaftaran untuk turnamen ini berarti telah menyetujui semua persyaratan, aturan dan regulasi yang dinyatakan, secara keseluruhan.</li>
          <li>Pemain wajib hadir di jadwal tanding yang sudah ditentukan (bila melewati batas tunggu 10 menit, tim akan di diskualifikasi).</li>
          <li>Semua peserta wajib menjunjung nilai sportifitas dan fairplay.</li>
          <li>Penggunaan nama pemain atau tim yang mengandung unsur SARA & seksualitas akan berakibat tim di diskualifikasi oleh pihak panitia.</li>
        </ol>
      </div>
      <div>
        <h1 className="text-black font-bold">Tim:</h1>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>Satu team terdiri dari 6 orang (3 orang pemain inti, 2 orang cadangan dan 1 official).</li>
          <li>Satu team boleh berisi dari 2 kelas yang berbeda, dengan komposisi 3 orang berada di kelas yang sama dan 2 orang berada di kelas yang berbeda.</li>
          <li>Satu team tidak boleh berisi lebih dari 1 orang yang berasal dari UKM Basket Gunadarma ataupun MIKAT FIKTI.</li>
          <li>Tim dilarang untuk mengganti Pemain yang sudah terdaftar termasuk Pemain cadangan selama acara berlangsung atau sudah dimulai.</li>
          <li>Ketua tim akan di undang ke grup WA yang sudah di sediakan oleh panitia.</li>
        </ol>
      </div>
      <div>
        <h1 className="text-black font-bold">Peralatan:</h1>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>Setiap Tim diharapkan mempersiapkan 2 kostum yang akan dipakai selama kompetisi berlangsung (gelap dan terang).</li>
          <li>Setiap Tim diperbolehkan menggunakan kaos tidak berkerah untuk digunakan sebagai kostum saat pertandingan berlangsung.</li>
          <li>Setiap tim wajib memakai kostum basket yang berlawanan warna dengan lawan.</li>
          <li>Setiap tim wajib menggunakan baju dan celana basket dengan warna seragam satu tim, Panitia berhak melarang pemain yang melanggar untuk bertanding.</li>
          <li>
            Untuk penggunaan seluruh aksesoris seperti Arm Sleeve, Leg Sleeve, Deker Knee, Deker Ankle, Celana Dalaman, Baju Dalaman, Headband, Handband, Wristband dan yang lainnya WAJIB berwarna HITAM atau PUTIH saja. Penggunaan aksesoris
            ini WAJIB seragam dan sewarna dengan rekan se-tim-nya.
          </li>
          <li>Kaus kaki pemain hanya diperbolehkan warna terang atau gelap. Seluruh pemain harus menggunakan kaus kaki yang seragam (sama).</li>
          <li>Seluruh pemain diwajibkan menggunakan sepatu, diharapkan sepatu Basket.</li>
          <li>Bola yang akan digunakan adalah bola Basket ukuran 7.</li>
        </ol>
      </div>
    </div>
  );
}
