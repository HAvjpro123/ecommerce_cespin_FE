import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../State/store'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Fade, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const OrdersTableView = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const { adminOrder } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder])

  const handleShipedOrder = (orderId ) => {
    dispatch(shipOrder(orderId))
    console.log("handle shipped order", orderId)
    handleClose()
  }

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    console.log("handle confirmed order", orderId)
    handleClose()
  }

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId))
    console.log("handle deliverd order", orderId)
    handleClose()
  }

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
    console.log("handle delete order", orderId)
    handleClose()
  }

  const handleClick = (event, index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=event.currentTarget
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
  };


  console.log("admin order", adminOrder)
  return (
    <div>

      <Card className='mt-2 ' >
        <CardHeader title='Danh sách đơn hàng' />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Mã đơn hàng</TableCell>
                <TableCell align="left">Ảnh sản phẩm</TableCell>
                <TableCell align="left">Tên sản phẩm</TableCell>
                <TableCell align="left">Người mua</TableCell>
                <TableCell align="left">Tổng giá</TableCell>
                <TableCell align="left">Ngày đặt hàng</TableCell>
                <TableCell align="left">Trạng thái</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#f1f2f6' }}
                >
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left" scope="row">
                    <AvatarGroup max={2} sx={{ justifyContent: 'start' }} >
                      {item.orderItems.map((orderItem, index) =>
                        <Avatar key={index} alt='ảnh sản phẩm' className='w-20 h-auto' src={orderItem.product.imageUrl} />
                      )}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align='left'>
                    <div className=' text-gray-900 font-medium overflow-hidden line-clamp-2 text-ellipsis'>
                      {item.orderItems.map((orderItem, index) =>
                        <p key={index}>{orderItem.product.title}, SL:{orderItem.quantity}</p>
                      )}

                    </div>
                    <p className='font-semibold'>Tổng số lượng sản phẩm: {item.totalItem}</p>
                  </TableCell>
                  <TableCell align="left">{item.user.firstName} {item.user.lastName}</TableCell>
                  <TableCell align="left">{item.totalDiscountedPrice}$</TableCell>
                  <TableCell align="left" className='w-10'>{item.orderDate}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full
                        ${item.orderStatus === 'CONFIRMED' ? 'bg-green-600' :
                          item.orderStatus === 'SHIPPED' ? 'bg-yellow-500' :
                            item.orderStatus === 'DELIVERED' ? 'bg-blue-500' :
                              item.orderStatus === 'PENDING' ? 'bg-gray-400' :
                                item.orderStatus === 'PLACED' ? 'bg-green-400' :
                                  'text-red-600'}`}>{item.orderStatus}
                    </span>
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

export default OrdersTableView
