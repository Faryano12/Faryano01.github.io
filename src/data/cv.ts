export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    contact: Contact;
    work: Work[];
    education: Education[];
    skills: string[];
}

export interface Contact {
    email: string,
    tel: string,
    social: Social[];
}

export interface Social {
    name: string;
    url: string;
}

export interface Work {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
    achievements?: string[];
    badges?: string[];
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string | null;
}

export const CV_DATA: CV = {
    name: "Artemas Faryano Mandowen",
    title: "Mahasiswa",
    location: "jayapura, indonesia",
    locationLink: "https://maps.app.goo.gl/PPdpGNBnjnVZMQVB6",
    about: "Saya adalah seseorang yang masih belajar, berkembang, dan mencari arah hidup. Saya memiliki banyak harapan dan cita-cita, ingin membahagiakan keluarga, serta menjadi pribadi yang lebih baik. Saya percaya setiap proses, pengalaman, dan tantangan adalah bagian dari perjalanan untuk mencapai masa depan yang saya inginkan.",
    summary: ` Saya adalah seorang mahasiswa yang sedang menempuh pendidikan di bidang teknologi informasi. Saya memiliki minat yang besar dalam pengembangan perangkat lunak dan selalu berusaha untuk meningkatkan keterampilan saya dalam pemrograman, analisis data, dan pengembangan aplikasi. Saya percaya bahwa pembelajaran adalah proses yang berkelanjutan, dan saya selalu terbuka untuk tantangan baru yang dapat memperluas pengetahuan dan pengalaman saya di dunia teknologi.`,
    personalWebsiteUrl: "https://dzhuk.com",
    contact: {
        email: "fanomandowen@gmail.com",
        tel: "082199823658",
        social: [
            {name: "GitHub", url: "https://github.com/zhukdi"},
            {name: "LinkedIn", url: "https://linkedin.com/in/zhukdi"},
        ],
    },
    work: [
        {
            company: "PT Papua Digital Kreatif",
            link: "https://papuadigital.com/",
            title: "Digital Marketing Intern",
            start: "January 2025",
            end: "Desember 2025",
            description: "Membantu pengelolaan media sosial, pembuatan konten digital, dan promosi produk secara online.",
            achievements: [
                "Meningkatkan kreativitas dalam membuat konten serta memahami strategi pemasaran digital."
            ],
            badges: ["Digital marketing", "kreativitas", "komunikasi"],
        },
        {
            company: "PT Nusantara Travel Indonesia",
            link: "https://nusantaratravel.com/",
            title: "tourism and travel",
            start: "januari 2026",
            end: "juni 2026",
            description: "Membantu mengembangkan promosi wisata, menyusun informasi destinasi, dan memperkenalkan potensi wisata Indonesia.",
            achievements: [
                "Berhasil menyusun materi promosi destinasi wisata yang menarik dan informatif."
            ],
            badges: ["Turis", "Travel", "Promosi"],
        },
        {
            company: "PT Data Solusi",
            link: "https://indonesiadatasolutions.com/",
            title: "Data Analyst Intern",
            start: "juli 2026",
            end: "agustus 2026",
            description: "Membantu menganalisis data bisnis, membuat laporan, dan memberikan wawasan yang berguna untuk pengambilan keputusan perusahaan.",
            achievements: [
                "Berhasil menyusun laporan analisis data yang membantu perusahaan dalam pengambilan keputusan strategis."
            ],
            badges: ["Data analysis", "SQL", "Excel"],
        },
        {
            company: "PT Papua Komunikasi Development",
            link: "https://papuakomunikasi.com/",
            title: "Software Engineer",
            start: "september 2026",
            end: "desember 2026 ",
            description: "Membantu mengembangkan aplikasi perangkat lunak, melakukan pengujian, dan memperbaiki bug untuk meningkatkan kualitas produk.",
            achievements: [
                "Berhasil mengembangkan fitur baru dalam aplikasi yang meningkatkan pengalaman pengguna."
            ],
            badges: ["Software development", "Java", "Python"],
        }
    ],
    education: [
        {
            school: "SMA Negeri 1 Biak Numfor",
            degree: "Sekolah Menengah Atas",
            start: "2023",
            end: "2026",
        },
    ],
    skills: ["saya jago bermain bola"]
        
};