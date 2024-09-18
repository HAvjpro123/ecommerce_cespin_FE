import { Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { deleteProduct, findProducts } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const ProductsTable = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { products } = useSelector(store => store);

  const handleProductDelete = (productId) => {
    setOpen(true);
    dispatch(deleteProduct(productId))
    setTimeout(() => {
      setOpen(false);
  }, 1000);
  }

  console.log("product---", products)
  useEffect(() => {
    const data = {
      category: "Bàn_ăn",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 30,
      stock: ""
    }
    dispatch(findProducts(data))
  }, [products.deletedProduct])
  return (
    <div className=''>
      <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
      <Card className='mt-2 ' >
        <CardHeader title='Quản lý sản phẩm'/>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell>Hình ảnh</TableCell>
                <TableCell align="left">Tên</TableCell>
                <TableCell align="left">Phân loại</TableCell>
                <TableCell align="left">Giá</TableCell>
                <TableCell align="left">Số lượng</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="center">
                    <img alt='ảnh sản phẩm' className='w-16 h-auto' src={item.imageUrl} />
                  </TableCell>
                  <TableCell align='left' scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handleProductDelete(item.id)} variant='outlined'>Xóa</Button>
                  </TableCell>
                  <TableCell align="left">
                    {/* khi ấn vào button ở đây thì có thể chỉnh sửa sản phẩm  */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

    </div>
  )
}

export default ProductsTable