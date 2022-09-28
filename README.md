# Writing and Presentation Test 1

## **HTML**
### a. Pengenalan HTML
- **HTML** atau kepanjangan dari **Hypertext Markup Language** adalah sebuah build markup standar untuk membuat dan menyusun halaman kontent pada sebuah website
- **HTML** juga bisa diartikan sebagai kerangka dasar dalam sebuah website. Jika diibaratkan anggota tubuh manusia, maka **HTML** adalah tulang kerangka yang membentuk tubuh kita
- Jika ingin membuat sebuah file **HTML** pada code editor, maka ekstenti file nya adalah _.html_
- **HTML** memiliki sebuah struktur sebagai berikut :
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
    <link href="link.css" type="text/css" rel="stylesheet"/>
</head>
    <body>
        <div>
            <h1 class="header">Contoh Sebuah Header Website</h1>
            <p>Contoh Sebuah Paragraf</p>
        </div>
    </body>
</html>
```
- **HTML** memiliki sebuah tag pembuka dan tag penutup, pada struktur html diatas kita mengambil contoh pembuka dan penutup tag pada paragraf <br>
Opening Tag : ``<p>`` <br>
Isi Kontent : ``Contoh Sebuah Paragraf`` <br>
Closing Tag : ``</p>``
- **HTML** memiliki single tag seperti ``<img src= "masukkan nama file image anda disini" >``
- Untuk Double Tag sendiri seperti ``<h2> </h2>`` ``<body> </body>`` dan masih banyak yang lainnya
- **HTML** Atribut adalah properti dari sebuah HTML. Beberapa Atribut tersebut antara lain seperti <br> ``id`` ``class`` dan ``name``

> **HTML** tidak dianggap ke dalam sebuah bahasa pemrograman, dikarenakan html tidak dapat memproses sebuah data secara dinamis. Adapun yang dimaksud dengan proses data secara dinamis adalah dapat menambahkan, mengedit, menghapus dan membaca sebuah data atau yang biasa kita sebut sebagai fitur CRUD
***

### b. Membuat Sebuah Fitur Sederhana Dengan HTML

> Salah satu fitur pada html yang akan saya buat pada kali ini adalah membuat sebuah **Form Pendaftaran** yang mana form tersebut dibuat menggunakan **HTML** 

- **Syntax HTML** : <br>
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
- **Penjelasan Syntax :** <br>
1. Syntax Untuk Membuat Form dimulai dengan menggunakan tag ``<form>`` dan penutupnya adalah ``</form>`` . Berikut adalah isi dari tag ``form`` nya :
```
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
```
2. Pada tag `` <form> ``, ``<div>`` dan ``<input>`` masukkan ``<id>`` agar form tersebut bisa kita validasi lewat **Javascript**

3. Tag ``<input type = "">`` menyesuaikan dengan type yang akan dimasukkan. Jika ingin memasukkan text maka type yang digunakan adalah ``text``, jika ingin type password maka menggunakan type ``password``
4. ``required`` adalah salah satu atribut yang biasa digunakan pada form. Atribut ini digunakan untuk meminimalisir kesalahan user saat proses inputan. Contohnya jika salah satu kolom tidak diisi, maka akan memunculkan pesan bawaan html yang berisi ``Please fill out this field``

---

## **CSS**
### a. Pengenalan CSS
- **CSS** atau kepanjangan dari **Cascading Style sheets** adalah sebuah bahasa style sheet yang digunakan untuk menentukan tampilan dan format sebuah halaman website. Dengan menggunakan **CSS** kita bisa mengatur besar dan kecil tampilan, mengatur jarak, memilih warna, menggunakan berbagai font dan background pada halaman website
- **CSS** berfungsi untuk mempercantik tampilan website. Jika html adalah kerangka dasar, maka **CSS** adalah kulit yang melapisi kerangka tersebut agar lebih menarik untuk dilihat
- Jika ingin membuat sebuah file **CSS** pada code editor, maka ekstensi file nya adalah _.css_
- Beberapa Struktur Pemanggilan **CSS** dan penjelasannya adalah sebagai berikut : <br>
```
.elementHTML {
    property : value;
}
```
> Pemanggilan menggunakan tanda ``.(titik)`` merupakan pemanggilan pada tag HTML yang memiliki properti ``<class>``

```
#idAtributHTML {
    property : value;
}
```
> Pemanggilan menggunakan tanda ``#(hastag)`` merupakan pemanggilan pada tag HTML yang memiliki atribut ``id``

```
tagHTML {
    property : value;
}
```

> Pemanggilan langsung menggunakan ``tag`` yang terdapat pada file HTML
- Ada 3 cara menggunakan atau memanggil CSS yaitu : inline tag, internal css dan eksternal file <br>
1. Inline tag : menggunakan style css langsung pada atribute element HTML
2. Internal CSS : Menggunakan tag style pada bagian head HTML
3. Eksternal FIle : menggunakan file css terpisah dengan file HTML
- Cara Mengakses file _.CSS_ pada HTML adalah dengan menggunakan tag : <br>
`` <link rel="stylesheet" type="text/css" href="namaFileCss.css" />``

### b. Mempercantik tampilan menggunakan CSS
> Setelah kita membuat sebuah table form pada **HTML**, langkah berikutnya adalah mempercantik  tampilan table form tersebut menggunakan **CSS**. Pada langkah ini kita akan mengubah size, background, grid, width dan height dan juga mengatur margin serta padding agar tampilan table form menjadi lebih baik.

- **Syntax CSS** : <br>
```
body {
    margin: 50px;
    padding: 50px;
    display: flex;
    background-color: aqua;
    justify-content: center;
    align-items: center;
}

