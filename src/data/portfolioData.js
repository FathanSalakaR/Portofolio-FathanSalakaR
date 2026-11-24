export const profile = {
  name: "Fathan Salaka R",
  title: "Informatics Engineering Student",
  university: "Universitas Lampung",
  universityShort: "UNILA",
  gpa: "3.90 / 4.00",
  start: "2024 - Present",
  background: "SMA Negeri 1 Bululawang",
  major: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
  phone: "085788803075",
  email: "fathansalakaramadian@gmail.com",
  github: "https://github.com/FathanSalakaR",
  linkedin: "https://www.linkedin.com/in/fathan-salaka-r-02458632a/",
  cvUrl: "/cv/CV_Fathan_Salaka_R.pdf",
  liveUrl: "https://portofolio-fathan-salaka-r.vercel.app",
  heroDescription:
    "Mahasiswa Teknik Informatika Universitas Lampung (IPK 3.90/4.00) yang memiliki ketertarikan mendalam pada pengembangan teknologi, khususnya Artificial Intelligence, Machine Learning, Data Mining, dan Internet of Things (IoT). Berpengalaman dalam pengembangan proyek teknologi, pengolahan data, perancangan antarmuka, serta aktif sebagai Asisten Laboratorium Teknik Digital dan organisasi kemahasiswaan.",
  aboutDescription:
    "Mahasiswa Teknik Informatika Universitas Lampung yang memiliki ketertarikan pada pengembangan teknologi, khususnya Artificial Intelligence, Machine Learning, Data Mining, dan Internet of Things (IoT). Memiliki pengalaman dalam pengembangan proyek berbasis teknologi, pengolahan data, serta perancangan antarmuka aplikasi. Aktif dalam organisasi kemahasiswaan dan memiliki pengalaman sebagai Asisten Laboratorium Teknik Digital yang mengembangkan kemampuan komunikasi, kerja sama tim, administrasi, serta pemecahan masalah. Memiliki motivasi untuk terus mengembangkan kompetensi teknis dan berkontribusi dalam pengembangan solusi teknologi yang inovatif.",
  interests: [
    "Software Development",
    "Web Development",
    "Artificial Intelligence",
    "Data Mining & Analytics",
    "UI/UX Design",
    "Database Management",
    "Internet of Things",
  ],
};

export const skillCategories = [
  "Programming",
  "Frontend",
  "Backend",
  "Network & IoT",
  "AI & Data",
  "Tools",
  "Design & Office",
];

export const skills = [
  // Programming Languages
  { name: "Java", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "PHP", category: "Programming" },

  // Frontend
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Ubuntu Server", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Laragon", category: "Backend" },
  { name: "XAMPP", category: "Backend" },

  // Network & IoT
  { name: "Arduino IDE", category: "Network & IoT" },
  { name: "Cisco Packet Tracer", category: "Network & IoT" },
  { name: "Wokwi", category: "Network & IoT" },
  { name: "Proteus", category: "Network & IoT" },
  { name: "Tinkercad", category: "Network & IoT" },

  // AI & Data
  { name: "Google Colab", category: "AI & Data" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Visual Studio Code", category: "Tools" },
  { name: "Docker Desktop", category: "Tools" },
  { name: "PowerDesigner", category: "Tools" },
  { name: "n8n", category: "Tools" },
  { name: "BlueJ", category: "Tools" },

  // Design & Office
  { name: "Figma", category: "Design & Office" },
  { name: "Canva", category: "Design & Office" },
  { name: "Draw.io", category: "Design & Office" },
  { name: "Microsoft Office", category: "Design & Office" },
  { name: "Google Workspace", category: "Design & Office" },
];

