# Writing and Presentation Test 2
---
## **JAVASCRIPT DASAR**
---
### 1. Perkenalan Javascript
- **JavaScript** atau yang biasa disingkat menjadi **JS** adalah sebuah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. **javascript** digunakan untuk memanipulasi data, membuat website menjadi interaktif, membuat fitur dan lainnya.
- Jika ingin membuat sebuah file **JavaScript** didalam code editor, maka ekstensi file nya adalah _.js_
- Cara menjalankan **Javascript** adalah dengan melalui perantara web browser seperti google chrome dan mozilla firefox
- **console.log** adalah suatu command javascript untuk menampilkan data ke console browser. Untuk mengakses **console.log** pada browser adalah dengan meng _klik_ kanan pada mouse anda kemudian _klik_ inspect dan _klik_ **console**
- Di dalam **Javascript** ada yang dinamakan **Syntax** dan **Statement**. **Syntax**  adalah sebuah aturan penulisan kalimat agar dapat dimengerti dan  di proses oleh bahasa pemrograman. Sedangkan untuk **Statement** sendiri adalah bagian program yang berisi tentang perintah yang akan dijalankan.
> **Syntax** juga daapat diartikan sebagai aturan penulisan pada bahasa pemrograman, tidak semua bahasa pemrograman memiliki sebuah **Syntax** yang sama. **Syntax** juga digunakan untuk membuat sebuah **Statement**.
- **Javascript** memiliki 6 **Tipe Data**, yaitu : <br>
    1. Number : tipe data yang menampung jenis angka. Tipe data Number dibagi menjadi 2, yaitu ``integer`` (terdiri dari bilangan bulat baik itu positif maupun negatif) dan ``float`` (terdiri dari bilangan desimal)
    2. String : tipe data yang berisi huruf, angka, symbol dan spasi
    3. Boolean : tipe data yang berisi pernyataan ``true`` or ``false``
    4. Null : tipe data yang berisi sebuah nilai ataupun tidak memiliki nilai
    5. Undefined : tipe data yang menyattakan variable atau data yang tidak memiliki nilai
    6. Object : tipe data yang berisi berbagai nilai dan memungkinkan untuk menggunakan tipe data lain yang ada didalamnya
- **Variable** adalah sebuah wadah untuk menampung nilai. Ada beberapa hal yang harus diperhatikan dalam membuat variable : <br>
    1. penulisan variable dianjurkan menggunakan camel case. contoh penulisan menggunakan camel case adalah : ``variableSatu``, ``contohVariable``
    2. penamaan variable tidak dianjurkan sama. Sebab dapat membuat program yang kita buat dapat mengalami error dikarenakan mendeteksi variable yang sama
    3. variable tidak dapat diawali dengan angka
- Ada 3 jenis variable didalam javascript, yaitu :
    1. var
    2. let
    3. const

---
### **Operator** 
didalam **javascript** digunakan untuk melakukan operasi pada suatu nilai dan variable. Ada beberapa macam aritmatika didalam javascript : <br>
1. **Operator Assignment** digunakan untuk membuat sebuah pernyataan. Operator Assigment menggunakan tanda ``=`` sebagai pernyataannya. Contohnya adalah : <br>
    ```
    var namaSaya = Alif
    console.log(namaSaya) // Output : Alif
    ```
2. **Operator Aritmatika** digunakan untuk melakukan operasi aritmatika seperti penjumlahan, pengurangan, penbagian, dll. <br>
        - penjumlahan ``+``
        - pengurangan ``-``
        - pembagian ``/``
        - modulus ``%``
        - perkaalian ``*`` <br>
    contoh operasi javascript menggunakan operator aritmatika :
    ```
        let angkaSatu = 10
        let angkaDua = 3
        let hasil = angkaSatu * angkaDua
        console.log (hasil) // Output : 30
    ```