/* css wrapper content */

.wrapper {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    justify-content: center;
    background-color: white;
    width: 50%;
    padding: 10px;
}

/* css judul table */

h4 {
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 10px;
    background: aqua;
    color: black;
    font-size: large;
    margin-bottom: 0;
}

/* css class form group */

.form-group label {
    display: flex;
    margin: 2rem 0 0.5rem 0;
}

/* css form kelompok */

#form-kelompok input[type="text"] {
    margin-top: 0%;
    width: 100%;
    height: 30px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 3px;
    margin-bottom: 20px;
}

/* css container grid */

.container {
    display: grid;
    grid-template-columns: 50% 50%;
}

/* css form-group */

.form-group input[type="text"] {
    column-gap: 50px;
    width: auto;
    height: 30px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 5px;
}

/* css button */

.button {
    display: grid;
    background-color: aqua;
    justify-content: center;
    margin-top: 20px;
    font-size: 15px;
    border-radius: 4px;

}

```
- **Penjelasan Syntax**
1. **CSS** pada tag ``<body>`` <br>
Untuk memanggil tag body pada HTML kedalam CSS, langsung kita tuliskan ``body`` pada file eksternal CSS dan tag body akan otomatis terpanggil. Perhatikan syntax CSS pada tag ``body`` sebagai berikut :
```
body {
    margin: 50px;
    padding: 50px;
    display: flex;
    background-color: aqua;
    justify-content: center;
    align-items: center;
}
```
Pada syntax diatas kita memasukkan beberapa property yang dimiliki oleh CSS yang berfungsi untuk mengatur item sesuai dengan property yang digunakan.  <br>
- ``Margin`` : Digunakan untuk mengatur jarak tepi dari sebuah elemen bagian luar
- ``Padding`` : Jarak antara isi konten dengan border atau ruang diantara konten dan batas pada CSS dalam website
- ``display Flex`` : Digunakan untuk pengaturan layout, posisi dan tampilan suatu konten yaang ukurannya belum diketahui atau bernilai dinamis
- ``background-color`` : Untuk menambahkan warna background
- ``justify-content`` : Digunakan untuk mengatur item item diantara flexbox agar container dari flexbox bisa mengatur ruang kosong yang tersisa
- ``align-items`` : sama seperti ``justify-content`` yang mana property ini mengatur susunan isi flexbox 

2. **CSS** pada ``class="wrapper"`` 
Wrapper adalah pembungkus kontent, dengan menggunakan wrapper kita bisa dengan mudah mengatur ukuran dan jarak kontent yang dibungkus tersebut. pada code diatas, saya menggunakan ``class="wrapper"`` untuk membungkus table ``form``.

3. **CSS** pada ``class="container"``
Container adalah sebuah pondasi dasar dari blok layout. Container berfungsi sebagai pembungkus blok didalamnya sehingga kita bisa mengatur grid. Saya menggunakan ``container`` agar bisa membuat 2 kolom textbox. tampilan pada **HTML** nya adalah sebagai berikut :<br>

![grid.png]( https://github.com/Dystopia669/Writing-and-Presentation-Test/blob/757fd2ea50213e82fbe00a913ca5a88fe0a1b1b4/code%20snap/grid.PNG )

4. **CSS** pada ``form-group``
Pada syntax ini berguna untuk mengatur tampilan textbox . Berikut adalah source code nya :
```
.form-group input[type="text"] {
    column-gap: 50px;
    width: auto;
    height: 30px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 5px;
}
```
- ``column-gap`` : berfungsi untuk mengatur jarak antar textbox, sehingga antara textbox 1 dengan yang lainnya tidak berdempetan
- ``display: inline-block`` : berfungsi untuk mengatur grid  secara horizontal

---
## **Javascript**
### a. Pengenalan JavaScript
- **JavaScript** atau yang biasa disingkat menjadi **JS** adalah sebuah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. **javascript** digunakan untuk memanipulasi data, membuat website menjadi interaktif, membuat fitur dan lainnya.
- **JavaScript** jika diibaratkan seperti pakaian dan style pada manusia. Javascript membuat website menjadi dinamis,  interaktif, menarik dan stylish
- Jika ingin membuat sebuah file **JavaScript** didalam code editor, maka ekstensi file nya adalah _.js_
- **console.log** adalah suatu command javascript untuk menampilkan data ke console browser
- **Variable** adalah sebuah wadah untuk menampung nilai. Ada beberapa hal yang harus diperhatikan dalam membuat variable : <br>
    1. penulisan variable dianjurkan menggunakan camel case. contoh penulisan menggunakan camel case adalah : ``variableSatu``, ``contohVariable``
    2. penamaan variable tidak dianjurkan sama. Sebab dapat membuat program yang kita buat dapat mengalami error dikarenakan mendeteksi variable yang sama
    3. variable tidak dapat diawali dengan angka
- Ada 3 jenis variable didalam javascript, yaitu :
    1. var
    2. let
    3. const
- **function** dalam javascript adalah sebuah blok untuk menyelesaikan sebuah perintah yang diiginkan. contoh membuat function : <br>
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
### b. Membuat variable, function dan menampilkannya di Console menggunakan JavaScript

>kita akan membuat sebuah proses data menggunakan javascript, yang mana data tersebut terdapat ``variable``, ``function`` dan ``aksi`` yang ditrigger dengan javascript.

- **Syntax JavaScript :** <br>
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

function resetForm () {
    document.querySelector('form').reset()
    }
```

