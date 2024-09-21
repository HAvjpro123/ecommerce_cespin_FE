import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../State/store'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action'
import { Avatar, AvatarGroup, Backdrop, Button, Card, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Fade, Menu, MenuItem, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const OrdersTable = () => {
  const dispatch = useDispatch()
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openSnackbarDelete, setOpenSnackbarDelete] = useState(false);
  const [openDeleted, setOpenDeleted] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const { adminOrder } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder])

  const handleCloseDelete = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbarDelete(false);
  };

  const handleShipedOrder = (orderId) => {
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
    setOpenBackdrop(true)
    dispatch(deleteOrder(orderId))
    console.log("handle delete order", orderId)
    setTimeout(() => {
      setOpenBackdrop(false);
      setOpenSnackbarDelete(true)
    }, 1000);
    handleClose()
  }

  const handleOpenDelete = (orderId) => {
    setSelectedItemId(orderId);
    setOpenDeleted(true);
  };
  const handleOrderDelete = () => {
    if (selectedItemId) {
        setOpenBackdrop(true);
        dispatch(deleteOrder(selectedItemId));
        setOpenDeleted(false);
        setSelectedItemId(null);
        setTimeout(() => {
            setOpenBackdrop(false);
            setOpenSnackbarDelete(true)
        }, 1000);
    }
};

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null
    setAnchorEl(newAnchorElArray);
  };

  const actionDelete = (
    <React.Fragment>
      <Button color="success" size="small" onClick={handleCloseDelete}>
        Đóng
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseDelete}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

 

  return (
    <div>

      <Card className='mt-2 ' >
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar
          open={openSnackbarDelete}
          autoHideDuration={6000}
          onClose={handleCloseDelete}
          message="Xóa đơn hàng thành công"
          action={actionDelete}
        />
           {/* Dialog xác nhận xóa */}
           <Dialog
                open={openDeleted}
                onClose={() => setOpenDeleted(false)}
            >
                <DialogTitle>Xác nhận xóa</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Bạn có chắc chắn muốn xóa đơn hàng này không?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleted(false)}>Hủy</Button>
                    <Button onClick={handleOrderDelete} color='success' variant='outlined'>Xác nhận</Button>
                </DialogActions>
            </Dialog>
        <CardHeader title='Quản lý đơn hàng' />

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
                <TableCell align="left">Cập nhật đơn hàng</TableCell>
                <TableCell align="center">Thao tác</TableCell>
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
                  <TableCell align="left">
                    <Button
                      id="fade-button"

                      aria-haspopup="true"

                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`fade-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Cập nhật
                    </Button>
                    <Menu
                      id={`fade-menu-${item.id}`}
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      TransitionComponent={Fade}
                      PaperProps={{ style: { boxShadow: 'none', border: '0.5px solid', borderColor: 'gray' } }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Đã xác nhận</MenuItem>
                      <MenuItem onClick={() => handleShipedOrder(item.id)}>Đã vận chuyển</MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>Đã giao</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleOpenDelete(item.id)}
                      variant='outlined' color='error'>Xóa</Button>
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
