# Writing and Presentation Test 4
---
## **Asynchronous Javascript**
---
### 1. Perkenalan Asynchronous Javascript
Asynchronous adalah prosess jalannya suatu program yang bisa dilakukan secara bersamaan tanpa harus menunggu proses antrian. 

### 2. Kapan kita menggunakan Asynchronous ?
**Asynchrounous** digunakan ketika ingin memanipulasi DOM dan AJAX

---
- Promise <br>
**Promise** adalah seebuah mekanisme fitur pada  javascript ES6 yang mempresentaasikan sebuah object request pengolahan data, **Promise** mewakili sebuah operasi yang belum selesai. Ada 3 hal yang mungkin terjadi didalam **Promise** yaitu :
    - Pending : keadaan awal tidak terpenuhi atau tidak ditolak
    - Fulfilled : Terpenuhi atau sukses
    - Rejected : Tidak terpenuhi atau gagal

```
function contohPromise(list) {
    return new Promise((resolve, reject) => {
        if (list !== "" && list !== undefined) {
            resolve(list);
        }
        else {
            reject ("List haruss di isi")
        }
    } )
}

contohPromise()
    .then((response) => {
        console.log(response)
    } )
    .catch((error) => {
        console.log(error)
    })
```

- Fetch <br>
**Fetch** Adalah kegiatan untuk meminta request ke endpoint yang akan menerima request pada website secara lokal maupun publik, Untuk mengambil response resource atau sumber daya berupa data berformat json atau text yang biasa dilakukan programmer untuk membangun website yang membutuhkan data dari website lain

```
fetch("https://contohKeyApi.com/api/v3/contohUrl/contohLokal", {
    method : "GET"
} )
    .then(async(response) => {
        let ubahData = await response.json()
        console.log(ubahData)
    })
    .catch((error) => {
        console.log(error)
    } )
```
---
## HTTP dan Request Method
Http Request digunakan untuk alat komunikasi yang menghubungkan sisi **Front End** dengan **Back End**. Ada beberapa Request Method untuk HTTP, yaitu antara lain : <br>
- Get : untuk mengambil data 
- Post : untuk mengirim data
- Put : untuk mengirim atau mengedit data
- Delete : untuk menghapus data

---
## Responsive Web Design
**Responsive Web  Design** adalah sebuah teknik atau metode untuk membuat suatu layout website yang dapat menyesuaikan tampilannya diberbagai device. Untuk menggunakan Responsive web Design, tambahkan ```viewport``` pada bagian head ```html``` . Beberapa hal yang perlu diketahui untuk **Responsive Web Deesign** adalah sebagai berikut : <br>
- Jika terdapat gambar, maka bisa menggunakan atribut ```max-width = 100%``` , pada bagian css maupun pada tag html
- Penggunaan Media Query yang umum digunakan adalah ```min-width , max-width``` ```min-height , max-heght```
- Terdapat 3 jenis breakpoint yaitu desktop, tablet dan mobile phone

Dalam pembuatan layout, ada 2 cara untuk mengatur yaitu ```Grid``` dan ```Flexbox```. <br>

### Flexbox
Flexbox hanya dapat mengatur arah pembagian dimensi tampilan hanya secara horizontal saja atau secara vertikal saja.
- Flex Direction : 
    - row
    - row-reverse
    - column
    - column-reeverse
- Flex Wrap : 
    - nowrap
    - wrap
    - wrap-reverse
- Align-items :
    - center
    - flex-start
    - flex-end
    - space-between
    - space-around
    - space-evenly


### Grid
CSS yang dapat membagi kolom pada website menjadi beberapa bagian sesuai yang diinginkan, baik secara horizontal maupun vertikal. Penggunaan CSS Grid bertujuan untuk mempermudah developer untuk membuat layout dari design yang telah dibuat. Grid terdapat 2 jenis, yaitu container dan item :

---
## **Bootstrap**
Bootstrap adalah framework HTML, CSS, dan JavaScript yang berfungsi untuk mendesain website responsive dengan cepat dan mudah. <br>

### Cara menggunakan Bootstrap 

- Buka dokumentasi Bootstrap pada webiste Bootstrap
- Jika anda belum menginstall bootstrap, maka install terlebih dahulu pada terminal cmd anda. ```npm install bootstrap@5.2.2```
- Copy dan Paste Link css, javascript dan jquery Bootstrap pada halaman html yang ingin anda berikan templaate bootstrap
- Bootstrap siap anda gunakan


