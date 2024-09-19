import { Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../State/Product/Action'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
]

const CreateProductForm = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  })

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    dispatch(createProduct(productData, jwt))
    console.log(productData);
    setTimeout(() => {
      setOpen(false);
      setOpenSnackbar(true)
    }, 1000);
  }
const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="success" size="small" onClick={handleClose}>
        Đóng
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  

  return (
    <Card>
       <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Thêm sản phẩm thành công"
        action={action}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className='p-5'>
        <Typography variant='h5' className='pb-5'>
          Thêm sản phẩm mới
        </Typography>

        <form onSubmit={handleSubmit} className='createProductContainer min-h-screen'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="ImageUrl" name='imageUrl' value={productData.imageUrl} onChange={handleChange} />
            </Grid>

            <Grid item xs={12} sm={6} >
              <TextField fullWidth label="Chất liệu" name='brand' value={productData.brand} onChange={handleChange}
                variant="filled" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Tên sản phẩm" name='title' value={productData.title} onChange={handleChange}
                variant="filled" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Màu sắc" name='color' value={productData.color} onChange={handleChange}
                variant="filled" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Số lượng" name='quantity' value={productData.quantity} onChange={handleChange} type='number' variant="filled" />
            </Grid>

            <Grid item xs={12} sm={4} >
              <TextField fullWidth label="Giá gốc" name='price' value={productData.price} onChange={handleChange} type='number'
                variant="standard" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField type='number' fullWidth label="Giá đã giảm" name='discountedPrice'
                value={productData.discountedPrice} onChange={handleChange} variant="standard" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Phần trăm giảm giá" name='discountPersent' value={productData.discountPersent}
                onChange={handleChange} type='number' variant="standard" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Phân loại</InputLabel>
                <Select name='topLavelCategory' value={productData.topLavelCategory} onChange={handleChange}
                  label='Top level Category' >
                  <MenuItem value='Nội_thất'>Nội thất</MenuItem>
                  <MenuItem value='Trang_tri'>Trang trí</MenuItem>
                  <MenuItem value='Khac'>Khác</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth >
                <InputLabel>Mặt hàng</InputLabel>
                <Select name='secondLavelCategory' value={productData.secondLavelCategory} onChange={handleChange}
                  label='Second level Category' >
                  <MenuItem value='Bàn'>Bàn</MenuItem>
                  <MenuItem value='Ghe'>Ghế</MenuItem>
                  <MenuItem value='Khac'>Khác</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Phân loại mặt hàng</InputLabel>
                <Select name='thirdLavelCategory' value={productData.thirdLavelCategory} onChange={handleChange}
                  label='Third level Category' >
                  <MenuItem value='Bàn_ăn'>Bàn ăn</MenuItem>
                  <MenuItem value='Banben'>Bàn bên</MenuItem>
                  <MenuItem value='Ghe_ngoi'>Ghế</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} >
              <TextField fullWidth id="oulined-multiline-static" label='Mô tả sản phẩm' multiline name='description' rows={3}
                onChange={handleChange} value={productData.description} />
            </Grid>

            {productData.size.map((size, index) => (
              <Grid container key={index} item spacing={3} >
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Size Name' name='name' value={size.name}
                    onChange={(event) => handleSizeChange(event, index)}
                    required />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Quantity' name='size_quantity' value={size.quantity} type='number'
                    onChange={(event) => handleSizeChange(event, index)}
                    required />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button color='success' variant='contained' sx={{ p: 1.8 }} className='py-20' size='large' type='submit'>
                Thêm sản phẩm
              </Button>
            </Grid>

          </Grid>
        </form>
      </div>
    </Card>

  )
}

export default CreateProductForm