export const projects = [
  {
    slug: "diabetes-readmission",
    name: "Diabetes Readmission Prediction Using Machine Learning",
    description:
      "Penelitian dan implementasi Machine Learning terstruktur untuk memprediksi risiko pasien diabetes mengalami rawat inap ulang (readmitted) berdasarkan 101.766 data klinis rekam medis 130 rumah sakit.",
    category: "Data Mining / Machine Learning",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/FathanSalakaR/Machine-Learning",
    demo: null,
    thumbnail: "/images/projects/diabetic/11_perbandingan_performa_model.png",
    detail: {
      overview:
        "Proyek riset dan implementasi Machine Learning end-to-end untuk menganalisis dan memprediksi status rawat inap ulang (hospital readmission) pasien diabetes menggunakan dataset diabetic_data.csv (101.766 baris x 50 kolom) yang mencakup 10 tahun data klinis (1999–2008) dari 130 rumah sakit AS.",
      problem:
        "Dataset medis klinis memiliki kompleksitas tinggi dengan total missing values yang masif dalam format simbol '?' (pada kolom weight, medical_specialty, payer_code), ratusan kode diagnosis ICD-9 unik, serta ketidakseimbangan kelas (imbalance class) yang ekstrem pada target readmitted.",
      solution:
        "Membangun alur analisis terstruktur sesuai kode ML_Diabetes.py: Data Understanding -> Data Quality -> EDA -> Anomaly Detection -> Scikit-Learn Pipeline Preprocessing (ColumnTransformer dengan median imputer + StandardScaler untuk numerik, most-frequent imputer + OneHotEncoder min_frequency=10 untuk kategorikal) -> Pemodelan klasifikasi menggunakan Logistic Regression, Random Forest, dan Extra Trees.",
      features: [
        "Data Understanding & Quality: Pemeriksaan tipe data, deteksi missing values numerik, duplikat, dan kalkulasi total nilai '?'",
        "Exploratory Data Analysis: Visualisasi distribusi target readmitted, kelompok umur (age), gender, time in hospital, dan jumlah obat (num_medications)",
        "Bivariate Analysis: Hubungan time in hospital vs readmitted, distribusi kelompok umur vs readmitted, dan correlation heatmap variabel numerik",
        "Anomaly Detection: Identifikasi outlier time in hospital menggunakan metode Interquartile Range (IQR) dan deteksi nilai negatif",
        "Feature Engineering: Ekstraksi 3 karakter awal kode diagnosis medis (diag_1, diag_2, diag_3) untuk mengelompokkan kategori penyakit",
        "Feature Selection: Menghapus identifier (encounter_id, patient_nbr) dan kolom weight (missing ekstrem)",
        "Scikit-Learn Preprocessing Pipeline: ColumnTransformer dengan StandardScaler dan OneHotEncoder (handle_unknown='ignore', min_frequency=10)",
        "Multi-Model Comparison: Pelatihan dan perbandingan komparatif Logistic Regression (solver='saga'), Random Forest (200 estimators), dan Extra Trees (200 estimators)",
        "Evaluasi Komprehensif: Metrik Accuracy, Precision (Weighted & Macro), Recall (Weighted & Macro), F1-Score (Weighted & Macro), dan Confusion Matrix heatmap",
      ],
      stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      process: [
        "1. Data Understanding: Analisis struktur 101.766 baris data, 50 atribut, dan tipe data setiap kolom",
        "2. Data Quality Check: Identifikasi nilai '?' sebagai missing value, pemeriksaan duplikat, dan analisis sebaran kelas target",
        "3. Exploratory Data Analysis: Pembuatan 9 grafik distribusi, visualisasi korelasi numerik, dan analisis faktor lama rawat inap",
        "4. Anomaly Detection: Kalkulasi ambang IQR (Q1, Q3, batas atas/bawah) untuk lama rawat inap pasien",
        "5. Data Preprocessing: Penggantian '?' ke NaN, grouping 3 karakter kode diagnosis, dan eliminasi atribut non-fitur",
        "6. Stratified Split: Pembagian data 80:20 (train 81.412, test 20.354) dengan stratifikasi target",
        "7. Automated Pipeline: Pembuatan ColumnTransformer untuk imputasi numerik (median) dan kategorikal (most frequent + one-hot)",
        "8. Model Training: Pelatihan Logistic Regression, Random Forest Classifier, dan Extra Trees Classifier dengan class_weight='balanced'",
        "9. Model Evaluation & Comparison: Evaluasi matriks performa dan penyimpanan laporan otomatis laporan_eda_machine_learning.txt",
      ],
      challenges: [
        "Menangani representasi missing value berupa simbol '?' yang tidak langsung terbaca sebagai NaN oleh pustaka standar",
        "Tingginya kardinalitas nilai unik pada kolom kode diagnosis ICD-9 yang memerlukan reduksi dimensi berbasis substring",
        "Menjaga keseimbangan evaluasi model pada dataset target multi-kelas yang terdistribusi tidak seimbang dengan metrik F1-Macro",
      ],
      gallery: [
        "/images/projects/diabetic/11_perbandingan_performa_model.png",
        "/images/projects/diabetic/09_correlation_heatmap.png",
        "/images/projects/diabetic/01_distribusi_readmitted.png",
        "/images/projects/diabetic/08_age_vs_readmitted.png",
        "/images/projects/diabetic/07_boxplot_time_vs_readmitted.png",
        "/images/projects/diabetic/10_confusion_matrix_random_forest.png",
        "/images/projects/diabetic/10_confusion_matrix_extra_trees.png",
        "/images/projects/diabetic/10_confusion_matrix_logistic_regression.png",
        "/images/projects/diabetic/05_histogram_num_medications.png",
        "/images/projects/diabetic/06_boxplot_time_in_hospital.png",
      ],
      result:
        "Model Random Forest dan Extra Trees berhasil dilatih dengan pipeline otomatis, di mana F1 Macro digunakan sebagai acuan utama evaluasi multi-kelas tidak seimbang. Seluruh alur eksperimen terintegrasi menghasilkan visualisasi komparatif, confusion matrix, dan laporan ringkas terotomatisasi.",
    },
  },
  {
    slug: "nyc-airbnb-eda",
    name: "NYC Airbnb Open Data Exploratory Data Analysis EDA",
    description:
      "Penelitian Exploratory Data Analysis (EDA) mendalam terhadap 48.895 data listing Airbnb New York City untuk mengungkap pola sebaran wilayah, harga sewa, preferensi kamar, korelasi variabel, dan anomali pasar.",
    category: "Data Analytics / EDA",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/FathanSalakaR/NYC-Airbnb-Open-Data-Exploratory-Data-Analysis-EDA-",
    demo: null,
    thumbnail: "/images/projects/nyc-airbnb/03_bar_neighbourhood_group.png",
    detail: {
      overview:
        "Penelitian Exploratory Data Analysis (EDA) mendalam terhadap 48.895 baris data dan 16 atribut dataset New York City Airbnb Open Data (AB_NYC_2019) untuk mengungkap dinamika pasar sewa penginapan di 5 wilayah kota New York.",
      problem:
        "Dataset memiliki sebaran harga yang sangat menceng (right-skewed), terdapat nilai anomali seperti harga $0 dan minimum nights hingga ribuan malam, serta 20.141 missing values pada atribut review pengunjung.",
      solution:
        "Menerapkan metodologi 4 tahap EDA terstruktur sesuai kode eda_nyc_airbnb.py: Data Understanding -> Data Quality -> Exploratory Data Analysis (univariat, bivariat, korelasi) -> Anomaly Detection (IQR harga, IQR minimum nights, harga tidak wajar, anomali availability).",
      features: [
        "Data Understanding: Pemetaan 16 definisi variabel, tipe data, dan verifikasi 48.895 baris dataset",
        "Data Quality Inspection: Verifikasi missing values (last_review, reviews_per_month), duplikat data, dan konversi tipe datetime",
        "Pemeriksaan Nilai Invalid: Pengecekan harga negatif, minimum nights <= 0, validasi koordinat geografis lintang (40-41) & bujur (-75 s/d -73), dan availability 0-365",
        "Analisis Univariat: Histogram harga (limit kuantil 99%), histogram minimum nights, bar chart 5 neighbourhood group, dan bar chart 3 room type",
        "Analisis Bivariat & Multivariat: Scatter plot harga vs review, scatter plot harga vs minimum nights, dan heatmap korelasi 8 variabel numerik",
        "Anomaly Detection IQR: Kalkulasi Q1, Q3, IQR batas bawah/atas untuk mendeteksi outlier harga dan minimum nights ekstrem",
        "Pemeriksaan Harga Ekstrem: Identifikasi listing dengan harga $0 serta listing luxury dengan harga > $1.000 per malam",
        "Ekspor Statistik Deskriptif: Penyimpanan otomatis hasil kalkulasi statistik ke CSV dan grafik beresolusi 300 DPI",
      ],
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      process: [
        "1. Data Understanding: Load dataset AB_NYC_2019 - Asli.csv, cek dimensi (48.895 x 16), inspeksi head/tail, dan deskripsi variabel",
        "2. Data Quality Analysis: Deteksi missing value (name: 16, host_name: 21, last_review & reviews_per_month: 20.141 atau 41.2%), cek duplikat (0), dan konversi datetime",
        "3. Invalid Value Validation: Validasi rentang koordinat NYC, ketersediaan hari (0-365), dan nilai non-negatif",
        "4. Descriptive Statistics: Perhitungan mean, std, min, 25%, median, 75%, max untuk 8 variabel numerik",
        "5. Univariate Visualization: Pembuatan histogram harga dan minimum nights dengan batas persentil ke-99, serta bar chart wilayah dan jenis kamar",
        "6. Bivariate & Correlation: Scatter plot hubungan harga terhadap ulasan dan durasi sewa, serta correlation heatmap matriks numerik",
        "7. IQR Anomaly Detection: Perhitungan IQR harga ($106) dan IQR minimum nights (4) untuk mengisolasi ribuan data ekstrem",
        "8. Price Anomaly Inspection: Mengidentifikasi 11 listing dengan harga $0 dan listing luxury > $1.000 untuk analisis integritas data",
      ],
      challenges: [
        "Menjaga representasi visual grafik harga tetap informatif dengan membatasi rentang plotting pada kuantil 99% agar tidak terdistorsi nilai ekstrem",
        "Memvalidasi apakah listing harga > $1.000 merupakan anomali entri data atau properti mewah otentik di Manhattan",
        "Menangani 41,2% missing value pada ulasan tanpa mengurangi keaslian data sewa listing yang belum pernah menerima pemesanan",
      ],
      gallery: [
        "/images/projects/nyc-airbnb/03_bar_neighbourhood_group.png",
        "/images/projects/nyc-airbnb/09_correlation_heatmap.png",
        "/images/projects/nyc-airbnb/01_histogram_price.png",
        "/images/projects/nyc-airbnb/04_bar_room_type.png",
        "/images/projects/nyc-airbnb/05_boxplot_price.png",
        "/images/projects/nyc-airbnb/06_boxplot_minimum_nights.png",
        "/images/projects/nyc-airbnb/07_scatter_price_reviews.png",
        "/images/projects/nyc-airbnb/08_scatter_price_minimum_nights.png",
        "/images/projects/nyc-airbnb/02_histogram_minimum_nights.png",
      ],
      result:
        "Menemukan bahwa Manhattan mendominasi jumlah listing (21.661 unit) dan kamar 'Entire home/apt' paling populer (25.409 unit) dengan rata-rata harga $152,72/malam, serta menetapkan batas ambang outlier berbasis IQR yang presisi.",
    },
  },
  {
    slug: "laju",
    name: "UI/UX Laju",
    description:
      "Desain antarmuka dan pengalaman pengguna (UI/UX) aplikasi mobilitas transportasi perkotaan modern yang mengintegrasikan pemesanan motor, mobil, dan pengiriman barang (Send) secara efisien.",
    category: "UI/UX Design",
    tech: ["Figma", "UI/UX Design"],
    github: null,
    demo: "https://www.figma.com/design/YPsjUb1PfuGXXFFki0pJc8/Laju?t=IZ0XrK9I7Y9dENEC-1",
    thumbnail: "/images/projects/laju_thumb.png",
    detail: {
      overview:
        "Laju adalah rancangan desain UI/UX aplikasi mobile transportasi perkotaan yang dibuat di Figma untuk mempermudah masyarakat memesan transportasi motor, mobil, dan pengiriman barang dalam satu aplikasi yang cepat dan bersih.",
      problem:
        "Masyarakat perkotaan sering kesulitan mendapatkan layanan transportasi terpadu dengan navigasi yang ringkas, visual yang ramah pengguna, dan alur pemesanan yang jelas.",
      solution:
        "Merancang antarmuka mobile di Figma dengan fokus pada hierarki visual yang jelas, navigasi pemesanan motor/mobil, pengiriman barang (Send), dan tampilan pelacakan riwayat perjalanan.",
      features: [
        "Desain pemesanan layanan motor dan estimasi tarif",
        "Desain pemesanan layanan mobil untuk perjalanan keluarga/kelompok",
        "Desain pengiriman paket dan barang kecil (Send)",
        "Tampilan live tracking posisi pengemudi",
        "Riwayat pesanan dan detail transaksi perjalanan",
      ],
      stack: ["Figma", "UI/UX Design"],
      process: [
        "Eksplorasi kebutuhan pengguna untuk mobilitas harian",
        "Penyusunan alur pemesanan transportasi terpadu",
        "Perancangan visual high-fidelity di Figma",
        "Penyusunan prototype interaktif untuk simulasi navigasi",
      ],
      challenges: [
        "Menjaga tampilan tetap simpel meski menggabungkan 3 layanan (Motor, Mobil, Send)",
        "Membuat hierarki visual yang nyaman dipandang pada layar mobile",
      ],
      gallery: [
        "/images/projects/laju/landing_page.png",
        "/images/projects/laju/beranda_utama.png",
        "/images/projects/laju/ride.png",
        "/images/projects/laju/car.png",
        "/images/projects/laju/send.png",
        "/images/projects/laju/ride_(1).png",
        "/images/projects/laju/ride_(2).png",
      ],
      result:
        "Menghasilkan rancangan UI/UX aplikasi Laju di Figma yang bersih, modern, dan intuitif untuk kebutuhan mobilitas perkotaan.",
    },
  },
  {
    slug: "lumbung-id",
    name: "Project UI/UX Lumbung.id",
    description:
      "Desain antarmuka dan sistem UI/UX platform agritech mobile multi-peran yang menghubungkan rantai pasok pertanian antara Petani, Distributor, dan Konsumen.",
    category: "UI/UX Design",
    tech: ["Figma", "UI/UX Design"],
    github: null,
    demo: "https://www.figma.com/design/43GAomZ203y3h537A9bdfq/LUMBUNG.ID?nodeid=0-1&t=BKYUcCmcjnIiHO6v-1",
    thumbnail: "/images/projects/lumbung_thumb.png",
    detail: {
      overview:
        "Lumbung.id adalah desain UI/UX platform agritech mobile di Figma yang dirancang untuk mendukung ekosistem pertanian digital, menghubungkan petani dengan distributor dan konsumen secara transparan.",
      problem:
        "Rantai pasok pertanian konvensional memiliki banyak perantara yang membuat harga tidak stabil dan petani kesulitan memantau harga pasar serta logistik.",
      solution:
        "Merancang antarmuka aplikasi agritech multi-peran di Figma dengan modul khusus Petani (LumbungMart, LumbungStat, LumbungSend), Distributor, dan Konsumen.",
      features: [
        "Portal Petani: LumbungMart belanja sarana tani, grafik panen & harga, serta pengiriman",
        "Portal Distributor: Manajemen order penjemputan dan distribusi hasil tani",
        "Portal Konsumen: Belanja hasil panen segar langsung dari petani",
        "Desain alur dompet digital dan transaksi keuangan",
        "Desain forum komunitas dan edukasi pertanian",
      ],
      stack: ["Figma", "UI/UX Design"],
      process: [
        "Analisis peran pengguna: Petani, Distributor, dan Konsumen",
        "Perancangan alur interaksi dan tata letak di Figma",
        "Pembuatan komponen UI high-fidelity yang kontras dan mudah dibaca",
        "Prototyping alur navigasi antar portal",
      ],
      challenges: [
        "Menyediakan antarmuka yang sangat ramah pengguna bagi petani dengan teks kontras tinggi",
        "Mengelola alur 3 role pengguna dalam satu basis desain terpadu",
      ],
      gallery: [
        "/images/projects/lumbung/beranda_petani.png",
        "/images/projects/lumbung/lumbungmart.png",
        "/images/projects/lumbung/page_role_petani.png",
        "/images/projects/lumbung/page_role_distributor.png",
        "/images/projects/lumbung/page_role_konsumen.png",
        "/images/projects/lumbung/forum_1.png",
        "/images/projects/lumbung/main_menu.png",
      ],
      result:
        "Menghasilkan prototype desain UI/UX Lumbung.id di Figma yang mempermudah interaksi rantai pasok agrikultur secara modern.",
    },
  },
  {
    slug: "studymate",
    name: "StudyMate Mobile",
    description:
      "Desain UI/UX aplikasi collaborative learning mahasiswa untuk auto-matching rekan belajar, ruang diskusi akademik, dan penjadwalan terpadu.",
    category: "UI/UX Design",
    tech: ["Figma", "UI/UX Design"],
    github: null,
    demo: "https://www.figma.com/design/feQyi7fXSEdg8BVm8cUjwV/StudyMate?node-id=0-1&t=NxgWLjyd0qKXOYeW-1",
    thumbnail: "/images/projects/studymate_thumb.png",
    detail: {
      overview:
        "StudyMate merupakan rancangan UI/UX aplikasi mobile di Figma yang dirancang untuk membantu mahasiswa menemukan teman belajar sesuai prodi, minat, dan jadwal luang.",
      problem:
        "Mahasiswa sering kesulitan menemukan rekan belajar yang seirama dan mengoordinasikan jadwal pertemuan belajar kelompok secara teratur.",
      solution:
        "Merancang antarmuka aplikasi kolaborasi akademik di Figma dengan alur auto-matching, ruang obrolan diskusi, kalender belajar, dan catatan bersama.",
      features: [
        "Alur Auto-Matching Teman Belajar berdasarkan minat dan jadwal",
        "Desain Chat Room Diskusi akademik dan berbagi berkas",
        "Desain Kalender jadwal sesi belajar dan reminder",
        "Modul pencatatan ringkasan materi diskusi",
      ],
      stack: ["Figma", "UI/UX Design"],
      process: [
        "Identifikasi kebutuhan kolaborasi belajar mahasiswa",
        "Perancangan alur pengguna dan user journey di Figma",
        "Desain visual high-fidelity dengan gaya modern dan ramah",
        "Penyusunan prototype interaktif",
      ],
      challenges: [
        "Mendesain alur pencocokan yang ringkas dan mudah dipahami",
        "Menyatukan kalender dan catatan belajar dalam satu navigasi mobile yang rapi",
      ],
      gallery: [
        "/images/projects/studymate/iphone_16_-_1.png",
        "/images/projects/studymate/iphone_16_-_3.png",
        "/images/projects/studymate/iphone_16_-_5.png",
        "/images/projects/studymate/iphone_16_-_7.png",
        "/images/projects/studymate/iphone_16_-_10.png",
        "/images/projects/studymate/iphone_16_-_12.png",
        "/images/projects/studymate/iphone_16_-_15.png",
        "/images/projects/studymate/iphone_16_-_18.png",
      ],
      result:
        "Mewujudkan konsep desain UI/UX StudyMate di Figma yang memfasilitasi interaksi dan belajar bersama antar mahasiswa secara menyenangkan.",
    },
  },
  {
    slug: "os-quest",
    name: "OS-QUEST Interactive OS",
    description:
      "Platform pembelajaran dan evaluasi interaktif Sistem Operasi berbasis web dengan simulasi terminal Ubuntu Server dinamis, editor GNU Nano 6.2, dan gamifikasi quest 8 level bertingkat.",
    category: "Web Application / Simulation",
    tech: ["Ubuntu Server", "Web Terminal", "Linux Shell", "Bash Simulation"],
    github: "https://github.com/FathanSalakaR/Post-Test_PSO_Input-Output",
    demo: null,
    thumbnail: "/images/projects/osquest_thumb.png",
    detail: {
      overview:
        "OS-QUEST adalah platform edukasi berbasis web yang dirancang untuk mendukung kegiatan Praktikum dan Post-Test Sistem Operasi melalui simulasi nyata perintah Ubuntu Server dengan sistem quest.",
      problem:
        "Pembelajaran baris perintah (CLI) Sistem Operasi seringkali membosankan dan menyulitkan praktikan pemula karena kendala setup virtual machine lokal serta ketiadaan evaluasi pengerjaan secara langsung.",
      solution:
        "Mengembangkan platform web tergamifikasi dengan simulator terminal Linux interaktif yang mencakup prompt dinamis, error handling autentik, editor GNU Nano 6.2, proses/thread, redirection, pipeline, serta kurikulum 8 level quest.",
      features: [
        "Terminal Ubuntu Server Interaktif dengan prompt 'praktikan@ubuntu-server:~$' dan auto-complete Tab",
        "Simulasi Error Handling dan Exit Code Linux autentik (127 command not found, 1 No such file)",
        "Editor GNU Nano 6.2 Interaktif dengan shortcut Ctrl+O (save), Ctrl+X (exit), dan konfirmasi perubahan",
        "Simulasi Manajemen Proses dan Thread (ps -e -T, top, systemctl, pkill apache2)",
        "Dukungan Redirection (>, >>, 2>, <) dan Pipeline (|) dengan pengolahan teks (sort, grep, wc)",
        "Sistem Gamifikasi Quest 8 Level (5 soal unik per level, bobot 2 poin, progression lock)",
      ],
      stack: ["JavaScript", "HTML/CSS", "Ubuntu Server Simulation", "Bash", "Gamification Engine"],
      process: [
        "Analisis kebutuhan kurikulum praktikum Sistem Operasi Modul 2",
        "Perancangan emulator state mesin untuk shell Linux dan hierarki sistem berkas virtual",
        "Implementasi antarmuka teks GNU Nano dengan hotkey capture di browser",
        "Pembangunan modul eksekusi command, redirection output/input, dan chaining pipeline",
        "Pembuatan sistem manajemen soal, penilaian otomatis, dan progression unlock 8 level",
        "Uji coba menyeluruh pada skenario praktikum nyata mahasiswa",
      ],
      challenges: [
        "Mensimulasikan perilaku parsing redirection dan pipeline Linux secara akurat di JavaScript",
        "Menjaga konsistensi shortcut browser agar tidak bertabrakan dengan hotkey Nano (Ctrl+O, Ctrl+X)",
        "Mendesain state persistence antar soal di setiap level quest",
      ],
      gallery: [
        "/images/projects/osquest/screenshot_2026-11-20_143310.png",
        "/images/projects/osquest/screenshot_2026-11-20_143334.png",
        "/images/projects/osquest/screenshot_2026-11-20_143344.png",
        "/images/projects/osquest/screenshot_2026-11-20_143402.png",
        "/images/projects/osquest/screenshot_2026-11-20_143410.png",
      ],
      result:
        "OS-QUEST berhasil mentransformasi modul praktikum Sistem Operasi menjadi pengalaman belajar interaktif yang seru, terukur, dan mempermudah evaluasi pemahaman baris perintah Linux bagi mahasiswa.",
    },
  },
];

