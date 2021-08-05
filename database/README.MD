# Market Aplication DBMS Mysql

Aplikasi ini berjalan menggunakan DBMS Mysql dan dianjurkan menggunakan Aplikasi Administrator DBMS seperti Mysql workbench, PHPMyadmin, dll.

Aplikasi ini pun juga dapat di hubungkan dengan Aplikasi website dan mobile.

## Langkah-langkah instalasi :

1. Buka administrator DBMS, sebagai contoh phpmyadmin
2. pilih import yang terdapat dinavbar kemudian pilih choose file dan buka folder sql cari file database.sql, kemudian pilih kirim.
3. lakukan juga langkah 2 untuk file tables.sql, trigger.sql, dan procedures.sql.

## Cara penggunaan :

### cara 1 :

1. Buka administrator DBMS, sebagai contoh phpmyadmin, kemudian pilih SQL yang terdapat dinavbar
2. selanjutnya ketik use use database_market_sql; nama_procedure('parameter_ke_n');

### cara 2 :

1. Buka administrator DBMS, sebagai contoh phpmyadmin, kemudian klik refresh pada sidebar, lalu pilih "database_market_sql" yang terdapat di sidebar, dan pilih Routines
2. kemudian eksekusi procedure yang dibutuhkan

## Procedures

### Get Data :

1. GetAllProduk();
2. GetProdukById('key');
3. GetAllPemasok();
4. GetPemasokById('key');
5. GetAllPelanggan();
6. GetPelangganById('key');
7. GetTransaksiPembelian();
8. GetTransaksiPembelianById('key');
9. GetTransaksiPenjualan();
10. GetTransaksiPenjualanById('key');

### Insert Data :

1. InsertProduk('key', 'nama');
2. InsertPemasok('nama', 'email', 'phone', 'alamat');
3. InsertPelanggan('nama', 'email', 'phone', 'alamat');
4. InsertTransaksiPembelian('key_pemasok', 'key_produk', 'harga', banyak);
5. InsertTransaksiPenjualan('key_pelanggan', 'key_produk', 'harga', banyak);

### Update Data :

1. UpdateProduk('key', 'nama');
2. UpdatePemasok('key', 'nama', 'email', 'phone', 'alamat');
3. UpdatePelanggan('key', 'nama', 'email', 'phone', 'alamat');

### Delete Data :

1. DeleteProduk('key');
2. DeletePemasok('key');
3. DeletePelanggan('key');

> Mohon Do'a dan Support nya selalu Teman-teman
>
> terima kasih...
>
> Happy code (^\_^)
