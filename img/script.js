let keranjang = [];
let totalHarga = 0;

function tambahKeKeranjang(namaProduk, hargaProduk) {
  keranjang.push({ nama: namaProduk, harga: hargaProduk });
  totalHarga += hargaProduk;
  updateKeranjang();
}

function updateKeranjang() {
  const listKeranjang = document.getElementById("listKeranjang");
  listKeranjang.innerHTML = "";
  keranjang.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - ${item.harga}`;
    listKeranjang.appendChild(li);
  });
  document.getElementById("totalHarga").textContent = `${totalHarga}`;
}

function prosesPembayaran() {
  document.getElementById("formPembayaran").style.display = "block";
}

function selesaiPembayaran() {
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const metodePembayaran = document.getElementById("metodePembayaran").value;

  // Lakukan proses sesuai metode pembayaran yang dipilih
  if (metodePembayaran === "cod") {
    alert(
      `Terima kasih, ${nama}! Pesanan Anda akan dikirim ke alamat ${alamat} dan akan dibayar saat barang sampai.`
    );
  } else if (metodePembayaran === "transfer") {
    alert(
      `Terima kasih, ${nama}! Silakan transfer total pembayaran sebesar $${totalHarga} ke nomor rekening yang akan kami informasikan melalui email.`
    );
  }

  resetKeranjang();
  document.getElementById("formPembayaran").style.display = "none";
}

function resetKeranjang() {
  keranjang = [];
  totalHarga = 0;
  updateKeranjang();
}
