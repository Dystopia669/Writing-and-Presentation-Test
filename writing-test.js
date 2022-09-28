const namaKelompok = document.getElementById('nama-kelompok');
const anggotaSatu = document.getElementById('anggota-satu');
const anggotaDua = document.getElementById('anggota-dua');
const anggotaTiga = document.getElementById('anggota-tiga');
const anggotaEmpat = document.getElementById('anggota-empat');
const namaJurusan = document.getElementById('nama-jurusan');
const formPendaftaran = document.getElementById('form-pendaftaran');

function getFormData () {
    return {
        namaKelompok: namaKelompok.value,
        anggotaSatu: anggotaSatu.value,
        anggotaDua: anggotaDua.value,
        anggotaTiga: anggotaTiga.value,
        anggotaEmpat: anggotaEmpat.value,
        namaJurusan: namaJurusan.value
    }
}

function addData(event) {
    console.log(getFormData())
    event.preventDefault();
}

formPendaftaran.addEventListener("submit", addData)

function resetForm () {
    document.querySelector('form').reset()
    }



