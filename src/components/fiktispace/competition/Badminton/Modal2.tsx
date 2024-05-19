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
          <li>Satu tim terdiri dari dua orang.</li>
          <li>Satu team boleh berisi dari 2 kelas yang berbeda.</li>
          <li>Satu team tidak boleh berisi lebih dari 1 orang yang berasal dari UKM Badminton Gunadarma ataupun Organisasi Badminton dalam Kampus.</li>
          <li>Tim dilarang untuk mengganti Pemain yang sudah terdaftar termasuk Pemain cadangan selama acara berlangsung atau sudah dimulai.</li>
          <li>Ketua tim akan di undang ke grup WA yang sudah di sediakan oleh panitia.</li>
        </ol>
      </div>
      <div>
        <h1 className="text-black font-bold">Peralatan:</h1>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>Pemain diwajibkan memakai sepatu olahraga (kets).</li>
          <li>Setiap pemain diwajibkan memakai kaos dan celana olahraga.</li>
          <li>Setiap pemain wajib membawa raketnya, beserta cadangan raketnya, jikalau raket rusak bukan merupakan tanggung jawab Panitia Penyelenggara.</li>
        </ol>
      </div>
    </div>
  );
}
