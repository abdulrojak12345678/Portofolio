 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcym1i4oAyM2rFmBU_Ipa0vcC7Pdz0dws",
  authDomain: "insan-cemerlang-2e18f.firebaseapp.com",
  projectId: "insan-cemerlang-2e18f",
  storageBucket: "insan-cemerlang-2e18f.appspot.com",
  messagingSenderId: "1096016420480",
  appId: "1:1096016420480:web:87611389fc765e7ddbd065",
  measurementId: "G-DW23S2DXCR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarabsensi() {
  const refDokumen = collection(db,"absensi");
  const kuery = query(refDokumen,orderBy("nama"));
  const cuplikankuery = await getDocs(kuery);
  
  let hasil = [];
  cuplikankuery.forEach((dok) => {
      hasil.push({ 
     id:dok.id, 
      tanggal: dok.data().tanggal,
      nis: dok.data().nis,
      nama: dok.data().nama,
      alamat: dok.data().alamat,
      noTlpon: dok.data().noTlpon,
      kelas: dok.data().kelas,
      keterangan: dok.data().keterangan

      });
  });
  
  return hasil;
}

export async function tambahAbsensi(tanggal, nis, nama, alamat, noTlpon, kelas, keterangan) {
  try {
    const dokRef = await addDoc(collection(db,'absensi'),{
   tanggal: tanggal,
   nis: nis,
   nama: nama,
   alamat: alamat,
   noTlpon: noTlpon, 
   kelas: kelas,
   keterangan: keterangan
    });
    console.log('berhasil menambah absensi'+ dok )
  } catch (e) {
  console.log('Gagal menambah absensi' + e);
  }
}

export async function hapusabsensi (docId) {
  await deleteDoc(doc(db,"absensi",docId));
}

export async function ubahAbsensi(docId, tanggal, nis, nama, alamat, noTlpon, kelas, keterangan ) {
  await updateDoc(doc(db, "absensi", docId), {
  
   tanggal: tanggal,
   nis: nis,
   nama: nama,
   alamat: alamat,
   noTlpon: noTlpon, 
   kelas: kelas,
   keterangan: keterangan
  });
}

export async function ambilabsensi(docId) {
  const docRef = await doc(db, "absensi", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}
 
 export async function ambilDaftarPembeli() {
  const refDokumen = collection(db, "pembeli");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      alamat: dok.data().alamat,
      notlpon: dok.data().notlpon,
    });
  });
  
  return hasil;
}
export async function  tambahPembeli(nama, alamat, notlpon) {
  try {
    const dokRef = await addDoc(collection(db, 'pembeli'), {
      nama: nama,
      alamat: alamat,
      notlpon: notlpon
    });
    console.log('Berhasil menambah produk ' + dokRef.id);
  } catch (e) {
    console.log('Gagal menambah produk' + e);
  }
   }
      export async function hapusPembeli(docId) {
  await deleteDoc(doc(db, "pembeli", docId));
}
export async function ubahPembeli(docId, nama, alamat, notlpon) {
  await updateDoc(doc(db, "pembeli", docId), {
    nama: nama,
    alamat: alamat,
    notlpon: notlpon
  });
}
export async function ambilPembeli(docId) {
  const docRef = await doc(db, "pembeli", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}

export async function ambilDaftarPenjual() {
  const refDokumen = collection(db, "Penjual-2");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      alamat: dok.data().alamat,
      gmail: dok.data().gmail,
      noTlpn: dok.data().noTlpn,
    });
  });



  return hasil;
}
export async function tambahPenjual(nama, alamat, gmail, noTlpn) {
  try {
    const dokRef = await addDoc(collection(db, 'Penjual-2'), {
      nama: nama,
      alamat: alamat,
      gmail: gmail,
      noTlpn: noTlpn
    });
    console.log('berhasil menembah produk ' + dokRef.id);
  } catch (e) {
    console.log('gagal menambah produk ' + e);
  }
}
export async function hapusPenjual(docId) {
  await deleteDoc(doc(db, "Penjual-2", docId));
}
export async function ubahPenjual(docId, nama, alamat, gmail, noTlpn) {
  await updateDoc(doc(db, "Penjual-2", docId), {
    nama: nama,
    alamat: alamat,
    gmail: gmail,
    noTlpn: noTlpn
  });
}
  export async function ambilPenjual(docId) {
  const docRef = await doc(db, "Penjual-2", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}

export async function ambilDaftarProduk() {
  const refDokumen = collection(db,"produk");
  const kuery = query(refDokumen,orderBy("nama"));
  const cuplikankuery = await getDocs(kuery);
  
  let hasil = [];
  cuplikankuery.forEach((dok) => {
      hasil.push({ 
     id:dok.id, 
      nama: dok.data().nama,
      harga:dok.data().harga,
      stok: dok.data().stok,
      });
  });
  
  return hasil;
}
export function formatangka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export async function tambahproduk(nama, harga, stok) {
  try {
    const dokRef = await addDoc(collection(db,'produk'),{
   nama: nama,
   harga: harga,
   stok: stok
    });
    console.log('berhasil menambah produk'+ dok )
  } catch (e) {
  console.log('Gagal menambah daftar produk' + e);
  }
}
export async function hapusproduk(docId) {
  await deleteDoc(doc(db,"produk",docId));
}
export async function ubahproduk(docId, nama, harga, stok) {
  await updateDoc(doc(db, "produk", docId), {
    nama: nama,
    harga: harga, 
    stok: stok
  });
}
export async function ambilproduk(docId) {
  const docRef = await doc(db, "produk", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}

