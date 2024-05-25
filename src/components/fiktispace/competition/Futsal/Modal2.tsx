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
          <li>Jumlah pemain dalam suatu pertandingan adalah 5 pemain inti (1 kiper dan 4 pemain) dengan maksimal 5 pemain cadangan, sehingga total 10 pemain.</li>
          <li>Satu tim terdiri dari satu kelas yang sama.</li>
          <li>Tim dilarang untuk mengganti Pemain yang sudah terdaftar termasuk Pemain cadangan selama acara berlangsung atau sudah dimulai</li>
          <li>Ketua tim akan di undang ke grup WA yang sudah di sediakan oleh panitia.</li>
        </ol>
      </div>
      <div>
        <h1 className="text-black font-bold">Peralatan:</h1>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>Setiap tim diharapkan mempersiapkan kostum yang akan dipakai selama kompetisi berlangsung. Jika terdapat kesulitan, panitia akan menyiapkan 1 set rompi yang bisa dipinjam.</li>
          <li>Seluruh pemain diwajibkan menggunakan sepatu futsal.</li>
          <li>Setiap pemain wajib menggunakan deker (bukan deker dari kardus) dan kaos kaki panjang (selutut).</li>
          <li>Bola yang akan digunakan adalah bola futsal.</li>
        </ol>
      </div>
    </div>
  );
}
