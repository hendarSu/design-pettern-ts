# Abstract Factory
Abstract Factory merupakan pola desain kreasi yang memungkinkan anda menghasilkan kumpulan objek terkait tanda menentukan kelas konkretnya.

terdapat beberapa masalah diantarnaya
bayangkan anda sedang membuat sebuah simolator toko furnitur. kode anda terdiri dari kelas yg mewakili.

## Problem
A. Sebauh keluarga produk terkait sebagai contoh. kursi, sofa dan meja
B. Beberapa varian dari keluarga ini misalnya, produk kuris, sofa dan meja tersedia dalam variant sebagai berikut
- moderen
- victorian
- dan artDeco.

anda butuh cara untuk membuat object furnitur agar sesuai dengan objek lain dari keluarga yang sama, pelanggan menjadi sangat marah ketika menerima furnitur yg tidak sesuai.

selain itu, anda tidak ingin mengubah kode yg ada saat ini menambahkan produk baru atau rangkaian produk ke program, Vendor furnitur sangat sering memperbaharui katalog mereka, dan anda tidak ingin mengubah kode inti setiap kali itu terjadi.

## We Have a solution
Hal pertama yang disarankan oleh pola abstract factory adalah secara eksplisit menyatakan antarmuka untuk setiap produk berbeda dari keluarga produk misalnya kursi, sofa atau meja. Kemudaian anda mengikti antarmuka tersebut, misalnya semua vairan kursi dapat mengimplementasikan antarmuka kursi. semua varaian meja datam mengimplementasikan antarmuka Meja dan seterusnya.