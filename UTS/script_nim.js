$(document).ready(function () {
    // Data kota dan biaya jarak
    const kota = ["Banyuwangi", "Jember", "Probolinggo", "Surabaya"];
    const biayaJarak = {
        Banyuwangi: { Banyuwangi: 0, Jember: 5000, Probolinggo: 10000, Surabaya: 15000 },
        Jember: { Banyuwangi: 5000, Jember: 0, Probolinggo: 7500, Surabaya: 12500 },
        Probolinggo: { Banyuwangi: 10000, Jember: 7500, Probolinggo: 0, Surabaya: 6500 },
        Surabaya: { Banyuwangi: 15000, Jember: 12500, Probolinggo: 6500, Surabaya: 0 },
    };

    // Biaya berat barang
    const biayaBerat = [
        { max: 1, biaya: 1500 },
        { max: 5, biaya: 2500 },
        { max: 10, biaya: 3500 },
        { max: Infinity, biaya: 4500 },
    ];

    // Populate dropdown kota
    kota.forEach((k) => {
        $("#asal, #tujuan").append(new Option(k, k));
    });

    // Hitung biaya pengiriman
    $("#hitung").click(function () {
        const berat = parseFloat($("#berat").val());
        const asal = $("#asal").val();
        const tujuan = $("#tujuan").val();

        if (isNaN(berat) || !asal || !tujuan) {
            $("#result").text("Error: Lengkapi semua data!");
            return;
        }

        // Hitung biaya berat
        let beratBiaya = 0;
        for (let i = 0; i < biayaBerat.length; i++) {
            if (berat <= biayaBerat[i].max) {
                beratBiaya = biayaBerat[i].biaya;
                break;
            }
        }

        // Hitung biaya jarak
        const jarakBiaya = biayaJarak[asal][tujuan];

        // Total biaya
        const total = beratBiaya + jarakBiaya;

        // Tampilkan hasil
        $("#result").text(`Total Biaya: Rp ${total.toLocaleString()}`);
    });
});
