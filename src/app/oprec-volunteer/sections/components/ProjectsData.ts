type Division = {
    name: string;
    description: string;
  };
  
type Project = {
    title: string;
    subtitle: string;
    description: string;
    shortDescription: string
    divisions: Division[];
    logo: string;
  };
  

const projects: Project[] = [
    {
      title: "HEROES XI",
      subtitle: "",
      logo: "/oprec-volunteer/logo-heroes-xi.png",
      description:
        "HEROES XI (Hero of Education and Social) adalah sebuah kegiatan bakti sosial yang diselenggarakan oleh mahasiswa/i Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI) Universitas Gunadarma (UG). Kegiatan ini bertujuan untuk memberikan kontribusi positif kepada masyarakat di wilayah yang menghadapi berbagai permasalahan sosial atau tantangan dalam kehidupan sehari-hari.",
      shortDescription: "Bakti sosial mahasiswa FIKTI UG yang berkontribusi membantu masyarakat menghadapi tantangan sosial.",
      divisions: [
        { name: "Divisi Acara", description: "Divisi yang bertugas mengurus rangkaian acara. Divisi ini harus memastikan acara berjalan sesuai dengan konsep yang ditentukan." },
        { name: "Divisi Dana Usaha", description: "Divisi yang bertanggung jawab dalam mencari dana dan mengelola dana yang akan digunakan untuk acara." },
        { name: "Divisi Sponsorship", description: "Divisi yang membuat dan memahami kesepakatan dengan pihak kedua, serta menguasai seluruh bagian di dalam proposal sponsorship." },
        { name: "Divisi Humas", description: "Divisi yang menjadi fasilitator dan membangun komunikasi yang aktif dengan pihak internal maupun eksternal." },
        { name: "Divisi Media", description: "Divisi yang membidangi bagian informasi visual dan dokumentasi selama acara berlangsung." },
        { name: "Divisi Perlengkapan", description: "Divisi yang bertanggung jawab dalam pengelolaan/pembelian perlengkapan yang akan dibutuhkan ketika acara berlangsung." },
      ],
    },
    {
      title: "TechnoFair 12.0",
      subtitle: "",
      logo: "/oprec-volunteer/tf-11.png",
      description:
        "TechnoFair adalah program kerja unggulan dari Departemen Akademik BEM FIKTI yang merupakan event IT yang dilaksanakan setiap tahun. Acara ini bertujuan untuk mewadahi mahasiswa FIKTI Universitas Gunadarma dalam menyalurkan minat dan bakat mereka di bidang akademik, khususnya di dunia teknologi dan informatika. TechnoFair juga berfungsi sebagai ajang untuk mengembangkan pengetahuan, keterampilan, serta kreativitas di bidang teknologi melalui berbagai kegiatan yang bermanfaat.",
      shortDescription: "Event IT tahunan dari BEM FIKTI UG yang mendukung pengembangan skill dan kreativitas di bidang teknologi.",
        divisions: [
        { name: "Divisi Acara", description: "Merencanakan, mengelola, dan melaksanakan kegiatan kompetisi, workshop, dan seminar." },
        { name: "Divisi Dana Usaha", description: "Merancang dan menjalankan kegiatan penggalangan dana yang kreatif untuk mendukung kebutuhan finansial acara." },
        { name: "Divisi Humas", description: "Penghubung komunikasi antara panitia, peserta, sponsor, dan media dengan memastikan publikasi acara tersampaikan dengan baik." },
        { name: "Divisi Media", description: "Membuat desain, konten, dan dokumentasi acara agar terlihat menarik dan profesional." },
        { name: "Divisi Perlengkapan", description: "Memastikan semua kebutuhan alat dan perlengkapan acara tersedia dan dalam kondisi baik." },
        { name: "Divisi Kemitraan", description: "Menjalin hubungan kerja sama dengan sponsor dan mitra untuk mendukung keberhasilan acara." },
      ],
    },
    {
      title: " FIKTI Space 4.0",
      subtitle: "",
      logo: "/oprec-volunteer/FINAL LOGO FS-03.png",
      description:
        "FIKTI SPACE (FIKTI Sport & Art Championship) adalah sebuah rangkaian acara yang menggabungkan dua program kerja sebelumnya dari BEM FIKTI Universitas Gunadarma, yaitu FAF (FIKTI Art Festival) dan FOSC (FIKTI Open Sport Championship). Acara ini bertujuan untuk menyatukan kompetisi olahraga dan seni budaya dalam satu event dan dirancang untuk memberikan kesempatan kepada mahasiswa FIKTI menyalurkan bakat dan minat mereka dalam bidang olahraga dan seni, serta untuk memperkuat rasa sportivitas dan kreativitas di kalangan mahasiswa.",
      shortDescription: "Ajang kompetisi olahraga dan seni bagi mahasiswa FIKTI UG untuk menyalurkan bakat dan sportivitas.",
        divisions: [
        { name: "Divisi Acara", description: "Mengatur seluruh jalannya pertandingan dari awal hingga akhir." },
        { name: "Divisi Perlengkapan", description: "Menyediakan dan mengelola seluruh kebutuhan alat & fasilitas acara." },
        { name: "Divisi Danus", description: "Membantu dalam pencarian dana acara untuk kelancaran kegiatan." },
        { name: "Divisi Sponsorship", description: "Menjadi penghubung antara acara dan calon perusahaan untuk mendukung kegiatan." },
        { name: "Divisi Media", description: "Membuat konten menarik selama kegiatan berlangsung, baik online maupun offline." },
        { name: "Divisi Keamanan", description: "Menjaga keamanan dan kenyamanan selama acara berlangsung." },
        { name: "Divisi Kesehatan", description: "Bertanggung jawab atas kesehatan dan keselamatan peserta dan panitia." },
        { name: "Divisi Konsumsi", description: "Mengatur konsumsi untuk panitia dan peserta." },
        { name: "Divisi Humas", description: "Membangun citra positif acara melalui komunikasi yang efektif." },
      ],
    },
    {
      title: "Gelar Budaya",
      subtitle: "",
      logo: "/gelar-budaya/logo-gelar-budaya.jpg",
      description:
        "Gelar Budaya adalah program kerja unggulan dari Departemen Olahraga dan Seni Budaya yang diselenggarakan dengan tujuan untuk memberikan ruang bagi mahasiswa Universitas Gunadarma, khususnya di FIKTI, untuk berekspresi dalam bidang seni. Acara ini tidak hanya bertujuan untuk menampilkan berbagai karya seni mahasiswa, tetapi juga menjadi sarana untuk mempererat hubungan antar mahasiswa dengan saling mengenal satu sama lain.",
      shortDescription: "Event seni BEM FIKTI UG yang memberi ruang bagi mahasiswa untuk berekspresi dan menampilkan karya.",
        divisions: [
        { name: "Divisi Acara", description: "Mengatur tema, ticketing, rundown, dan barang yang dibutuhkan untuk acara." },
        { name: "Divisi Perlengkapan", description: "Menyediakan perlengkapan dan mendekorasi tempat acara." },
        { name: "Divisi Keamanan", description: "Melakukan pengamanan dan menjaga agar tetap kondusif selama acara." },
        { name: "Divisi Dana Usaha", description: "Mencari dana untuk berlangsungnya acara dan merekap dana yang terkumpul." },
        { name: "Divisi Humas", description: "Membuat konten promosi acara dan memegang kendali atas sosial media." },
        { name: "Divisi Media", description: "Mendesain baju, banner, logo, ID card, dan template story Instagram." },
        { name: "Divisi Sponsor", description: "Menghubungi pihak sponsor dan membuat proposal." },
        { name: "Divisi Konsumsi", description: "Menyediakan konsumsi untuk panitia dan penampil acara." },
      ],
    },
  ];
  
export default projects