3. **Operator Perbandingan** digunakan untuk membandingan 2 nilai. **Operator Perbandingan** menghasilkan nilai _booleaan_ yaitu ``true`` or ``false``. <br>
        - Lebih besar ``>``
        - Lebih Kecil ``<``
        - Sama Dengan ``==`` atau ``===``
        - Tidak Sama dengan ``!=``
        - Lebih besar sama dengan ``>=``
        - Lebih kecil sama dengan ``<=`` <br>
        Contoh syntax menggunakan Operator Perbandingan
    ```
    var angkaSatu = 50
    var angkaDua = 30
    var hasil = angkaSatu < angkaDua

    console.log(hasil) // Outuput : false, dikarenakan 50 lebih besar dari 30 bukan lebih kecil
    ```
4. **Operator Logika** digunakan untuk melakukan operasi terhadap 2 nilai tipe data ``boolean``. <br>
        - Logika AND ``&&``
        - Logika OR ``||``
        - Negasi/kebalikan ``!``
        Contoh Syntax menggunakan operator Logika
    ```
    // Deklarasi Variable
    var angkaSatu = 35
    var angkaDua = 60

    // Pernyataan
    var benar = angkaSatu < angkaDua
    var salah = angkaSatu > angkaDua

    // Proses
    var hasil = benar && salah

    console.log(hasil) // output : false, dikarenakan jika true bertemu false maka akan menjadi false.
    ```
---
### **Condition**
Kondisi atau sering dikenal sebagai Percabangan adalah sebuah statement untuk menentukan suatu kondisi. Contoh pernyataannya dalam kehidupan sehari hari adalah sebagai berikut : <br>
- Jika saya haus, saya akan minum
- Jika hari ini cuaca tidak hujan, maka saya akan pergi keluar rumah untuk membeli baju
- Syntax untuk penulisan ``if`` dalam javascript adalah sebagai berikut :
```
let cekNilai = 8
if (cekNilai == 8) {
    console.log ('Nilai anda adalah 8, sama seperti nilai variable')
}
```
- ``else`` digunakan untuk opsi jika kondisi tidak terpenuhi. contoh penulisan ``if..else`` adalah sebagai berikut : <br>
```
let cekNilai = 8
if (cekNilai %2 == 0) {
    console.log('angka didalam vvariable adalah genap')
} else {
    console.log('angka didalam variable adalah ganjil')
}
```
- ``Switch Case`` adalah salah satu percabangan yang digunakan jika kondisi percabangann terlalu banyak. Contoh penulisan ``Switch Case`` adalah sebagai berikut : <br>
```
let seragam = "batik"

switch (seragam) {
    case "putih putih":
            console.log("seragam hari senin")
            break;
    case "pramuka":
            console.log("seragam hari kamis")
            break;
    case "putih biru":
            console.log("seragam hari selasa")
            break;
    default:
            console.log("seragam hari jumat")
}
```
---
### **Looping**
Looping atau Perulangan adalah statement yang mengulang suatu perintah hingga kondisi perintah terpenuhi sehingga kondisi akan berhenti. Looping biasa digunakan untuk menampilkan sebuah nilai, looping yang sering digunakan adalah jenis ``for`` loop. Contoh penulisan ``for`` loop adalah :
```
let angka = 1 ;
for (let i = angka; i <=  10; i ++) {
    console.log("ini adalah perulangan ke " + i)
}
```
> Kenapa harus ditambah variable i ? agar dalam penulisan kita tidak perlu panjang panjang memanggil nama variable, lebih baik kita inisialisasi dan kita persingkat
---
### **Function**
dalam javascript adalah sebuah blok untuk menyelesaikan sebuah perintah yang diiginkan. contoh membuat function : <br>
```
function namaFunction() {
    return 'hai, ini adalah contoh membuat sebuah function'
}
```
untuk memanggil function adalah dengan langsung memanggil nama function yang kita buat. seperti : <br>
```
namaFunction()
console.log(namaFunction());
```
- Argumen dan Parameter dalam function javascript <br>
Argumen adalah nilai yang diteruskan kedalam sebuah function ketika function itu dipanggil. Sedangkan Parameter adalah variable yang terdaftar menjadi bagian dari definisi function. Contoh syntaxnya adalah sebagai berikut : <br>
```
function testArgument(parameterSatu, ParameterDua, ParameterTiga) {
    console.log(parameterSatu + ParameterDua + parameterTiga)
}

testArgument(1,3,6) // Output : 10
```
---
### **DOM HTML**
**DOM** atau kepanjangan dari _Document Object Model_ adalah cara memanipulasi html agar website yang kita bangun menjadi lebih dinamis dan interaktif.
- Cara memanggil DOM :
    - Memanggil tag HTML berdasarkan ID yang kita berikan pada tag HTML
    ``console.log(document.getElementByID("username"))``
    - Memanggil tag HTML berdasarkan Class
    ``console.log(document.getElementByClassName("container"))``
    - Memanggil tag HTML berdasarkan query selector
    ``console.log(document.querySelector(".form"))``

