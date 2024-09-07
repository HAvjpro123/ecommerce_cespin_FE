import a1 from '../../../Asset/ProductImage/a1-binh-nau.png'
import b1 from '../../../Asset/ProductImage/b1-armchair-nautrang-1cho.png'

export const NavigationData = {
    categories: [
      {
        id: 'Nội_thất',
        name: 'Nội thất',
        featured: [
          {
            name: 'Nội thất cơ bản',
            href: '/Nội_thất/Bàn/Bằn_ăn',
            imageSrc: b1,
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
          {
            name: 'Dồ trang trí',
            href: '/Nội_thất/Bàn/Bằn_ăn',
            imageSrc: a1,
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'Bàn',
            name: 'Bàn',
            items: [
              { id:'Bàn_ăn', name: 'Bàn Ăn', href: '#' },
              { id:'Banben', name: 'Bàn Bên', href: '#' },
              { id:'Bàn nước', name: 'Bàn Nước', href: '#' },
              { id:'Bàn console', name: 'Bàn Console', href: '#' },
              { id:'Bàn làm việc', name: 'Bàn Làm Việc', href: '#' },
              { id:'Bàn ngoài trời', name: 'Bàn Ngoài Trời', href: '#' },
              { id:'Bàn trang điểm', name: 'Bàn Trang Điểm', href: '#' },
              { id:'Bàn đầu giường', name: 'Bàn Đầu Giường', href: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Ghế',
            items: [
              { id:'Watches', name: 'Ghế ăb', href: '#' },
              { id:'Wallets', name: 'Ghế bar', href: '#' },
              { id:'Bags', name: 'Ghế dài', href: '#' },
              { id:'Sunglasses', name: 'Ghế thư giãn', href: '#' },
              { id:'Hats', name: 'Ghế làm việc', href: '#' },
              { id:'Belts', name: 'Ghế ngoài trời', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Khác',
            items: [
              { id:'Full Nelson', name: 'Đèn trang trí', href: '#' },
              { id:'My Way', name: 'Thảm trang trí', href: '#' },
              { id:'Re-Arranged', name: 'Dụng cụ bếp', href: '#' },
              { id:'Counterfeit', name: 'Bình trang trí', href: '#' },
              { id:'Significant Other', name: 'Tranh', href: '#' },
            ],
          },
        ],
      },
      
      {
        id: 'men',
        name: 'Phòng',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: a1,
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: '#',
            imageSrc: b1,
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Góc cảm hứng', href: '#' },
      { name: 'Liên hệ', href: '#' },
    ],
  }

  window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('myDiv');
  
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 0) { // Khoảng cách từ đỉnh trang để thẻ div biến mất
      myDiv.classList.add('fixed');
     
    } else {
      myDiv.classList.remove('fixed');
    }
  });

