Market Aplication DBMS Mysql
============================
Aplikasi ini berjalan menggunakan DBMS Mysql dan dianjurkan menggunakan Aplikasi Administrator DBMS seperti Mysql workbench, PHPMyadmin, dll.

Aplikasi ini pun juga dapat di hubungkan dengan Aplikasi website dan mobile.

Langkah-langkah instalasi :
  1. Buka administrator DBMS, sebagai contoh phpmyadmin
  2. pilih import yang terdapat dinavbar kemudian pilih choose file dan buka folder sql cari file database.sql, kemudian pilih kirim.
  3. lakukan juga langkah 2 untuk file tables.sql, trigger.sql, dan procedures.sql.

Cara penggunaan :
  cara 1 :
    1. Buka administrator DBMS, sebagai contoh phpmyadmin, kemudian pilih SQL yang terdapat dinavbar
    2. selanjutnya ketik use use database_market_sql; nama_procedure('parameter_ke_n');
  cara 2 :
    1. Buka administrator DBMS, sebagai contoh phpmyadmin, kemudian klik refresh pada sidebar, lalu pilih "database_market_sql" yang terdapat di sidebar, dan pilih Routines
    2. kemudian eksekusi procedure yang dibutuhkan

Procedures
  Get Data :
    GetAllProduk();
    GetProdukById('key');
    GetAllPemasok();
    GetPemasokById('key');
    GetAllPelanggan();
    GetPelangganById('key');
    GetTransaksiPembelian();
    GetTransaksiPembelianById('key');
    GetTransaksiPenjualan();
    GetTransaksiPenjualanById('key');
  Insert Data :
    InsertProduk('key', 'nama');
    InsertPemasok('nama', 'email', 'phone', 'alamat');
    InsertPelanggan('nama', 'email', 'phone', 'alamat');
    InsertTransaksiPembelian('key_pemasok', 'key_produk', 'harga', banyak);
    InsertTransaksiPenjualan('key_pelanggan', 'key_produk', 'harga', banyak);
  Update Data :
    UpdateProduk('key', 'nama');
    UpdatePemasok('key', 'nama', 'email', 'phone', 'alamat');
    UpdatePelanggan('key', 'nama', 'email', 'phone', 'alamat');
  Delete Data :
    DeleteProduk('key');
    DeletePemasok('key');
    DeletePelanggan('key');

Mohon Do'a dan Support nya selalu Teman-teman

terima kasih...

Happy code (^_^)