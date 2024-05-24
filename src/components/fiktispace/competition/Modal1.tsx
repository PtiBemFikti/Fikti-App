import React from "react";

export default function Modal1() {
  return (
    <div className="modal-box bg-white font-Urbanist">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute text-black right-2 top-2">✕</button>
      </form>
      <h1 className="text-black text-center text-2xl">Peraturan dan Ketentuan Umum</h1>
      <div>
        <ol className="text-black list-decimal pl-10 font-Urbanist text-sm md:text-base">
          <li>Peserta merupakan mahasiswa aktif FIKTI Universitas Gunadarma.</li>
          <li>Wajib memiliki KRS/blanko pembayaran Universitas Gunadarma.</li>
          <li>Peserta yang dapat bermain hanyalah peserta yang terdaftar dalam pendaftaran.</li>
          <li>Seluruh informasi, peraturan, dan kebijakan yang sudah diberikan pada proses pendaftaran wajib dipahami dan dipatuhi oleh seluruh peserta.</li>
          <li>Dilarang membawa rokok / vape / pod / alat sejenisnya. Jika benda-benda tersebut ditemukan, maka akan disita oleh pihak panitia dan akan dikembalikan setelah pertandingan selesai.</li>
          <li>
            Dilarang merokok, vape, atau kegiatan lainnya yang menimbulkan asap di area pertandingan. Apabila masih melakukan hal tersebut, teguran akan diberikan maksimal dua (2) kali. Lebih dari itu, akan dikenakan denda hingga diusir
            dari area pertandingan.
          </li>
          <li>Dilarang menyentuh,bersandar, dan memasuki area pertandingan lewat jaring yang berada di dalam lapangan (kecuali panitia dalam keadaan tertentu).</li>
          <li>Dilarang membuang sampah sembarangan.</li>
          <li>Dilarang membawa makanan & minuman dari luar yang bersifat kemasan (dianjurkan untuk membawa tempat minum dan makan sendiri).</li>
          <li>Penonton atau suporter dan pemain dilarang membuat kerusuhan</li>
          <li>Dilarang membawa senjata atau benda tajam lainnya.</li>
          <li>Dilarang mencorat-coret maupun merusak fasilitas yang ada di area pertandingan.</li>
          <li>Dilarang membawa hewan peliharaan.</li>
          <li>Dilarang menghina, berkata kotor, maupun melakukan tindak provokasi terhadap lawan, suporter lawan, wasit, serta panitia pertandingan.</li>
          <li>Dilarang melakukan kontak fisik yang menimbulkan kekerasan hingga kericuhan di area pertandingan, baik di saat pertandingan berlangsung atau di luar pertandingan baik bagi pemain maupun penonton.</li>
          <li>Penonton atau suporter dilarang memasuki area pertandingan saat pertandingan berlangsung.</li>
          <li>Dilarang melempar benda atau apapun ke arah kelompok suporter lain maupun ke arah lapangan pertandingan.</li>
          <li>
            Dilarang membawa terompet, flare, bahan peledak, minuman keras, narkoba, alkohol, tongkat, senjata api, pisau serta senjata tajam dan benda berbahaya lainnya. Jika benda-benda tersebut ditemukan, maka akan disita oleh pihak
            panitia dan tidak akan dikembalikan.
          </li>
          <li>Panitia berhak memberikan sanksi atau pun mengusir bagi pelanggar.</li>
          <li>Keputusan wasit tidak dapat diganggu gugat.</li>
          <li>Semua keputusan panitia tidak dapat diganggu gugat.</li>
          <li>Dengan mendaftar, maka seluruh peserta dianggap telah menyetujui semua peraturan dan kebijakan yang berlaku yang telah dibuat oleh Panitia FIKTI SPACE 3.0 2024.</li>
        </ol>
      </div>
    </div>
  );
}
