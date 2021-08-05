use
  database_market_sql;
create table produk (
    id varchar(45) not null,
    nama varchar(45) not null,
    stok int not null default 0,
    createdAt datetime not null default current_timestamp(),
    updatedAt datetime not null default current_timestamp(),
    primary key (id)
);
create table pemasok (
    id varchar(45) not null,
    nama varchar(45) not null,
    email varchar(45) not null unique,
    phone numeric not null unique,
    alamat varchar(255) not null,
    createdAt datetime not null default current_timestamp(),
    updatedAt datetime not null default current_timestamp(),
    primary key (id)
);
create table pelanggan (
    id varchar(45) not null,
    nama varchar(45) not null,
    email varchar(45) not null unique,
    phone numeric not null unique,
    alamat varchar(255) not null,
    createdAt datetime not null default current_timestamp(),
    updatedAt datetime not null default current_timestamp(),
    primary key (id)
);
create table pembelian (
    id varchar(45) not null,
    harga int not null,
    banyak int not null,
    produk_id varchar(45) not null,
    pemasok_id varchar(45) not null,
    createdAt datetime not null default current_timestamp(),
    updatedAt datetime not null default current_timestamp(),
    constraint fk_pembelian_produk foreign key (produk_id) references produk (id),
    constraint fk_pembelian_pemasok foreign key (pemasok_id) references pemasok (id)
);
create table penjualan (
    id varchar(45) not null,
    harga int not null,
    banyak int not null,
    produk_id varchar(45) not null,
    pelanggan_id varchar(45) not null,
    createdAt datetime not null default current_timestamp(),
    updatedAt datetime not null default current_timestamp(),
    constraint fk_penjualan_produk foreign key (produk_id) references produk (id),
    constraint fk_penjualan_pelanggan foreign key (pelanggan_id) references pelanggan (id)
);