### Cara memanipulasi HTML dengan DOM
1. Saya akan memberikan sebuah contoh penerapan HTML DOM untuk membuat form pendaftaran.
 - Membuat form pada file HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Writing And Presentation Test 1</title>
</head>
<body>
    <div class="wrapper">
        <h4>Pendaftaran Kelompok Studi Independent</h4>
        <div>
        <form action="" method="post" id="form-pendaftaran">    
            <div class="form-group" id="form-kelompok">
                <label for="">Nama Kelompok</label>
                <input type="text" id="nama-kelompok" required>
            </div>
            <label for="" id="nama-anggota">Nama Anggota :</label>
            <div class="container">
            <div class="form-group" id="form-anggota1">
                    <label for="">Anggota 1</label>
                    <input type="text" id="anggota-satu">
            </div>
            <div class="form-group" id="form-anggota2">
                <label for="">Anggota 2</label>
                <input type="text" id="anggota-dua">
            </div>
            <div class="form-group" id="form-anggota3">
                <label for="">Anggota 3</label>
                <input type="text" id="anggota-tiga">
            </div>
            <div class="form-group" id="form-anggota4">
                <label for="">Anggota 4</label>
                <input type="text" id="anggota-empat">
            </div>
                <div class="form-group">
                    <label for="">Jurusan</label>
                    <input type="text" id="nama-jurusan" required>
                </div>
            </div>
            <div class="container">
                <div class="form-group">
                    <button class="button" type="submit">submit</button>
                </div>
                <div class="form-group">
                    <button class="button" onclick="resetForm()">reset</button>
                </div>
            </div>
        </form>

    </div>
    </div>
    <script src="writing-test.js"></script>
</body>
</html>
```
- validasi dan manipulasi form tersebut dengan DOM di Javascriptt
```
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
```
> **Proses menambahkan data** dengan menggunakan build bawaan dari javascript sendiri yaitu ``event`` dan ``.preventDefault()``

> **trigger aksi dengan ``.addEventListener`` dan ``.reset()``** agar data yang kita isi dapat disimpan maupun direset pada web browser.

2. saya akan memberikan sebuah contoh penerapan HTML DOM untuk mereset sebuah inputan form agar form nya menjadi bersih
- Membuat sebuah tag HTML
```
<form action="" method="post" id="form-pendaftaran">
    <div class="form-group">
        <button class="button" onclick="resetForm()">reset</button>
    </div>
```
 - Membuat proses DOM pada file Javascript
```
function resetForm () {
    document.querySelector('form').reset()
    }
```
> Penjelasan : kita menggunakan querySelector adalah untuk memilih seleruh id form pada form pendaftaran, sedangkan untuk .reset() sendiri itu adalah build bawaan dari javascript



