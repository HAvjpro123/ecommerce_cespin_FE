import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../State/store'
import { getOrders } from '../../State/Admin/Order/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const OrdersTable = () => {
  const dispatch = useDispatch()

  const { adminOrder } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  console.log("admin order", adminOrder)
  return (
    <div>
      <Card className='mt-2 ' >
        <CardHeader title='Quản lý sản phẩm' />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="right">Hình ảnh</TableCell>
                <TableCell align="left">Tên</TableCell>
                <TableCell align="left">Phân loại</TableCell>
                <TableCell align="left">Giá</TableCell>
                <TableCell align="left">Số lượng</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {adminOrder?.orders?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">
                    <AvatarGroup>
                      {item.orderItems.map((orderItem) =>
                        <img alt='ảnh sản phẩm' className='w-14 h-auto' src={orderItem.product.imageUrl} />
                      )}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align='left' scope="row">
                    {item.title}
                  </TableCell>
                  {/* <TableCell align="left">{item.category.name}</TableCell> */}
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  {/* <TableCell align="left">{item.quantity}</TableCell> */}
                  <TableCell align="left">
                    <Button variant='outlined'>Xóa</Button>
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

export default OrdersTable