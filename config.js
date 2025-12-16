/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: " Đức Dương  ",
  brideName: "Thúy Hiền ",

  weddingDate: "12/29/2025  13:00:00",
  location: "Số nhà 45, xóm Đông Trung, thôn Trần Đăng, Xã Ứng Thiên, Tp Hà Nội",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/FRcaQZikbj6UBMNK9",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317.88972947247845!2d105.7510178!3d20.7708082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31344b8c4298cff1%3A0xa3e27b9de3502454!2zTkdVWeG7hE4gxJDhu6hDIETGr8agTkc!5e1!3m2!1svi!2s!4v1765869620260!5m2!1svi!2s",
  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/bYvdfG8y5M0",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Đức Dương",
      parents: " -<br>Mẹ: Nguyễn Thị Biên",
      address: "Địa chỉ: Số nhà 45, xóm Đông Trung, thôn Trần Đăng, Xã Ứng Thiên, Tp Hà Nội"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thúy Hiền",
      parents: "Bố: Nguyễn Văn Phong<br>Mẹ: Nghiêm Thị Lan",
      address: "Địa chỉ: Số 9 Đường Phú Lương Thượng 2, Quảng Phú Cầu, Ứng Thiên, Hà Nội "
    }
  },
  qr: [
    {src: "assets/QR01.jpg", title: " NGUYEN DUC DUONG", info: "Vietcombank - 0451000451738"},
  ],
};