export const timeline = [
  {
    id: "smp-5-oku",
    icon: "graduation",
    period: "2017 - 2020",
    title: "Pendidikan Sekolah Menengah Pertama",
    org: "SMP Negeri 5 Ogan Komering Ulu · IPK 89.90 / 100",
    description:
      "Menyelesaikan pendidikan dasar menengah pertama di Kabupaten Ogan Komering Ulu, Sumatera Selatan dengan prestasi akademik kelulusan IPK 89.90 / 100.",
    skills: ["Dasar Sains", "Matematika Dasar", "Kepemimpinan"],
  },
  {
    id: "sma-bululawang",
    icon: "graduation",
    period: "2020 - 2023",
    title: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    org: "SMA Negeri 1 Bululawang · IPK 86.98 / 100",
    description:
      "Mempelajari dasar-dasar sains analitis, matematika kalkulus, statistika, fisika, dan algoritma dasar yang melandasi logika pemrograman serta problem solving.",
    skills: ["Matematika", "Fisika", "Logika & Analisis", "Problem Solving", "Dasar Algoritma"],
  },
  {
    id: "himatro-soswir",
    icon: "users",
    period: "2024 - 2025",
    title: "Sekretaris Departemen Sosial dan Kewirausahaan",
    org: "Himpunan Mahasiswa Teknik Elektro (HIMATRO) UNILA",
    description:
      "Mengelola administrasi dan dokumentasi 7 program kerja departemen (4 proker sosial kemasyarakatan dan 3 proker kewirausahaan) serta mengelola pendataan keaktifan 118 anggota departemen.",
    skills: ["Administrasi Program Kerja", "Manajemen Anggota", "Kewirausahaan", "Teamwork"],
  },
  {
    id: "unila-ti",
    icon: "university",
    period: "2024 - Sekarang",
    title: "Sarjana Teknik Informatika (S1)",
    org: "Universitas Lampung (UNILA) · IPK 3.90 / 4.00",
    description:
      "Mahasiswa S1 Teknik Informatika berfokus pada Artificial Intelligence, Machine Learning, Data Mining, Database Systems, dan Internet of Things (IoT). Meraih IPK 3.90 / 4.00 dengan rekam jejak akademik dan proyek teknologi yang aktif.",
    skills: ["Artificial Intelligence", "Machine Learning", "Data Mining", "IoT", "Python", "Database Systems"],
  },
  {
    id: "aslab-tekdig",
    icon: "briefcase",
    period: "2025 - Sekarang",
    title: "Asisten Laboratorium Teknik Digital",
    org: "Laboratorium Teknik Digital, Jurusan Teknik Elektro UNILA",
    description:
      "Mendampingi dan membimbing mahasiswa dalam pelaksanaan praktikum Sistem Operasi dan Teknik Digital guna membantu pemahaman konsep serta penerapan materi secara langsung. Memastikan kesiapan perangkat Proteus dan Linux Ubuntu Server, serta mengevaluasi hasil praktikum mahasiswa.",
    skills: ["Ubuntu Server", "Proteus", "Sistem Operasi", "Teknik Digital", "Mentoring", "Lab Management"],
  },
  {
    id: "himatro-sekum",
    icon: "award",
    period: "2026 - Sekarang",
    title: "Sekretaris Umum",
    org: "Himpunan Mahasiswa Teknik Elektro (HIMATRO) UNILA",
    description:
      "Mengelola administrasi dan dokumentasi 32 program kerja organisasi, meliputi surat masuk/keluar, SK, MoU, dan LPJ. Mengoordinasikan kesekretariatan 5 departemen dan 9 divisi, menjalin sinergi dengan 5 sekretaris departemen, serta menyusun Standar Operasional Prosedur (SOP) organisasi.",
    skills: ["Kepemimpinan", "Manajemen Organisasi", "Tata Kelola SOP", "Koordinasi Tim", "Administrasi"],
  },
];

