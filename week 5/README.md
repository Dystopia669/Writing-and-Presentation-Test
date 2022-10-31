# Writing and Presentation Test 5
---
## **Node JS**
---
### 1. Pengertian Node Js
**Node Js** adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Node Js menggunakan V8 javascript engine (Engine Google Chrome) dan juga Node Js menyediakkan banyak library /module javascript yang membantu menyederhanakan pengembangan aplikasi web. Beberapa fitur penting dari Node Js adalah :
* Asynchronous & Event-driven <br>
Semua API dari Node.js bersifat asynchronous, artinya tidak memblokir proses lain sembari menunggu satu proses selesai. Server Node.js akan melanjutkan ke ke pemanggilan API berikutnya lalu memanfaatkan mekanisme event notification untuk mendapatkan respon dari panggilan API sebelumnya.
* Single Threaded but highly scalable <br>
Node.js menggunakan model single thread dengan event looping. Mekanisme ini membantu server untuk merespon secara asynchronous dan menjadikan server lebih scalable dibandingkan server tradisional yang menggunakan banyak thread untuk menangani permintaan.

### 2. Instalasi Node Js
Jika kalian menggunakan windows, maka cara menginstal Node Js adalah dengan mengunjungi website Node Js yaitu `https://nodejs.org/en/download/` , jika menggunakan Ubuntu maka ketik `sudo apt-get install nodejs` pada terminal. 

### 3. Cara membuat folder Node js
1. Membuat folder Node Js Dengan cara manual <br>
    Untuk membuat folder node js bisa dilakukan dengan cara membuat new folder pada storage komputer anda, kemudian masuk ke `Git Bash` dan ketikkan code berikut : <br>
    - `npm init`
    - `npm install`
    - `npm install express --save`
2. Membuat folder Node Js dengan Terminal
    Ketik `mkdir nama folder-app` pada terminal anda kemudian ketikkan code berikut : <br>
    - `npm init`
    - `npm install`
    - `npm install express --save`

### 4. Server pada Node Js
Pada Node Js, kita menjalankan program adalah ddengan menggunakan server sendiri. Biasanya menggunakan port localhost:3000 , atau bisa juga dengan port yang lain. Dengan menggunakann module http, kita bisa membuat server HTTP sederhana. contoh source code nya adalah sebagai berikut :
```
const http = request["http"]
constt Host = "localhost"
const Port = 3000

const requestHandle = {request, response} => {
    console.log{request.url}
    response.end("testing membuat projek dengan node js")
}

const server = http.createServer(reqestHandle)

server.listen(PORT, HOST, err => {
    if (err) {
        return console.log("Something Error", err)
    }

    console.log(`Server run on ${HOST}:${PORT}`)
})

// Output : testing membuat projek dengan node js
```
---
## **Design Database**
---
### 1. Pengertian Database
**Database** adalah sekumpulan data yang dikelola dengan sedemikian rupa berdasarkan ketentuan yang saling berkaitan sehingga  dapat mudah dikelola. 

### 2. Jenis dan fungsi database 

1. Operational Database <br>
    Operational Database memiliki fungsi sebagai suatu tempat untuk mengelola data dinamis secara langsung dan real time. <br>
    
    - JSON <br>
    JSON atau JavaScript Object Notation merupakan format file yang memakai teks guna melakukan pengiriman data. Format tersebut biasa dipakai oleh pengguna untuk melakukan pertukaran data layaknya berinteraksi cepat melalui web browser maupun web server
    - XML <br>
    XML atau Extensible Markup Language merupakan sebuah bahasa pada program markup yang mempunyai aturan untuk memberikan dua kode dokumen yang berbeda agar dapat dibaca oleh manusia dan komputer.

2. Database Warehouse <br>
    Database Warehouse merupakan sistem basis data yang biasa dipakai untuk melakukan pelaporan dan analisis data. Sistem ini juga dianggap sebagai komponen inti dari business intelligence.

    - Microsoft SQL Server <br>
    Microsoft SQL Server merupakan suatu produk dari perangkat lunak yang memiliki tujuan untuk mengambil, dan menyimpan sebuah data sesuai dengan permintaan pada aplikasi lainnya.

3. Distributed Database <br>
    Distributed Database merupakan suatu basis data dengan perangkat penyimpanannya yang tidak terpasang pada sebuah perangkat komputer maupun sejenisnya yang serupa.

4. Relational Database
    Relational Database merupakan basis data yang mengorganisir berdasarkan pada model hubungan data.

    - MySQL <br>
    MySQL merupakan salah satu komponen penting dari web service solution stack LAMP (Linux, MySQL, Apache, and PHP) yakni platform pengembangan web sumber terbuka. Linux sebagai sistem operasi, MySQL sebagai basis data, Apache sebagai Web Server, dan PHP sebagai bahasa skrip.

    - PostgreSQL <br>
    Sistem ini biasanya dipakai pada sistem operasi mac OS server, hal itu dikarenakan sistem ini telah menyediakan pengaturan secara default. Sistem operasi lainnya contohnya Windows dan Linux juga bisa ditemukan dengan mengubah pengaturannya.

    - MariaDB <br>
    MariaDB merupakan sistem yang dikembangkan dari MySQL. Pengembangan pada sistem ini bertujuan untuk mempertahankan kompatibilitas tinggi dari sistem MySQL. Serta sangat cocok digunakan dengan API MySQL.

### 3. Tipe Data
Tipe data merupakan jenis nilai yang bisa ditampung pada suatu variable, bisa berupa angka, teks, atau gambar. Dengan begitu kita dapat menentukan tipe data yang akan mempermudah dalam pengaturan suatu tabel.

1. Tipe Data Numerik <br>
    Merupakan tipe data yang dapat kita gunakan pada suatu variabel konstanta yang dapat menyimpan nilai berupa angka.

    - Int <br>
    Menyimpan data bilangan bulat positif dan negatif, ukurannya adalah 4 byte (32 bit)
    - BIGINT <br>
    Menyimpan data bilangan bulat positif dan negatif, ukurannya adalah 8 byte (64 bit)
    - FLOAT <br>
    Menyimpan data bilangan pecahan positif dan negatif, ukurannya adalah 4 byte (32 bit)

2. Tipe Data Teks (String) <br>
    Merupakan tipe data yang bisa kita gunakan untuk menampung banyak karakter dengan jumlah maksimum data yang dapat ditampung yakni sebanyak 255 karakter.

    - Char <br>
    Menyimpan data string ukuran tetap
    - Varchar <br>
    Menyimpan data string ukuran dinamis
    - Text <br>
    Menyimpan  data text yang panjangnya mencapai 65.535

3. Tipe Data Date <br>
    Tipe Data Date digunakan untuk menyimpan data tanggal dengan format tahun, bulan, tanggal. Beberapa jenis tipe data date yang dapat digunakan.

### 4. Menenentukan entitas dan atribut
**Entitas** adalah benda, tempat, unit, objek atau hal lainnya yang mempresentasikan data, dan data tersebut akan disimpan ke dalam pangkal data. Contoh umum entitas pada database adalah : user, product, order, payment dll. **Atribut** adalah ciri atau karakter yang membedakan antara entitas 1 dengan entitas yang lainnya, contoh umum atribut didalam database adalah : id user, alamat user, nomor hp, harga product, jumlah order dll. Berikut adalah contoh table yang berisikan entitas User dan atributnya dalam sebuah database : <br>

![grid.png] (https://github.com/Dystopia669/Writing-and-Presentation-Test/blob/5e0f5ec168e7c7dc774da65b537f1565dab878fa/week%205/table%20user.png)
