import a1 from '../../../Asset/ProductImage/a1-binh-nau.png'
import b1 from '../../../Asset/ProductImage/b1-armchair-nautrang-1cho.png'

export const NavigationData = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: a1,
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: b1,
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { id:'tops', name: 'Tops', href: '#' },
              { id:'dresses', name: 'Dresses', href: '#' },
              { id:'Pants', name: 'Pants', href: '#' },
              { id:'Denim', name: 'Denim', href: '#' },
              { id:'Sweaters', name: 'Sweaters', href: '#' },
              { id:'T-Shirts', name: 'T-Shirts', href: '#' },
              { id:'Jackets', name: 'Jackets', href: '#' },
              { id:'Activewear', name: 'Activewear', href: '#' },
              { id:'Browse All', name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { id:'Watches', name: 'Watches', href: '#' },
              { id:'Wallets', name: 'Wallets', href: '#' },
              { id:'Bags', name: 'Bags', href: '#' },
              { id:'Sunglasses', name: 'Sunglasses', href: '#' },
              { id:'Hats', name: 'Hats', href: '#' },
              { id:'Belts', name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { id:'Full Nelson', name: 'Full Nelson', href: '#' },
              { id:'My Way', name: 'My Way', href: '#' },
              { id:'Re-Arranged', name: 'Re-Arranged', href: '#' },
              { id:'Counterfeit', name: 'Counterfeit', href: '#' },
              { id:'Significant Other', name: 'Significant Other', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
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
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
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

