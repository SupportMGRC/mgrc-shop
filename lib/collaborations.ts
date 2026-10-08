// Collaborators shown on the homepage ("Our collaborators").
// Logos are official files (organisations' own websites / Wikipedia, or supplied by Genomics), trimmed.
// w/h = display size in px, balanced so wide and round logos look about the same weight.
// To add one: put the file in public/images/collaborations/ and add a line below.

export type Collaborator = { name: string; src: string; w: number; h: number };

export const collaborators: Collaborator[] = [
  { name: "Dr Chong Clinic", src: "/images/collaborations/drchong.svg", w: 128, h: 31 },
  { name: "MAHSA Group", src: "/images/collaborations/mahsa.png", w: 127, h: 41 },
  { name: "Kensana", src: "/images/collaborations/kensana.png", w: 128, h: 39 },
  { name: "Sime Darby", src: "/images/collaborations/sime-darby.png", w: 63, h: 60 },
  { name: "MARDI", src: "/images/collaborations/mardi.svg", w: 60, h: 60 },
  { name: "Lembaga Koko Malaysia", src: "/images/collaborations/koko.png", w: 60, h: 60 },
  { name: "Universiti Putra Malaysia", src: "/images/collaborations/upm.png", w: 106, h: 49 },
  { name: "Cardiac Vascular Sentral Kuala Lumpur", src: "/images/collaborations/cvs.png", w: 91, h: 57 },
  { name: "Universiti Malaya", src: "/images/collaborations/um.png", w: 128, h: 40 },
  { name: "Universiti Teknologi MARA", src: "/images/collaborations/uitm.svg", w: 110, h: 47 },
  { name: "Universiti Malaysia Sarawak", src: "/images/collaborations/unimas.png", w: 60, h: 60 },
  { name: "Universiti Sains Islam Malaysia", src: "/images/collaborations/usim.png", w: 103, h: 50 },
  { name: "Harvard Medical School", src: "/images/collaborations/harvard.svg", w: 128, h: 33 },
  { name: "CHOC Children's", src: "/images/collaborations/choc.svg", w: 128, h: 16 },
  { name: "Washington University School of Medicine in St. Louis", src: "/images/collaborations/washu.png", w: 90, h: 58 },
  { name: "The Beatson Institute for Cancer Research", src: "/images/collaborations/beatson.png", w: 112, h: 46 },
  { name: "Novartis", src: "/images/collaborations/novartis.svg", w: 128, h: 19 },
  { name: "Salus Holdings", src: "/images/collaborations/salus.png", w: 103, h: 50 },
  { name: "Innoquest", src: "/images/collaborations/innoquest.png", w: 128, h: 40 },
  { name: "SIRIM", src: "/images/collaborations/sirim.png", w: 48, h: 60 },
  { name: "FGV", src: "/images/collaborations/fgv.svg", w: 76, h: 60 },
  { name: "Universiti Kebangsaan Malaysia", src: "/images/collaborations/ukm.png", w: 106, h: 49 },
  { name: "Universiti Sains Malaysia", src: "/images/collaborations/usm.png", w: 92, h: 56 },
  { name: "MOSTI", src: "/images/collaborations/mosti.png", w: 120, h: 43 },
  { name: "Universiti Malaysia Sabah", src: "/images/collaborations/ums.png", w: 60, h: 60 },
  { name: "Taylor's University", src: "/images/collaborations/taylors.svg", w: 113, h: 46 },
  { name: "J. Craig Venter Institute", src: "/images/collaborations/jcvi.svg", w: 128, h: 20 },
  { name: "Brigham and Women's Hospital", src: "/images/collaborations/brigham.svg", w: 128, h: 16 },
  { name: "AGRF", src: "/images/collaborations/agrf.png", w: 97, h: 54 },
  { name: "AstraZeneca", src: "/images/collaborations/astrazeneca.svg", w: 128, h: 33 },
  { name: "GATC Biotech", src: "/images/collaborations/gatc.png", w: 108, h: 48 },
];