export const certificates = [
  {
    id: "fcs-2024",
    name: "Future Champion Scholarship 2024",
    institution: "Paragon Corp × NAMA Foundation",
    faculty: "Fakultas Teknik, Universitas Lampung",
    year: "2024",
    date: "17 Sep 2024",
    description:
      "Diterima sebagai salah satu penerima bergengsi Future Champion Scholarship Program 2024 yang diselenggarakan oleh Paragon Corp dan NAMA Foundation. Seleksi mencakup tahapan administrasi & CV screening, submisi esai terkait pilar CSR Paragon, online test, dan online interview. Program ini bertujuan mendukung mahasiswa berprestasi untuk berkontribusi dalam ekosistem edukasi dan pengembangan masyarakat Indonesia.",
    skills: [
      "Scholarship Recipient",
      "Essay Writing",
      "CSR Awareness",
      "Leadership",
      "Academic Excellence",
    ],
    image: "/images/certificates/fcs_2024_surat.png",
    pdf: "/images/certificates/fcs_2024_fathan.pdf",
  },
  {
    id: "ccna-intro-networks",
    name: "CCNA: Introduction to Networks",
    institution: "Cisco Networking Academy",
    faculty: "Department of Informatics, Faculty of Engineering-University of Lampung",
    instructor: "Gigih Forda Nama",
    year: "2026",
    date: "02 Jul 2026",
    certId: "f4d99a57-fa5a-42de-9844-dca7afa7877b",
    description:
      "Sertifikasi resmi penyelesaian kurikulum CCNA: Introduction to Networks yang diselenggarakan oleh Jurusan Teknik Informatika, Fakultas Teknik Universitas Lampung melalui program Cisco Networking Academy. Memvalidasi pemahaman arsitektur jaringan, protokol komunikasi data, model OSI & TCP/IP, pengalamatan IPv4 & IPv6, subnetting VLSM, serta switching dasar menggunakan Cisco Packet Tracer.",
    skills: [
      "Computer Networking",
      "Cisco Packet Tracer",
      "IPv4 & IPv6 Addressing",
      "Subnetting & VLSM",
      "OSI & TCP/IP Model",
      "Ethernet Switching",
      "Network Protocols"
    ],
    image: "/images/certificates/ccna_fathan_salaka.png",
    pdf: "/images/certificates/ccna_fathan_salaka.pdf",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#journey" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
