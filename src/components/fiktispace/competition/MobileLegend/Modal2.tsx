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
          <li>Daftar pemain harus berisi nama lengkap, username, dan ID Account dari akun mobile legend yang akan dimainkan pada pertandingan.</li>
          <li>Daftar pemain harus diterima oleh Panitia Pertandingan 30 menit sebelum pertandingan.</li>
          <li>Wajib memberikan KRS asli kepada panitia, maksimal 30 menit sebelum pertandingan.</li>
        </ol>
      </div>
      <div>
        <h1 className="text-black font-bold">Tim:</h1>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>Sebuah tim diperbolehkan terdiri dari mahasiswa yang berasal dari kelas yang berbeda tetapi satu angkatan yang sama.</li>
          <li>Jumlah pemain dalam satu pertandingan adalah 5 pemain inti dengan maksimal 2 pemain cadangan. Sehingga total 7 pemain.</li>
          <li>Tim dilarang untuk mengganti Pemain yang sudah terdaftar termasuk Pemain Cadangan selama acara berlangsung atau sudah dimulai.</li>
          <li>Ketua tim akan di undang ke grup WA yang sudah di sediakan oleh panitia.</li>
        </ol>
      </div>
      <div>
        <h1 className="text-black font-bold">Peralatan:</h1>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>2 Device (1 untuk bermain dan 1 untuk oncam saat pertandingan).</li>
        </ol>
      </div>
    </div>
  );
}
