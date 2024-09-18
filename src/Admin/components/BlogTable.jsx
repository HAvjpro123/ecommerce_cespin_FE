import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts, updateProduct } from '../../State/Product/Action';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Troubleshoot } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
// hiển thị tiêu đề 
const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'ID',
    },
    {
        id: 'title',
        numeric: false,
        disablePadding: false,
        label: 'Tên sản phẩm ',
    },
    {
        id: 'image',
        numeric: false,
        disablePadding: false,
        label: 'Hình ảnh',
    },
    {
        id: 'color',
        numeric: true,
        disablePadding: false,
        label: 'Màu sắc',
    },
    {
        id: 'category.name',
        numeric: true,
        disablePadding: false,
        label: 'Phân loại',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Giá',
    },
    {
        id: 'quantity',
        numeric: Troubleshoot,
        disablePadding: false,
        label: 'Số lượng',
    },
    {
        id: 'button',
        numeric: false,
        disablePadding: false,
        label: 'Thao tác',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleProductDelete = (productId) => {
        setOpen(true);
        dispatch(deleteProduct(productId))
        setTimeout(() => {
            setOpen(false);
        }, 1000);
    }
    return (
        <Toolbar
            sx={[
                {
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                },

            ]}
        >

            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h5"
                id="tableTitle"
                component="div"
            >
                Quản lý sản phẩm
            </Typography>

        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function BlogTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const [openDeleted, setOpenDeleted] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const { products, updatedProduct } = useSelector((store) => store);
    const [category, setCategory] = useState('');  // Khởi tạo state để lưu category
    const dispatch = useDispatch();

    const categories = [
        { id: 'Bàn_ăn', name: "Bàn ăn" },
        { id: 'Banben', name: "Bàn bên " },
    ];

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);  // Cập nhật giá trị category
    };
    const [productData, setProductData] = useState({
        title: '',
        imageUrl: '',
        description: '',
        price: 0,
        discountedPrice: 0,
        discountPresent: 0,
        quantity: 0,
        brand: '',
        color: '',
        sizes: [],
        category: null
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductData({ ...productData, imageUrl: reader.result });
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProductDelete = () => {
        if (selectedItemId) {
            setOpen(true);
            dispatch(deleteProduct(selectedItemId));
            setOpenDeleted(false);
            setSelectedItemId(null);
            setTimeout(() => {
                setOpen(false);
            }, 1000);
        }
    };

    const handleOpenDelete = (productId) => {
        setSelectedItemId(productId);
        setOpenDeleted(true);
    };

    const handleOpenEdit = (productId) => {
        setSelectedItemId(productId);
        // Get the product details to edit
        const selectedProduct = products?.products?.content?.find((p) => p.id === productId);
        if (selectedProduct) {
            setProductData(selectedProduct);
            setImagePreview(selectedProduct.imageUrl); // Set initial image preview
        }
        setOpenEdit(true);
    };

    const handleEditProduct = () => {
        if (selectedItemId) {
            setOpen(true);
            dispatch(updateProduct(selectedItemId, productData)); // Gửi dữ liệu sản phẩm đã chỉnh sửa
            setOpenEdit(false);
            setSelectedItemId(null);
            setTimeout(() => {
                setOpen(false);
            }, 1000);
        }
    };

    useEffect(() => {
        const data = {
            category: "",
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 0,
            pageSize: 30,
            stock: ""
        };
        dispatch(findProducts(data));
    }, [products.deletedProduct]);

    useEffect(() => {

        dispatch(findProducts({
            category: category,
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 0,
            pageSize: 30,
            stock: ""
        }));

    }, [products.updatedProduct, category]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = products?.products?.content.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products?.products?.content.length) : 0;

    const visibleRows = React.useMemo(
        () => {
            const content = Array.isArray(products?.products?.content) ? products?.products?.content : [];
            return content
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        },
        [order, orderBy, page, rowsPerPage, products?.products?.content],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <div className='flex space-x-4'>
                <div>
                    <InputLabel id="category-label">Danh mục</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category-select"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Danh mục"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <div>
                    <InputLabel id="category-label">Danh mục</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category-select"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Danh mục"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>








            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {/* Dialog xác nhận xóa */}
            <Dialog
                open={openDeleted}
                onClose={() => setOpenDeleted(false)}
            >
                <DialogTitle>Xác nhận xóa</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Bạn có chắc chắn muốn xóa sản phẩm này không?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleted(false)}>Hủy</Button>
                    <Button onClick={handleProductDelete} color='success'>Xác nhận</Button>
                </DialogActions>
            </Dialog>

            {/* Dialog chỉnh sửa sản phẩm */}
            <Dialog
                open={openEdit}
                onClose={() => setOpenEdit(false)}
            >
                <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
                <DialogContent>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ marginTop: 16 }}
                    />
                    {imagePreview && (
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="body1">Ảnh xem trước:</Typography>
                            <img src={imagePreview} alt="Preview" style={{ maxWidth: '50%', height: 'auto' }} />
                        </Box>
                    )}

                    <TextField
                        margin="dense"
                        label="Tên sản phẩm"
                        fullWidth
                        variant="outlined"
                        value={productData.title}
                        onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Mô tả"
                        fullWidth
                        variant="outlined"
                        value={productData.description}
                        onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Giá"
                        fullWidth
                        variant="outlined"
                        type="number"
                        value={productData.price}
                        onChange={(e) => setProductData({ ...productData, price: parseInt(e.target.value, 10) })}
                    />
                    <TextField
                        margin="dense"
                        label="Giá giảm"
                        fullWidth
                        variant="outlined"
                        type="number"
                        value={productData.discountedPrice}
                        onChange={(e) => setProductData({ ...productData, discountedPrice: parseInt(e.target.value, 10) })}
                    />
                    <TextField
                        margin="dense"
                        label="Phần trăm giảm giá"
                        fullWidth
                        variant="outlined"
                        type="number"
                        value={productData.discountPresent}
                        onChange={(e) => setProductData({ ...productData, discountPresent: parseInt(e.target.value, 10) })}
                    />
                    <TextField
                        margin="dense"
                        label="Số lượng"
                        fullWidth
                        variant="outlined"
                        type="number"
                        value={productData.quantity}
                        onChange={(e) => setProductData({ ...productData, quantity: parseInt(e.target.value, 10) })}
                    />
                    <TextField
                        margin="dense"
                        label="Chất liệu"
                        fullWidth
                        variant="outlined"
                        value={productData.brand}
                        onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Màu sắc"
                        fullWidth
                        variant="outlined"
                        value={productData.color}
                        onChange={(e) => setProductData({ ...productData, color: e.target.value })}
                    />
                    {/* Add other fields as needed */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEdit(false)}>Hủy</Button>
                    <Button onClick={handleEditProduct} color='success'>Lưu</Button>
                </DialogActions>
            </Dialog>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={Array.isArray(products?.products?.content) ? products.products.content.length : 0}
                        />
                        <TableBody>
                            {visibleRows.map((item, index) => {
                                const isItemSelected = selected.includes(item.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, item.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={item.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            {/* Add any checkbox if needed */}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {item.id}
                                        </TableCell>
                                        <TableCell align="left">{item.title}</TableCell>
                                        <TableCell align="right">
                                            <img className='w-16 h-auto' src={item.imageUrl} alt="koco" />
                                        </TableCell>
                                        <TableCell align="right">{item.color}</TableCell>
                                        <TableCell align="right">{item.category.name}</TableCell>
                                        <TableCell align="right">{item.price}</TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                        <TableCell align="left">
                                            <Tooltip title="Chỉnh sửa">
                                                <IconButton color="warning" onClick={() => handleOpenEdit(item.id)} >
                                                    <EditNoteSharpIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Xóa">
                                                <IconButton color="error" onClick={() => handleOpenDelete(item.id)} >
                                                    <DeleteOutlineSharpIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={Array.isArray(products?.products?.content) ? products.products.content.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    );
}