- **Penjelasan Syntax**
1. **Membuat variable** dengan menggunakan tipe data ``const`` yang mana nantinya variable ini akan menampung sebuah nilai yang kita inputkan. berikut adalah syntax yang variable :
```
const namaKelompok = document.getElementById('nama-kelompok');
const anggotaSatu = document.getElementById('anggota-satu');
const anggotaDua = document.getElementById('anggota-dua');
const anggotaTiga = document.getElementById('anggota-tiga');
const anggotaEmpat = document.getElementById('anggota-empat');
const namaJurusan = document.getElementById('nama-jurusan');
const formPendaftaran = document.getElementById('form-pendaftaran');
```
syntax ``document.getElementById('namaId')`` diambil dari id yang kita tulis pada file **HTML**. Fungsinya adalah untuk memberitahu program bahwa nilai tersebut datang dari ``id`` yang kita tentukan dan akan dimasukkan menjadi variable

2. **Membuat function dan mengembalikan nilainya**, yang dimaksud mengembalikan nilainya disini adalah, ketika kita menggunakan function tersebut maka kita menyuruh program kita untuk menampung nilai dari variable yang kita buat. oleh sebab itu kita menggunakan ``return``. berikut adalah syntax nya : <br>
```
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
```
3. **Proses menambahkan data** dengan menggunakan build bawaan dari javascript sendiri yaitu ``event`` dan ``.preventDefault()``. Berikut adalah syntax codenya : <br>
```
function addData(event) {
    console.log(getFormData())
    event.preventDefault();
}
```
4. **trigger aksi dengan ``.addEventListener`` dan ``.reset()``** agar data yang kita isi dapat disimpan maupun direset pada web browser. Berikut adalah syntax untuk triger aksi :
```
formPendaftaran.addEventListener("submit", addData)

function resetForm () {
    document.querySelector('form').reset()
    }
```
---
## **GIT dan Command Line pada Git**

