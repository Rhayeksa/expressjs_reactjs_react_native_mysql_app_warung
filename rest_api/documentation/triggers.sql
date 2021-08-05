use
  market_db;
delimiter / /
  create trigger after_insert_pembelian
  after
    insert
      on pembelians for each row
  begin
    update
      produks
    set
      stok = stok + new.banyak
    where
      id = new.produk_id;
  end
/ /
delimiter / /
  create trigger after_delete_pembelian
  after
    update
      on pembelians for each row
  begin
    update
      produks
    set
      stok = stok - old.banyak
    where
      id = old.produk_id;
  end
/ /
delimiter / /
  create trigger after_insert_penjualan
  after
    insert
      on penjualans for each row
  begin
    update
      produks
    set
      stok = stok - new.banyak
    where
      id = new.produk_id;
  end 
/ /
delimiter / /
  create trigger after_delete_penjualan
  after
    update
      on penjualans for each row
  begin
    update
      produks
    set
      stok = stok + old.banyak
    where
      id = old.produk_id;
  end
/ /