- Git adalah sebuah tools untuk control system pada sebuah source code. Git juga digunakan untuk melacak setiap perubahan yang terjadi pada file, folder maupun source code
- Yang paling sering digunakan oleh para programmer di dunia adalah Github dan Gitlab sebagai wadah untuk menampung repository code mereka

## **Konfigurasi dan cara menggunakan git**
- Langkah pertama untuk menggunakan git dalam device anda adalah dengan menginstall ``Git Bash`` terlebih dahulu. Git Bash adalah sebuah terminal untuk kita memberikan command yang akan dieksekusi
- Untuk membuat repository menggunakan command ``git init``
- ``git status`` untuk mengecek dimana letak branch kita pada git, dan untuk memastikan tidak ada perubahan pada repository
- ``git remote`` adalah command untuk penghubung antara directory kita dengan directory yang ada pada repository git
- ``git add`` untuk menambah file pada git
- ``git commit -m`` adalah command untuk memberikan massage keterangan ke repository atas perubahan yang dilakukan
- ``git push`` adalah command untuk mengupload file atau folder yang ada pada directory kita ke directory repository git. misal branch kita pada repository git bernama main, maka command nya adalah ``git push -u oirigin main``
- ``git branch -b 'nama branch'`` digunakan untuk membuat branch baru 
- ``git checkout`` digunakan untuk berpindah branch

---
## **Algoritma dan Pseudocode**

### **Algoritma**

- Algoritma adalah sebuah proses atau alur dalam pemecahan sebuah masalah yang dilakukan secara berurutan
- Dalam sebuah program, Algoritma adalah hal yang wajib dimiliki dalam membangun sebuah program dikarenakan Algoritma adalah penentu alur jalannya sebuah program
- Algoritma yang baik memiliki beberapa kriteria :
    - input dan output yang jelas
    - setiap langkah yang di lalui jelas dan tidak ambigu
    - algoritma dibuat agar ddapat diimplementasi kedalam bahasa pemrograman apapun, sehingga dalam pembuatan algoritma tidak mengandung unsur bahasa pemrograman tertentu
- Pentingnya Algoritma dalam pemrograman :
    - menentukan alur sebuah program, agar ketika program telah selesai dibuat tidak terjadi alur yang ambigu
    - dengan menggunakan algoritma maka pemrograman dapat mengidentifikasi struktur data yang digunakan
    - struktur data digunakan untuk mengolah sebuah data

- Contoh Membuat sebuah Algoritma : <br>
```
Input angka1 = 2
Input angka2 = 3
output = angka1 + angka 2
Print (output)
```

### **Pseudocode**
- Pseudocode adalah tools yang digunakan untuk menuliskan algoritma
- tata cara penulisan pseudocode :
    - bersifat spesifik
    - Menulis perintah menggunakan huruf kapital
    - 1 statement hanya terdiri dari 1 baris
- contoh pesudocode : <br>
```
program penentuan usia

deklarasi
var umur : integer

algoritma:
INPUT umur
IF (umur >= 17 ) THEN
    OUTPUT "remaja"
ELSE IF (umur >= 10 ) THEN
    OUTPUT "anak-anak"
ELSE
    OUTPUT "TUA"
```





